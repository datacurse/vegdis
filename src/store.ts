import { proxy } from 'valtio';
import type { IServerCard } from "@/interfaces";
import { readCsvFile } from "@/actions/readCsvFile";
import { parseServerCards } from "@/actions/parseServerCard";

type SortKey = keyof IServerCard | 'members';

interface SortOption {
  key: SortKey;
  label: string;
  direction: 'desc' | 'asc';
}

export const sortOptions: SortOption[] = [
  { key: 'members', label: 'Members', direction: 'desc' },
  { key: 'title', label: 'Name', direction: 'asc' },
];

export const state = proxy({
  allServers: [] as IServerCard[],
  filteredServers: [] as IServerCard[],
  searchQuery: '',
  isLoading: false,
  filters: {
    verification: false,
    adultsOnly: false,
    nsfw: false,
  },
  isExclusiveFilter: false,
  currentSort: sortOptions[0]!,
});

export const actions = {
  async fetchServers() {
    state.isLoading = true;
    try {
      const rawData = await readCsvFile('servers.csv');
      state.allServers = parseServerCards(rawData);
      this.applyFilters();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      state.isLoading = false;
    }
  },

  setSearchQuery(query: string) {
    state.searchQuery = query;
    this.applyFilters();
  },

  setFilter(filter: keyof typeof state.filters, value: boolean) {
    state.filters[filter] = value;
    this.applyFilters();
  },

  toggleFilterMode() {
    state.isExclusiveFilter = !state.isExclusiveFilter;
    this.applyFilters();
  },

  handleSort(option: SortOption) {
    const newDirection = 
      state.currentSort.key === option.key && 
      state.currentSort.direction === 'asc' ? 'desc' : 'asc';
    
    state.currentSort = {
      ...option,
      direction: newDirection,
    };
    
    this.applyFilters();
  },

  applyFilters() {
    let filtered = state.allServers.filter(server => {
      const matchesSearch = !state.searchQuery ||
        server.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        server.description.toLowerCase().includes(state.searchQuery.toLowerCase());

      const activeFilters = Object.entries(state.filters).filter(([_, value]) => value);
      if (!activeFilters.length) return matchesSearch;

      const matchesFilters = state.isExclusiveFilter
        ? activeFilters.some(([key]) => server[key as keyof IServerCard])
        : activeFilters.every(([key]) => server[key as keyof IServerCard]);

      return matchesSearch && matchesFilters;
    });

    filtered.sort((a, b) => {
      const [parent, child] = state.currentSort.key.split('.');
      const valueA = child ? a[parent][child] : a[state.currentSort.key as keyof IServerCard];
      const valueB = child ? b[parent][child] : b[state.currentSort.key as keyof IServerCard];

      return (state.currentSort.direction === 'asc' ? 1 : -1) * (valueA > valueB ? 1 : -1);
    });

    state.filteredServers = filtered;
  }
};