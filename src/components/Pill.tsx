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
      active ? "bg-[#383A40]" : 'bg-[#232528]'
    )}>
      <div className={cn(
        active ? "text-[#D2D2D2]" : 'text-[#656A71]'
      )}>
        {label}
      </div>
      {direction && (
        direction === 'asc' 
          ? <FaChevronUp className={cn("w-4 h-4", active ? "text-[#D2D2D2]" : 'text-[#656A71]')} />
          : <FaChevronDown className={cn("w-4 h-4", active ? "text-[#D2D2D2]" : 'text-[#656A71]')} />
      )}
    </div>
  )
}