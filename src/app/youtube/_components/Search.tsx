"use client"
import { IoSearchOutline } from "react-icons/io5";
import { useSnapshot } from 'valtio';
import { youtubeStore, youtubeActions } from '../_store';

export const Search: React.FC = () => {
  const snap = useSnapshot(youtubeStore);

  return (
    <div className="flex items-center relative w-full bg-bg2 border border-none rounded-md px-4">
      <IoSearchOutline className="text-text w-6 h-6" />
      <input
        type="text"
        placeholder="Search for channels..."
        value={snap.searchTerm}
        onChange={(e) => youtubeActions.setSearchTerm(e.target.value)}
        className="py-4 w-full bg-bg2 outline-none focus:ring-0 focus:outline-none text-text placeholder-text-shadow ml-2"
      />
    </div>
  );
};