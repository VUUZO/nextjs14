import Image from "next/image"
import Link from "next/link"
import { Url } from "url"

interface MetricProps {
  imgUrl: string
  alt: string
  value: string | number
  title: string
  isAuthor?: boolean
  textStyles?: string
  href?: string
}

export const Metric = ({ imgUrl, alt, value, title, href, isAuthor = false, textStyles }: MetricProps) => {
  
  if (isAuthor) {
    return (
      <div className="flex gap-1 items-center text-dark400_light700">
        <Link href={href!}>
          <div className="flex items-center gap-[4px]">
            <Image
              src={imgUrl}
              alt={alt}
              width={20}
              height={20}
              className="w-[20px] aspect-square rounded-full"
            />
            <p className="body-medium">{value}</p>
          </div>
        </Link>
        <p className="hidden sm:block small-regular">{title}</p>
      </div>
    )
  } else {
    return (
      <div className="flex items-center gap-[2px]">
        <Image
          src={imgUrl}
          alt={alt}
          width={16}
          height={16}
          className="block"
        />
        <p
          className="small-regular"
        >
          <span className={`small-medium ${textStyles}`}>{value}</span> {title}
        </p>
      </div>
    )
  }
}