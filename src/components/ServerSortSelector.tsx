"use client"

import React from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
import { useServerSearchStore } from '@/stores/serverSearchStore';
import type { SortOption } from '@/stores/serverSearchStore';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const sortOptions: SortOption[] = [
  { key: 'members.total', label: 'Members', direction: 'desc' },
  { key: 'members.online', label: 'Online Members', direction: 'desc' },
  { key: 'votes', label: 'Votes', direction: 'desc' },
  { key: 'title', label: 'Name', direction: 'asc' },
];

export default function ServerSortSelector() {
  const { currentSort, setSortOption } = useServerSearchStore();

  const handleSortChange = (option: SortOption) => {
    if (currentSort.key === option.key) {
      // Toggle direction if same option is selected
      setSortOption({
        ...option,
        direction: currentSort.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSortOption(option);
    }
  };

  return (
    <div className="flex items-center gap-2 my-4">
      <span className="text-medium text-sm">Sort by:</span>
      <div className="flex flex-wrap gap-2">
        {sortOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => handleSortChange(option)}
            className={`
              flex items-center gap-1 px-3 py-1.5 rounded-md text-sm
              transition-colors duration-200
              ${currentSort.key === option.key
                ? 'bg-primary-400 text-white'
                : 'bg-gray-700 text-medium hover:bg-gray-600'
              }
            `}
          >
            {option.label}
            {currentSort.key === option.key && (
              currentSort.direction === 'asc' 
                ? <FaChevronUp className="w-4 h-4" />
                : <FaChevronDown className="w-4 h-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}