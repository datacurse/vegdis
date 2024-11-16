"use client"
import { useSnapshot } from 'valtio';
import { state, actions } from '@/store';
import { Pill } from '@/components/Pill';

export function Filters() {
  const snap = useSnapshot(state);

  return (
    <div className='flex flex-row items-center space-x-4'>
      <div className='text-[#D2D2D2] text-lg'>filters</div>
      <div className="flex flex-wrap items-center gap-2">
        {Object.entries(snap.filters).map(([key, value]) => (
          <button
            key={key}
            onClick={() => actions.setFilter(key as keyof typeof snap.filters, !value)}
            className="focus:outline-none"
          >
            <Pill
              label={key}
              active={value}
            />
          </button>
        ))}
      </div>
    </div>
  )
}