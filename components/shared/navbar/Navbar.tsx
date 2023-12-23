import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Theme } from "./Theme"
import { MobileNav } from "./MobileNav"
import { GlobalSearch } from "../search/GlobalSearch"

export const Navbar = () => {
  return (
    <nav className="h-[53px] sm:h-auto flex-between background-light900_dark200 border-b border-[#C8CBD954] dark:border-[#101012] fixed z-50 w-full gap-5 p-6 shadow-dark100 sm:px-12">
      <Link href={'/'} className="flex items-center gap-1">
        <Image
          src={'/assets/images/site-logo.svg'}
          width={23}
          height={23}
          alt="DevFlow"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">Dev <span className="text-primary-500">Flow</span></p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-5">
        <Theme />

        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10'
              },
              variables: {
                colorPrimary: '#FF7000'
              }
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}