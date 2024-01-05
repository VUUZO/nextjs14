import { QuestionCard } from "@/components/cards/QuestionCard"
import { NoResult } from "@/components/shared/NoResult"
import { LocalSearchbar } from "@/components/shared/search/LocalSearch"
import { IQuestion } from "@/database/question.model"
import { getQuestionsByTagId } from "@/lib/actions/tag.actions"

export default async function Page({
  params,
  searchParams
}: {
  params: { id: string },
  searchParams: { q: string }
}) {
  const { id } = params
  
  const result = await getQuestionsByTagId({
    tagId: id, 
    page: 1,
    searchQuery: searchParams.q
  })


  return (
    <>
      <h1 className="h1-bold text-dark100_light900">{result.tagTitle}</h1>
      
      <div className="mt-11">
        <LocalSearchbar
          route='/'
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tag questions"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {
          result.questions.length > 0
          
          ? result.questions.map((question: IQuestion) => (
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
              title="There's no questions related to this tag"
              description="Ask a Qestion containing this tag so it will appear in this section"
              link= "/ask-question"
              linkTitle= "Add a Question"
            />
        }
      </div>
    </>
  )
}