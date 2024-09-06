"use client"
import { IoSearchOutline } from "react-icons/io5";
import { useServerSearchStore } from "@/stores/serverSearchStore";

export const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useServerSearchStore();

  return (
    <div className="flex items-center relative w-full bg-surface-1 border border-surface-4 rounded-md px-4">
      <IoSearchOutline className="text-high w-6 h-6" />
      <input
        type="text"
        placeholder="Search for servers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="py-4 w-full bg-surface-1 outline-none focus:ring-0 focus:outline-none text-white placeholder-gray-400 ml-2"
      />
    </div>
  );
};
