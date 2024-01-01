'use client'

import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { AnswerSchema } from "@/lib/validations"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Tiptap from "../editor/Tiptap"
import { Button } from "../ui/button"
import { useState } from "react"
import Image from "next/image"
import { createAnswer } from "@/lib/actions/answer.action"
import { usePathname } from "next/navigation"

interface Props {
  questionId: string
  authorId: string
  question: string
}

export const Answer = ({ questionId, authorId, question }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const pathname = usePathname()

  const form = useForm<z.infer<typeof AnswerSchema>>({
    resolver: zodResolver(AnswerSchema),
    defaultValues: {
      answer: '',
    }
  })

  const handleCreateAnswer = async (values: z.infer<typeof AnswerSchema>) => {
    setIsSubmitting(true)

    try {
      await createAnswer({
        content: values.answer,
        author: JSON.parse(authorId),
        question: JSON.parse(questionId),
        path: pathname
      })

      form.reset()
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-8">
    <div className="flex items-center justify-between gap-5">
      <h4 className="paragraph-semibold text-dark400_light800">Write your answer here</h4>
      <Button className="py-[10px] px-4 flex gap-[5px] border border-light-700 bg-light-800 dark:border-dark-400 dark:bg-dark-300">
        <Image
          src={'/assets/icons/stars.svg'}
          alt='start'
          width={12}
          height={12}
          className="object-contain"
        />
        <span className="primary-text-gradient small-medium">
          Generate an AI Answer
        </span>
      </Button>
    </div>
    <Form {...form}>
      <form
        className="mt-6 flex w-full flex-col gap-10"
        onSubmit={form.handleSubmit(handleCreateAnswer)}
      >
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-[14px] items-start'>
              <FormControl className='py-4 px-6 paragraph-semibold text-dark300_light800 rounded-md border light-border-2 background-light800_dark300'>
                <Tiptap onChange={field.onChange} />
              </FormControl>
              <FormMessage className='text-red-500 body-regular'/>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className='self-end paragraph-medium text-light-900 rounded-lg primary-gradient py-3 px-4 min-h-[46px] w-[173px] ring-offset-light-850 dark:ring-offset-dark-100'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Posting' : 'Post Answer'}
        </Button>
      </form>
    </Form>
    </div>
  )
}