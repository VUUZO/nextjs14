'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import { formatNumber } from "@/lib/utils";
import { downvoteQuestion, upvoteQuestion } from "@/lib/actions/question.action";
import { usePathname, useRouter } from "next/navigation";
import { downvoteAnswer, upvoteAnswer } from "@/lib/actions/answer.action";
import { toggleSaveQuestion } from "@/lib/actions/user.action";
import { useEffect } from "react";
import { viewQuestion } from "@/lib/actions/interaction.action";

interface Props {
  type: string;
  itemId: string;
  userId: string;
  upvotes: number;
  hasupVoted: boolean;
  downvotes: number;
  hasdownVoted: boolean;
  hasSaved?: boolean;
}

export const Votes = ({
  type,
  itemId,
  userId,
  upvotes,
  hasupVoted,
  downvotes,
  hasdownVoted,
  hasSaved
}: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleSave = async () => {
    await toggleSaveQuestion({
      userId: JSON.parse(userId),
      questionId: JSON.parse(itemId),
      path: pathname
    })
  }

  const handleVote = async (voteAction: string) => {
    if(!userId) return

    if(voteAction === 'upvote') {
      if(type === 'question') {
        await upvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname 
        })
      } else if(type === 'answer') {
        await upvoteAnswer({
          answerId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname 
        })
      }
      // TODO: Show a toast
      return
    }
    if(voteAction === 'downvote') {
      if(type === 'question') {
        await downvoteQuestion({
          questionId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname 
        })
      } else if(type === 'answer') {
        await downvoteAnswer({
          answerId: JSON.parse(itemId),
          userId: JSON.parse(userId),
          hasupVoted,
          hasdownVoted,
          path: pathname 
        })
      }
      // TODO: Show a toast
      return
    }
  }

  useEffect(() => {
    viewQuestion({
      questionId: JSON.parse(itemId),
      userId: userId ? JSON.parse(userId) : undefined
    })

  }, [itemId, userId, pathname, router])

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-[10px]">
        <Vote action={() => handleVote('upvote')} icon={hasupVoted ? '/assets/icons/upvoted.svg' : '/assets/icons/upvote.svg'} alt='upvotes' value={upvotes} />
        <Vote action={() => handleVote('downvote')} icon={hasdownVoted ? '/assets/icons/downvoted.svg' : '/assets/icons/downvote.svg'} alt='downvotes' value={downvotes} />
      </div>
      <div>
        {
          type === "answer"
          ? null
          : (
            <button onClick={() => handleSave()}>
              <Image
                src={hasSaved ? '/assets/icons/star-filled.svg' : '/assets/icons/star.svg'}
                width={18}
                height={18}
                alt='saved'
                className="cursor-pointer"
              />
            </button>
          )
        }
      </div>
    </div>
  )
}


interface VoteProps {
  icon: string
  alt: string
  value: number
  action: () => Promise<void>
}


const Vote = ({ icon, alt, value, action }: VoteProps) => {
  return (
    <div className="flex gap-[6px]">
        <Image
          src={icon}
          width={18}
          height={18}
          alt={alt}
          onClick={action}
          className="cursor-pointer"
        />
      <div className="text-[10px] flex items-center justify-center bg-light-700 text-dark-400 dark:bg-dark-400 dark:text-light-900 font-medium p-[3px] w-[18px] h-[18px] rounded-[2px]">
        {formatNumber(value)}
      </div>
    </div>
  )
}