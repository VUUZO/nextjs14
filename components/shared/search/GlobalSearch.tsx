'use client'

import Image from "next/image"

import { useState } from "react"

export const GlobalSearch = () => {
  const [value, setValue] = useState('')
  console.log(value)

  return (
    <div className="relative w-full background-light800_darkgradient max-w-[600px] rounded-[10px] transition-colors max-lg:hidden px-4 border border-light-700 dark:border-dark-300 focus-within:ring-4 focus-within:border-primary-500 dark:focus-within:border-primary-500/50 focus-within:ring-primary-500/20">
      <div className="relative flex grow items-center gap-4">
        <Image
          src={'/assets/icons/search.svg'}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <input
          type="text"
          placeholder="Search anything globally"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="flex-1 outline-none bg-transparent min-h-[56px] paragraph-regular text-dark500_light500"
        /> 
      </div>
    </div>
  )
}