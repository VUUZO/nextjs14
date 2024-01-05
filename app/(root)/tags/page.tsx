import { TagCard } from "@/components/cards/TagCard"
import { Filter } from "@/components/shared/Filter"
import { Grid } from "@/components/shared/Grid"
import { NoResult } from "@/components/shared/NoResult"
import { LocalSearchbar } from "@/components/shared/search/LocalSearch"
import { TagFilters } from "@/constants/filters"
import { getAllTags } from "@/lib/actions/tag.actions"

export interface ITag {
  _id: string
  name: string
  questions: string
}

const Page = async () => {
  const result = await getAllTags({})

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Tags</h1>

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

      <Grid>
        <ShowTags tags={result.tags} />
      </Grid>
    </>
  )
}

function ShowTags(props: { tags: ITag[] }) {
  if (props.tags.length < 0) return <NoResult title="No Tags Yet" description="Looks like uncharted territory! Why not be the trailblazer? Create the first post and attach relevant tags to kickstart our community organization." link="/ask-question" linkTitle="Ask first question" className="col-span-full" />

  return (
    <>
      {props.tags.map((tag: ITag) => (
          <TagCard key={tag._id} tag={tag} />
      ))}
    </>
  )
}

export default Page