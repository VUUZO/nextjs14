import { AnswerFilters } from "@/constants/filters"
import { Filter } from "./Filter"
import { getAnswers } from "@/lib/actions/answer.action"
import { ParseHTML } from "./ParseHTML"
import Image from "next/image"
import { getTimestamp } from "@/lib/utils"
import Link from "next/link"
import { Votes } from "./Votes"

interface Props {
  questionId: string
  userId: string
  totalAnswers: number
  page?: number
  filter?: number
}

export const AllAnswers = async ({  questionId, userId, totalAnswers, page, filter }: Props) => {
  const result = await getAnswers({ questionId })
  
  return (
    <div className="mt-11 flex flex-col gap-6">
        <div className="flex gap-5 justify-between items-center">
          <h3 className="primary-text-gradient paragraph-medium">{totalAnswers > 1 ? `${totalAnswers} Answers` : `${totalAnswers} Answer`}</h3>

          <Filter filters={AnswerFilters} message="Select a filter" />
        </div>

        <div className="flex flex-col gap-8">
          {result.answers.map(answer => (
            <article key={answer._id} className="flex flex-col gap-4">
              <div className="flex justify-between gap-5">
                <div className="flex gap-[5px] items-center">
                  <Link href={`/profile/${answer.author.clerkId}`} className="flex gap-[5px] items-center">
                    <Image
                      src={answer.author.picture}
                      width={24}
                      height={24}
                      alt={answer.author.name}
                      className="rounded-full aspect-square object-cover"
                    />
                    <p>
                      <span className="body-semibold text-dark-300 dark:text-light-700">{answer.author.name}</span>
                    </p>
                  </Link>
                  <span className="small-regular text-light-400 dark:text-light-500">· answered {getTimestamp(answer.createdAt)}</span>
                </div>
                <Votes
                  type='answer'
                  itemId={JSON.stringify(answer._id)}
                  userId={JSON.stringify(userId)}
                  upvotes={answer.upvotes.length}
                  hasupVoted={answer.upvotes.includes(userId)}
                  downvotes={answer.downvotes.length}
                  hasdownVoted={answer.downvotes.includes(userId)}
                />
              </div>
              <ParseHTML data={answer.content}/>
            </article>
          ))}
        </div>
    </div>
  )
}