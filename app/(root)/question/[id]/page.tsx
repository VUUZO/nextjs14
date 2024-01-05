import { Answer } from "@/components/forms/Answer"
import { AllAnswers } from "@/components/shared/AllAnswers"
import { Metric } from "@/components/shared/Metric"
import { ParseHTML } from "@/components/shared/ParseHTML"
import { Votes } from "@/components/shared/Votes"
import { Badge } from "@/components/ui/badge"
import { getQuestionById } from "@/lib/actions/question.action"
import { getUserById } from "@/lib/actions/user.action"
import { formatNumber, getTimestamp } from "@/lib/utils"
import { auth } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const Page = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth()
  const { id } = params
  
  if (!userId) redirect('/sign-in')
  const mongoUser = await getUserById({ userId })


  const result = await getQuestionById({ questionId: id })
  
  return (
    <>
    <div className='flex flex-col gap-8'>
      <div className="flex flex-col gap-[18px]"> 

        <div className="flex flex-col gap-[14px] items-start">
          <div className="flex gap-5 justify-between w-full">
            <div className="flex gap-1 items-center">
              <Image
                src={result.author.picture}
                width={22}
                height={22}
                alt={result.author.name}
                className="rounded-full aspect-square object-cover"
              />
              <p className="paragraph-semibold text-dark-300 dark:text-light-700">{result.author.name}</p>
            </div>
    
            <Votes
              type='question'
              itemId={JSON.stringify(result._id)}
              userId={JSON.stringify(mongoUser._id)}
              upvotes={result.upvotes.length}
              hasupVoted={result.upvotes.includes(mongoUser._id)}
              downvotes={result.downvotes.length}
              hasdownVoted={result.downvotes.includes(mongoUser._id)}
              hasSaved={mongoUser.saved.includes(result._id)}
            />
          </div>


          <h2 className="h2-semibold text-dark-200 dark:text-light-900">{result.title}</h2>
        </div>

        <div className="flex gap-4">
          <Metric
            value={`Asked ${getTimestamp(result.createdAt)}`}
            alt="added"
            imgUrl="/assets/icons/clock.svg"
            textStyles="small-regular"
          />
          <Metric
            title='Votes'
            value={formatNumber(result.upvotes.length)}
            alt="upvotes"
            imgUrl="/assets/icons/like.svg"
          />
          <Metric
            title='Answers'
            value={formatNumber(result.answers.length)}
            alt="answers"
            imgUrl="/assets/icons/message.svg"
          />
          <Metric
            title='Views'
            value={formatNumber(result.views)}
            alt="views"
            imgUrl="/assets/icons/eye.svg"
          />
        </div>
      </div>
      
      <ParseHTML data={result.content} />

      <div className="flex gap-2">
        {result.tags.map((tag: any) => (
          <Link href={`/tags/${tag._id}`}>
            <Badge variant={"tag3"} key={tag._id} className="text-light-400">
              {tag.name}
            </Badge>
          </Link>
        ))}
      </div>

      <AllAnswers
        questionId={result._id}
        userId={mongoUser._id}
        totalAnswers={result.answers.length}
      />

      <Answer
        question={result.content}
        questionId={JSON.stringify(result._id)}
        authorId={JSON.stringify(mongoUser._id)}
      />
    </div>
    </>
  )
}

export default Page