import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

interface NoResultsProps {
  title: string
  description: string
  link: string
  linkTitle: string
}

export const NoResult = ({ title, description, link, linkTitle }: NoResultsProps) => {
  return (
    <div className="mt-10 flex mx-auto max-w-lg flex-col items-center justify-center">
      <Image
        src='/assets/images/light-illustration.png'
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src='/assets/images/dark-illustration.png'
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:block"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 text-center my-[14px]">{description}</p>
      <Link href={link}>
        <Button className="py-3 text-light-900 px-4 h-[42px] rounded-lg min-w-[173px] primary-gradient paragraph-medium">{linkTitle}</Button>
      </Link>
    </div>
  )
}