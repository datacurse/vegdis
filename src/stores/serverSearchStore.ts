import { create } from 'zustand';
import { devtools } from "zustand/middleware";
import type { IServerCard } from "@/interfaces";
import { readCsvFile } from "@/actions/readCsvFile";
import { parseServerCards } from "@/actions/parseServerCard";

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
  fetchServers: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setFilter: (filter: keyof ServerSearchState['filters'], value: boolean) => void;
  toggleFilterMode: () => void;
  applyFilters: () => void;
}

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

    fetchServers: async () => {
      set({ isLoading: true });
      try {
        const serverCardsRaw = await readCsvFile('servers.csv');
        const parsedServerCards = parseServerCards(serverCardsRaw);
        set({ allServers: parsedServerCards, filteredServers: parsedServerCards, isLoading: false });
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

    applyFilters: () => {
      const { allServers, searchQuery, filters, isExclusiveFilter } = get();
      const filtered = filterServers(allServers, searchQuery, filters, isExclusiveFilter);
      set({ filteredServers: filtered });
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