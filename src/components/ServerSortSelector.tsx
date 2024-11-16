"use client"

import React from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useSnapshot } from 'valtio';
import { state, actions, sortOptions } from '@/store';

export default function ServerSortSelector() {
  const snap = useSnapshot(state);

  return (
    <div className="flex items-center gap-2 my-4">
      <span className="text-medium text-sm">Sort by:</span>
      <div className="flex flex-wrap gap-2">
        {sortOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => actions.handleSort(option)}
            className={`
              flex items-center gap-1 px-3 py-1.5 rounded-md text-sm
              transition-colors duration-200
              ${snap.currentSort.key === option.key
                ? 'bg-primary-400 text-white'
                : 'bg-gray-700 text-medium hover:bg-gray-600'
              }
            `}
          >
            {option.label}
            {snap.currentSort.key === option.key && (
              snap.currentSort.direction === 'asc'
                ? <FaChevronUp className="w-4 h-4" />
                : <FaChevronDown className="w-4 h-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}