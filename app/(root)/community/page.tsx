import { UserCard } from "@/components/cards/UserCard";
import { Filter } from "@/components/shared/Filter";
import { NoResult } from "@/components/shared/NoResult";
import { LocalSearchbar } from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";

export default async function Page() {
  const result = await getAllUsers({})

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Users</h1>
      </div>    

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
      <section className="mt-12 grid gap-3 gap-y-9 xs:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
        {result.users.length > 0 ? (
          result.users.map(user => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regualr text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users yet</p>
            <Link href={'/sign-up'} className="mt-2 block font-bold text-accent-blue">Join to be the first</Link>
          </div>
        )}
      </section>
    </>
  )
}