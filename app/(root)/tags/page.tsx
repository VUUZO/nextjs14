import { TagCard } from "@/components/cards/TagCard"
import { Filter } from "@/components/shared/Filter"
import { LocalSearchbar } from "@/components/shared/search/LocalSearch"
import { Badge } from "@/components/ui/badge"
import { TagFilters } from "@/constants/filters"
import { getAllTags } from "@/lib/actions/tag.actions"
import Link from "next/link"

const Page = async () => {
  const result = await getAllTags({})
  console.log(result.tags)

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Tags</h1>
      </div>    

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route={'/tags'}
          placeholder={'Search by tag'}
          imgSrc="assets/icons/search.svg"
          otherClasses="flex-1"
        />

        <Filter
          filters={TagFilters}
          message="Select a Filter"
        />
      </div>
      <section className="mt-12 grid gap-3 gap-y-9 xs:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {result.tags.length > 0 ? (
          result.tags.map(tag => <TagCard key={tag._id} tag={tag} />)
        ) : (
          <div className="paragraph-regualr text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No tags</p>
            <Link href={'/sign-up'} className="mt-2 block font-bold text-accent-blue">Join and add first tag</Link>
          </div>
        )}
      </section>
    </>
  )
}

export default Page