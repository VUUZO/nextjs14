import Image from "next/image"

import { Input } from "@/components/ui/input"

export const GlobalSearch = () => {
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
          placeholder="Search globally"
          value={''}
          className="no-focus placeholder paragraph-regular text-dark400_light700 border-none shadow-none outline-none background-light800_darkgradient" />
      </div>
    </div>
  )
}