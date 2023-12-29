import * as z from 'zod'

export const QuestionsSchema = z.object({
  title: z.string().min(5).max(90),
  explanation: z.string().min(40),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3)
})