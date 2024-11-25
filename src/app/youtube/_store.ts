// store/youtubeStore.ts
import { proxy } from 'valtio';
import { IYoutubeChannel } from "./_interfaces";
import { readCsvFile } from "@/actions/readCsvFile";

type SortKey = keyof Pick<IYoutubeChannel, 'subscriberCount' | 'videoCount' | 'viewCount'>;

interface SortOption {
  key: SortKey;
  label: string;
  direction: 'desc' | 'asc';
}

export const sortOptions: SortOption[] = [
  { key: 'subscriberCount', label: 'Subscribers', direction: 'desc' },
  { key: 'videoCount', label: 'Videos', direction: 'desc' },
  { key: 'viewCount', label: 'Views', direction: 'desc' },
] as const;

export const youtubeStore = proxy({
  channels: [] as IYoutubeChannel[],
  filteredChannels: [] as IYoutubeChannel[],
  searchTerm: '',
  isLoading: false,
  currentSort: sortOptions[0]!,
});

export const youtubeActions = {
  async fetchChannels() {
    youtubeStore.isLoading = true;
    try {
      const rawData = await readCsvFile('youtube-channels.csv');
      youtubeStore.channels = rawData.map((record: any) => ({
        id: record.id,
        title: record.title,
        description: record.description,
        handle: record.handle,
        publishedAt: record.publishedAt,
        thumbnailUrl: record.thumbnailUrl,
        country: record.country,
        viewCount: Number.parseInt(record.viewCount),
        subscriberCount: Number.parseInt(record.subscriberCount),
        videoCount: Number.parseInt(record.videoCount),
      }));
      this.applyFilters();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      youtubeStore.isLoading = false;
    }
  },

  setSearchTerm(term: string) {
    youtubeStore.searchTerm = term;
    this.applyFilters();
  },

  handleSort(option: SortOption) {
    if (youtubeStore.currentSort.key === option.key) {
      // Only flip from desc to asc if it's already desc
      youtubeStore.currentSort = {
        ...option,
        direction: youtubeStore.currentSort.direction === 'desc' ? 'asc' : 'desc',
      };
    } else {
      // If clicking a new option, always start with desc
      youtubeStore.currentSort = {
        ...option,
        direction: 'desc',
      };
    }

    this.applyFilters();
  },

  applyFilters() {
    let filtered = youtubeStore.channels;

    // Apply search filter (title only)
    if (youtubeStore.searchTerm) {
      const searchLower = youtubeStore.searchTerm.toLowerCase();
      filtered = filtered.filter(channel =>
        channel.title.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const valueA = a[youtubeStore.currentSort.key];
      const valueB = b[youtubeStore.currentSort.key];

      // All our sort fields are numbers, so we can use simple comparison
      return (youtubeStore.currentSort.direction === 'asc' ? 1 : -1) *
        (valueA > valueB ? 1 : valueA < valueB ? -1 : 0);
    });

    youtubeStore.filteredChannels = filtered;
  }
};