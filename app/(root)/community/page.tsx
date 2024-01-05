import { UserCard } from "@/components/cards/UserCard";
import { Filter } from "@/components/shared/Filter";
import { Grid } from "@/components/shared/Grid";
import { NoResult } from "@/components/shared/NoResult";
import { LocalSearchbar } from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";

export default async function Page() {
  const result = await getAllUsers({})

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route={'/community'}
          placeholder={'Search by username'}
          imgSrc="assets/icons/search.svg"
          otherClasses="flex-1"
        />

        <Filter
          filters={UserFilters}
          message="Select a Filter"
        />
      </div>

      <Grid>
        {result.users.length > 0 ? (
          result.users.map(user => <UserCard key={user._id} user={user} />)
        ) : (
          <NoResult title="No Users Found" description="The community is waiting for its first members! Currently, there are no users registered. You have the chance to be the inaugural member. Join now and start connecting with like-minded individuals." link="/sign-up" linkTitle="Join now" className="col-span-full"/>
        )}
      </Grid>
    </>
  )
}