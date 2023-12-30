import { getTopInteractedTags } from "@/lib/actions/tag.actions"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/badge"

interface Props {
  user: { 
    _id: string
    clerkId: string
    picture: string
    name: string
    username: string
  }
}

export const UserCard = async ({ user }: Props) => {
  const interactiveTags = await getTopInteractedTags({ userId: user._id })

  return (
    <Link href={`/user/${user._id}`}>
      <div className="p-8 background-light900_dark200 flex flex-col items-center gap-5 rounded-[10px] border border-[rgba(200, 203, 217, 0.33)] dark:border-dark-300 shadow-light-100 dark:shadow-none">
        <div className="text-center">
          <Image
            src={user.picture}
            alt={user.username}
            width={100}
            height={100}
            className="rounded-full"
            />
          <h3 className="h3-bold text-dark200_light900 mt-5 mb-[4px]">{user.name}</h3>
          <p className="text-dark500_light500">@{user.username}</p>
        </div>
        <div>
          {interactiveTags.length > 0
            ? (
              <div className="flex flex-wrap justify-center gap-2">
                {interactiveTags.map(tag => (
                  <Badge
                    key={tag._id}
                    variant={"tag"}
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
            )
            : (
              <Badge variant={"tag"}>
                No tags
              </Badge>
            )
          }
        </div>
      </div>
    </Link>
  )
}