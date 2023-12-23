'use client'

import Image from "next/image"

import { Input } from "@/components/ui/input"
import { useState } from "react"

export const GlobalSearch = () => {
  const [value, setValue] = useState('')
  console.log(value)

  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src={'/assets/icons/search.svg'}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search anything globally"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="no-focus placeholder paragraph-regular text-dark400_light700 border-none shadow-none outline-none bg-transparent" />
      </div>
    </div>
  )
}