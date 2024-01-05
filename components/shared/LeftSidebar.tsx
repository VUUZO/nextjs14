'use client'

import { Button } from "@/components/ui/button"
import { sidebarLinks } from "@/constants"
import { SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const LeftSidebar = () => {
  const pathname = usePathname()

  return (
    <section className="px-6 pt-36 pb-8 background-light900_dark200 h-screen sticky top-0 left-0 flex-col border-r border-[#C8CBD954] dark:border-[#0F111780] hidden sm:flex lg:w-[266px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map(link => {
          const isActive = link.route === pathname 

          return (
          <Link
            key={link.label}
            href={link.route}
            className={`${isActive ? 'primary-gradient' : 'text-dark100_light900'} p-4 flex gap-4 rounded-lg`}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={`${isActive ? '' : 'invert-colors'}`}
            />
            <p className={`${isActive ? 'base-bold text-white' : 'base'} max-lg:hidden`}>{link.label}</p>
          </Link>
        )})}
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        <SignedOut>
            <Link href={'/sign-in'}>
              <Button className="w-full background-light800_dark400">
                <span className="primary-text-gradient max-lg:hidden">Log In</span>
                <Image
                  src={'/assets/icons/account.svg'}
                  alt="signup"
                  width={20}
                  height={20}
                  className="lg:hidden invert-colors"
                />
              </Button>
            </Link>
            <Link href={'/sign-up'}>
              <Button className="background-light700_dark300 w-full text-dark100_light900 border border-light-700 dark:border-dark-400">
                <p className="max-lg:hidden">Sign up</p>
                <Image
                  src={'/assets/icons/sign-up.svg'}
                  alt="signup"
                  width={20}
                  height={20}
                  className="lg:hidden invert-colors"
                />
              </Button>
            </Link>
        </SignedOut>
      </div>
    </section>
  )
}