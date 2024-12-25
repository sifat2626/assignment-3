import { z } from 'zod'

const createBlogSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: 'Title is required.' })
      .min(1, 'Title cannot be empty'),
    content: z
      .string({ required_error: 'Content is required.' })
      .min(1, 'Content cannot be empty'),
  }),
})

const getBlogByIdSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'Blog ID is required.' }),
  }),
})

const updateBlogSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'Blog ID is required.' }),
  }),
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
  }),
})

const deleteBlogSchema = z.object({
  params: z.object({
    id: z.string({ required_error: 'Blog ID is required.' }),
  }),
})

export const BlogValidation = {
  createBlogSchema,
  getBlogByIdSchema,
  updateBlogSchema,
  deleteBlogSchema,
}
