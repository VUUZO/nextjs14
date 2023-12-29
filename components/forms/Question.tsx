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
import Image from 'next/image'
import { useState } from 'react'



export const Question = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: []
    },
  })

  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    setIsSubmitting(true)

    try {
      
    } catch (error) {

    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: any) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault()

      const tagInput = e.target as HTMLInputElement
      const tagValue = tagInput.value.trim()

      if (tagValue !== '') {
        if (tagValue.length > 15) {
          return form.setError('tags', {
            type: 'required',
            message: 'Tag must be less than 15 characters.'
          })
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue('tags', [...field.value, tagValue])
          tagInput.value = ''
          form.clearErrors('tags')
        }
      } else {
        form.trigger()
      }
      
    }
  }

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag)

    form.setValue('tags', newTags)
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
              <FormControl className=''>
                <>
                <Input
                  className='ring-offset-light-800 dark:ring-offset-dark-300 py-4 px-6 paragraph-regular text-dark300_light800 rounded-md border light-border-2 background-light800_dark300'
                  onKeyDown={e => handleInputKeyDown(e, field)}
                />

                {field.value.length > 0 && (
                  <div className='flex gap-2 flex-wrap'>
                    {field.value.map((tag:any) => (
                      <div key={tag} className='background-light800_dark400 py-2 px-4 rounded-md flex gap-[2px] subtle-medium text-dark-500 dark:text-light-800 uppercase' onClick={() => handleTagRemove(tag, field)}>
                        {tag}
                        <Image
                          src={'/assets/icons/close.svg'}
                          alt='Close icon'
                          width={12}
                          height={12}
                          className='cursor-pointer object-contain invert dark:invert-0'
                        />
                      </div>
                    ))}
                  </div>
                )}
                </>
              </FormControl>
              <FormDescription className='body-regular text-light-500'>
                Add up to 3 tags to describe what your question is about. Start typing to see suggestions.
              </FormDescription>
              <FormMessage className='text-red-500 body-regular'/>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className='self-end paragraph-medium text-light-900 rounded-lg primary-gradient py-3 px-4 min-h-[46px] w-[173px] ring-offset-light-850 dark:ring-offset-dark-100'
          disabled={isSubmitting}
        >
          Ask a Question
        </Button>
      </form>
    </Form>
  )
}