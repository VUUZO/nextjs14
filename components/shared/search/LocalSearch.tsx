'use client'

import Image from "next/image"
import { useState } from "react"

interface CustomIconProps {
  route: string
  iconPosition?: 'right' | 'left'
  imgSrc: string 
  placeholder: string
  otherClasses?: string
}


export const LocalSearchbar = ({
  route,
  iconPosition = "left",
  imgSrc,
  placeholder,
  otherClasses
}: CustomIconProps) => {
  const [value, setValue] = useState('')

  return (
    <div className={`relative w-full background-light800_darkgradient rounded-[10px] transition-colors px-4 border border-light-700 dark:border-dark-300 focus-within:ring-4 focus-within:border-primary-500 dark:focus-within:border-primary-500/50 focus-within:ring-primary-500/20 ${otherClasses}`}>
      <div className="relative flex grow items-center gap-4">
        {
          iconPosition === 'left' &&
          <Image
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        }
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          className="flex-1 outline-none bg-transparent min-h-[56px] paragraph-regular text-dark500_light500"
        /> 
                {
          iconPosition === 'right' &&
          <Image
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        }
      </div>
    </div>
  )
}