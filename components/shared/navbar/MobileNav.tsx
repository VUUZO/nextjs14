'use client'

import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"




export const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="cursor-pointer">
        {open
        ? <Image
            src={'/assets/icons/close.svg'}
            alt="menu"
            width={24}
            height={24}
            className="invert-colors sm:hidden"
          />
        : <Image
            src={'/assets/icons/hamburger.svg'}
            alt="menu"
            width={24}
            height={24}
            className="invert-colors sm:hidden"
          />
        }
      </SheetTrigger>
      <SheetContent
        side={'left'} 
        className="background-light900_dark200 border-none h-full w-[260px] flex flex-col"
      >
        <Link href={'/'} className="flex items-center gap-1">
          <Image
            src={'/assets/images/site-logo.svg'}
            width={23}
            height={23}
            alt="DevFlow"
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">Dev <span className="text-primary-500">Flow</span></p>
        </Link>

        <SheetClose asChild className="flex">
          <NavContent />
        </SheetClose>

        <div className="flex flex-col gap-3 mt-auto">
          <SignedOut>
              <Link href={'/sign-in'}>
                <Button className="w-full background-light800_dark400">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
              <Link href={'/sign-up'}>
                <Button className="background-light700_dark300 w-full text-dark100_light900 border border-light-700 dark:border-dark-400">
                  <p>Sign up</p>
                </Button>
              </Link>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
   )
}

const NavContent = () => {
  const pathname = usePathname()

  return (
    <section className="flex flex-col gap-[14px] pt-16 ">
      {sidebarLinks.map(link => {
        
        const isActive = (pathname.includes(link.route)) && link.route.length > 1 || pathname === link.route
        
        return (
        <SheetClose asChild key={link.route}>
          <Link
            href={link.route}
            className={`${isActive ? 'primary-gradient rounded-lg text-light-900' : 'text-dark300_light900'} flex items-center justify-start gap-4 bg-transparent p-4`}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={`${isActive ? '' : 'invert-colors'}`}
            />
            <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>{link.label}</p>
          </Link>
        </SheetClose>
      )})
      }
    </section>
  )
}