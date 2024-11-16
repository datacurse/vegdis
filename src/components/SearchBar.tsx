"use client"
import { IoSearchOutline } from "react-icons/io5";
import { useSnapshot } from 'valtio';
import { state, actions } from '@/store';

export const SearchBar: React.FC = () => {
  // const { searchQuery, setSearchQuery, filters, setFilter, isExclusiveFilter, toggleFilterMode } = useServerSearchStore();
  const snap = useSnapshot(state);

  return (
    <div className="space-y-4">
      <div className="flex items-center relative w-full bg-surface-1 border border-surface-4 rounded-md px-4">
        <IoSearchOutline className="text-high w-6 h-6" />
        <input
          type="text"
          placeholder="Search for servers..."
          value={snap.searchQuery}
          onChange={(e) => actions.setSearchQuery(e.target.value)}
          className="py-4 w-full bg-surface-1 outline-none focus:ring-0 focus:outline-none text-white placeholder-gray-400 ml-2"
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {Object.entries(snap.filters).map(([key, value]) => (
          <label key={key} className="flex items-center space-x-2 text-white">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => actions.setFilter(key as keyof typeof snap.filters, e.target.checked)}
              className="form-checkbox h-5 w-5 text-primary-400"
            />
            <span>{key}</span>
          </label>
        ))}
        <button
          onClick={actions.toggleFilterMode}
          className="px-4 py-2 bg-primary-400 text-white rounded-md hover:bg-primary-500 transition-colors"
        >
          {snap.isExclusiveFilter ? 'Any Selected (OR)' : 'All Selected (AND)'}
        </button>
      </div>
    </div>
  );
};