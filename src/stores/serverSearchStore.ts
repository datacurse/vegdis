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
  fetchServers: () => Promise<void>;
  setSearchQuery: (query: string) => void;
}

export const useServerSearchStore = create<ServerSearchState>()(
  devtools((set, get) => ({
    allServers: [],
    filteredServers: [],
    searchQuery: '',
    isLoading: false,

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
      const { allServers } = get();
      const filtered = allServers.filter(server =>
        server.title.toLowerCase().includes(query.toLowerCase()) ||
        server.description.toLowerCase().includes(query.toLowerCase())
      );
      set({ filteredServers: filtered });
    },
  }))
);