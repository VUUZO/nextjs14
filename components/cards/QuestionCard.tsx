import Image from "next/image"
import { Metric } from "../shared/Metric"
import { formatNumber, getTimestamp } from "@/lib/utils"
import Link from "next/link"

interface QuestionProps {
  _id: string
  title: string
  tags: {
    _id: string
    name: string
  }[]
  author: {
    _id: string
    name: string
    picture: string
  }
  upvotes: string[]
  views: number
  answers: Array<object>
  createdAt: Date
}

export const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt
}: QuestionProps) => {
  return (
    <div className="px-11 py-9 flex flex-col gap-6 shadow-light-100 rounded-[10px] bg-light-900 dark:dark-gradient border border-card">
      <div>
        <p className="sm:hidden text-dark400_light700 small-regular mb-2">{getTimestamp(createdAt)}</p>
        <Link href={`/question/${_id}`}>
          <h3 className="h3-semibold text-dark200_light900 mb-[14px]">{title}</h3>
        </Link>
        <div className="flex gap-2">
          {tags.map(tag => (
            <Link href={`/tags/${tag._id}`}>
              <div key={tag._id} className="py-2 px-4 rounded-md inline-flex items-center justify-center uppercase text-light400_light500 background-light800_dark300 subtle-medium">
                {tag.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-2">
        <Metric
          imgUrl={author.picture}
          alt="user"
          title={`· asked ${getTimestamp(createdAt)}`}
          value={author.name}
          href={`/profile/${author._id}`}
          isAuthor
        />
        <div className="flex gap-[9px] text-dark400_light800">
          <Metric
            imgUrl={'/assets/icons/like.svg'}
            alt="Likes"
            value={formatNumber(upvotes.length)}
            title="Likes"
          />
          <Metric
            imgUrl={'/assets/icons/message.svg'}
            alt="Answers"
            value={formatNumber(answers.length)}
            title="Answers"
          />
          <Metric
            imgUrl={'/assets/icons/eye.svg'}
            alt="Views"
            value={formatNumber(views)}
            title="Views"
          />
        </div>
      </div>
    </div>
  )
}