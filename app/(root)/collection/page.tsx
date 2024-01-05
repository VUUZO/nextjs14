import { QuestionCard } from "@/components/cards/QuestionCard";
import { NoResult } from "@/components/shared/NoResult";
import { getSavedQuestions } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";

export default async function Page() {
  const { userId } = auth()
  if(!userId) return null

  const result = await getSavedQuestions({ clerkId: userId })

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
      <div className="mt-10 flex w-full flex-col gap-6">
        {
          result.questions.length > 0
          
          ? result.questions.map((question: any) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
          : <NoResult
              title="There's no saved question to show"
              description="Be the first to break the silence! Ask a Qestion and kickstart the discussion. Our query could be the next big thing others learn from. Get involved!"
              link= "/"
              linkTitle= "Save a Question"
            />
        }
      </div>
    </>
  )
}