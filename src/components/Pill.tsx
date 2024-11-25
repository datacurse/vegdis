import { cn } from "@/lib/utils"
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export function Pill({
  label,
  active,
  direction
}: {
  label: string,
  active: boolean,
  direction?: 'asc' | 'desc'
}) {
  return (
    <div className={cn(
      'rounded-lg p-2',
      'flex items-center gap-2',
      active ? "bg-bg3" : 'bg-bg2'
    )}>
      <div className={cn(
        active ? "text-text" : 'text-text-shadow'
      )}>
        {label}
      </div>
      {direction && (
        direction === 'asc'
          ? <FaChevronUp className={cn("w-4 h-4", active ? "text-text" : 'text-text-shadow')} />
          : <FaChevronDown className={cn("w-4 h-4", active ? "text-text" : 'text-text-shadow')} />
      )}
    </div>
  )
}