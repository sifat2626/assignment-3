// blog.model.ts
import { Schema, model } from 'mongoose'
import { TBlog } from './blog.interface'

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true, // By default, blogs are published
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
)

export const Blog = model<TBlog>('Blog', blogSchema)
