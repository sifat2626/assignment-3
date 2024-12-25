// blog.interface.ts
import { Types } from 'mongoose'

export type TBlog = {
  _id: string
  title: string
  content: string
  author: Types.ObjectId // Reference to the User model
  isPublished: boolean
  createdAt: Date
  updatedAt: Date
}
