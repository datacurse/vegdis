"use client"
import { useSnapshot } from 'valtio';
import { state, actions } from '@/store';

export function Filters() {
  const snap = useSnapshot(state);

  return (
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
    </div>
  )
}