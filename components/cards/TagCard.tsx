import Link from "next/link"
import { Badge } from "../ui/badge"
import { ITag } from "@/app/(root)/tags/page"

interface Props {
  tag: ITag
}

export const TagCard = ({ tag }: Props) => {
  return (
    <Link href={`/tag/${tag._id}`}>
    <div className="p-8 background-light900_dark200 flex items-start flex-col gap-5 rounded-[10px] border border-[rgba(200, 203, 217, 0.33)] dark:border-dark-300 shadow-light-100 dark:shadow-none">
      <Badge variant={"tag2"}>
        {tag.name}
      </Badge>
      <p className="small-regular text-dark500_light700">description</p>
      <div>
        <p className="flex gap-3 items-center">
          <span className="primary-text-gradient body-semibold">{tag.questions.length}+</span>
          <span className="text-dark500_light500 small-medium">Questions</span>
        </p>
      </div>
    </div>
  </Link>
  )
}