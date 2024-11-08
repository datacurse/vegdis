import { create } from 'zustand';
import { devtools } from "zustand/middleware";
import type { IServerCard } from "@/interfaces";
import { readCsvFile } from "@/actions/readCsvFile";
import { parseServerCards } from "@/actions/parseServerCard";

export type SortOption = {
  key: keyof IServerCard | 'members.total' | 'members.online';
  label: string;
  direction: 'asc' | 'desc';
};

interface ServerSearchState {
  allServers: IServerCard[];
  filteredServers: IServerCard[];
  searchQuery: string;
  isLoading: boolean;
  filters: {
    activeVc: boolean;
    adultsOnly: boolean;
    nsfw: boolean;
    safeSpace: boolean;
  };
  isExclusiveFilter: boolean;
  currentSort: SortOption;
  fetchServers: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setFilter: (filter: keyof ServerSearchState['filters'], value: boolean) => void;
  toggleFilterMode: () => void;
  applyFilters: () => void;
  setSortOption: (option: SortOption) => void;
}

const defaultSort: SortOption = {
  key: 'members.total',
  label: 'Members',
  direction: 'desc'
};

export const useServerSearchStore = create<ServerSearchState>()(
  devtools((set, get) => ({
    allServers: [],
    filteredServers: [],
    searchQuery: '',
    isLoading: false,
    filters: {
      activeVc: false,
      adultsOnly: false,
      nsfw: false,
      safeSpace: false,
    },
    isExclusiveFilter: false,
    currentSort: defaultSort,

    fetchServers: async () => {
      set({ isLoading: true });
      try {
        const serverCardsRaw = await readCsvFile('servers.csv');
        const parsedServerCards = parseServerCards(serverCardsRaw);
        set({ 
          allServers: parsedServerCards, 
          filteredServers: sortServers(parsedServerCards, defaultSort),
          isLoading: false 
        });
      } catch (error) {
        console.error('Error fetching servers:', error);
        set({ isLoading: false });
      }
    },

    setSearchQuery: (query) => {
      set({ searchQuery: query });
      get().applyFilters();
    },

    setFilter: (filter, value) => {
      set((state) => ({
        filters: { ...state.filters, [filter]: value }
      }));
      get().applyFilters();
    },

    toggleFilterMode: () => {
      set((state) => ({ isExclusiveFilter: !state.isExclusiveFilter }));
      get().applyFilters();
    },

    setSortOption: (option) => {
      set({ currentSort: option });
      get().applyFilters();
    },

    applyFilters: () => {
      const { allServers, searchQuery, filters, isExclusiveFilter, currentSort } = get();
      const filtered = filterServers(allServers, searchQuery, filters, isExclusiveFilter);
      const sorted = sortServers(filtered, currentSort);
      set({ filteredServers: sorted });
    },
  }))
);

function filterServers(
  servers: IServerCard[],
  query: string,
  filters: ServerSearchState['filters'],
  isExclusiveFilter: boolean
): IServerCard[] {
  return servers.filter(server => {
    const matchesQuery = 
      server.title.toLowerCase().includes(query.toLowerCase()) ||
      server.description.toLowerCase().includes(query.toLowerCase());

    const activeFilters = Object.entries(filters).filter(([_, value]) => value);
    
    if (activeFilters.length === 0) {
      return matchesQuery;
    }

    const matchesFilters = isExclusiveFilter
      ? activeFilters.some(([key]) => server[key as keyof IServerCard])
      : activeFilters.every(([key]) => server[key as keyof IServerCard]);

    return matchesQuery && matchesFilters;
  });
}

function sortServers(servers: IServerCard[], sortOption: SortOption): IServerCard[] {
  return [...servers].sort((a, b) => {
    let valueA: any;
    let valueB: any;

    // Handle nested properties (e.g., 'members.total')
    if (sortOption.key.includes('.')) {
      const [parent, child] = sortOption.key.split('.');
      valueA = a[parent as keyof IServerCard][child as keyof typeof a.members];
      valueB = b[parent as keyof IServerCard][child as keyof typeof b.members];
    } else {
      valueA = a[sortOption.key as keyof IServerCard];
      valueB = b[sortOption.key as keyof IServerCard];
    }

    if (sortOption.direction === 'asc') {
      return valueA > valueB ? 1 : -1;
    }
    return valueA < valueB ? 1 : -1;
  });
}