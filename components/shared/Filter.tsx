'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Filter {
  name: string
  value: string
}

interface FilterProps {
  filters: Filter[]
  message: string
  otherClasses?: string
  containerClasses?: string
}

export const Filter = ({
  filters,
  message,
  otherClasses,
  containerClasses
}: FilterProps) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger className={`${otherClasses} w-full sm:min-w-[170px] p-4 background-light800_dark300 border text-dark500_light700 min-h-[56px] border-light-700 dark:border-dark-400`}>
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder={message} />
          </div>
        </SelectTrigger>
        <SelectContent className="background-light800_dark300 text-dark500_light700 border border-light-700 dark:border-dark-400">
          {filters.map(filter => (
            <SelectItem
              key={filter.value}
              value={filter.value}
              className=""
            >
              {filter.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

