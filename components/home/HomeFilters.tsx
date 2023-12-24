'use client'

import { HomePageFilters } from "@/constants/filters"
import { Button } from "../ui/button"

export const HomeFilters = () => {
  const active = 'frequent'

  return (
    <div className="mt-10 flex-wrap gap-3 md:flex hidden">
      {HomePageFilters.map(filter => (
        <Button
          key={filter.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === filter.value 
          ? 'bg-primary-100 dark:bg-dark-400'
          : 'bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-400 dark:hover:bg-dark-300'}`}
        >
          <p className={`
            ${active === filter.value
            ? 'primary-text-gradient dark:primary-text-gradient'
            : ''
            }
          `}>
            {filter.name}
          </p>
        </Button>
      ))}
    </div>
  )
}