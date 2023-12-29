'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { QuestionsSchema } from '@/lib/validations'
import Tiptap from '../editor/Tiptap'



export const Question = () => {
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: []
    },
  })

  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    
    console.log(values)
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-9">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-[14px] items-start'>
              <FormLabel className='paragraph-semibold text-dark400_light800'>
                Question Title
                <span className='text-[#FF2121]'> *</span>
              </FormLabel>
              <FormControl className='py-4 px-6 paragraph-semibold text-dark300_light800 rounded-md border light-border-2 background-light800_dark300'>
                <Input {...field} className='ring-offset-light-800 dark:ring-offset-dark-300'/>
              </FormControl>
              <FormDescription className='body-regular text-light-500'>
                Be specific and imagine you’re asking a question to another person.
              </FormDescription>
              <FormMessage className='text-red-500 body-regular'/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-[14px] items-start'>
              <FormLabel className='paragraph-semibold text-dark400_light800'>
                Detailed explanation of your problem?
                <span className='text-[#FF2121]'> *</span>
              </FormLabel>
              <FormControl className='py-4 px-6 paragraph-semibold text-dark300_light800 rounded-md border light-border-2 background-light800_dark300'>
                {/* TODO: Add an Editor component */}
                <Tiptap onChange={field.onChange} />
              </FormControl>
              <FormDescription className='body-regular text-light-500'>
                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
              </FormDescription>
              <FormMessage className='text-red-500 body-regular'/>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className='flex flex-col gap-[14px] items-start'>
              <FormLabel className='paragraph-semibold text-dark400_light800'>
                Tags
                <span className='text-[#FF2121]'> *</span>
              </FormLabel>
              <FormControl className='py-4 px-6 paragraph-semibold text-dark300_light800 rounded-md border light-border-2 background-light800_dark300'>
                <Input {...field} className='ring-offset-light-800 dark:ring-offset-dark-300'/>
              </FormControl>
              <FormDescription className='body-regular text-light-500'>
                Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
              </FormDescription>
              <FormMessage className='text-red-500 body-regular'/>
            </FormItem>
          )}
        />
        <Button className='paragraph-medium text-light-900 rounded-lg primary-gradient py-3 px-4 min-h-[46px] w-[173px] ring-offset-light-850 dark:ring-offset-dark-100' type="submit">Ask a Question</Button>
      </form>
    </Form>
  )
}