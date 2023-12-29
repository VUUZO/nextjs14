import { QuestionCard } from "@/components/cards/QuestionCard"
import { HomeFilters } from "@/components/home/HomeFilters"
import { Filter } from "@/components/shared/Filter"
import { NoResult } from "@/components/shared/NoResult"
import { LocalSearchbar } from "@/components/shared/search/LocalSearch"
import { Button } from "@/components/ui/button"
import { HomePageFilters } from "@/constants/filters"
import { getQuestions } from "@/lib/actions/question.action"
import Link from "next/link"

const Home = async () => {
  const result = await getQuestions({})
  const questions = result.questions

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href={'/ask-question'} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">Ask a Question</Button>
        </Link>
      </div>    

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route={'/'}
          placeholder={'Search questions'}
          imgSrc="assets/icons/search.svg"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          message="Select a Filter"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {
          questions.length > 0
          
          ? questions.map(question => (
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
              title="There's no question to show"
              description="Be the first to break the silence! Ask a Qestion and kickstart the discussion. Our query could be the next big thing others learn from. Get involved!"
              link= "/ask-question"
              linkTitle= "Ask a Question"
            />
        }
      </div>
    </>
  )
}

export default Home

// const questions = [
//   {
//     _id: '1',
//     title: "How to use TypeScript with React?",
//     tags: [
//       { _id: "tag1", name: "React" },
//       { _id: "tag2", name: "TypeScript" },
//     ],
//     author: {
//       _id: "author1",
//       name: "John Doe",
//       picture: "url-to-picture",
//     },
//     upvotes: 2000000,
//     views: 12,
//     answers: [
//       { text: "Example answer 1", author: "Jane Doe" },
//       { text: "Example answer 2", author: "Bob Smith" },
//     ],
//     createdAt: new Date("2023-01-01"),
//   },
//   {
//     _id: '2',
//     title: "What are the best practices for unit testing in JavaScript?",
//     tags: [
//       { _id: "tag3", name: "JavaScript" },
//       { _id: "tag4", name: "Testing" },
//     ],
//     author: {
//       _id: "author2",
//       name: "Jane Smith",
//       picture: "url-to-picture",
//     },
//     upvotes: 338030,
//     views: 420420,
//     answers: [
//       { text: "Example answer 1", author: "John Doe" },
//       { text: "Example answer 2", author: "Alice Johnson" },
//       { text: "Example answer 3", author: "Max Muller" },
//     ],
//     createdAt: new Date("2023-02-15"),
//   },
// ];