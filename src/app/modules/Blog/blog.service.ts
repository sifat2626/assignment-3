import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { Blog } from './blog.model'
import { TBlog } from './blog.interface'
import { SortOrder } from 'mongoose'

const createBlog = async (payload: Partial<TBlog>) => {
  const blog = new Blog(payload)
  return await blog.save()
}

const getAllBlogs = async (query: any) => {
  const { search, sortBy, sortOrder, filter } = query

  const searchQuery = search
    ? {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
        ],
      }
    : {}

  const filterQuery = filter ? { author: filter } : {}

  const sortQuery: { [key: string]: SortOrder } = {}
  if (sortBy) {
    sortQuery[sortBy] = sortOrder === 'desc' ? -1 : 1
  }

  return await Blog.find({ ...searchQuery, ...filterQuery }).sort(sortQuery)
}

const getBlogById = async (id: string) => {
  const blog = await Blog.findById(id).populate('author', 'name email')

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found!')
  }

  return blog
}

const updateBlog = async (
  id: string,
  updates: Partial<TBlog>,
  userId: string,
) => {
  const blog = await Blog.findOne({ _id: id, author: userId })

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found or unauthorized!')
  }

  Object.assign(blog, updates)
  return await blog.save()
}

const deleteBlog = async (id: string, userId: string) => {
  const blog = await Blog.findOneAndDelete({ _id: id, author: userId })

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found or unauthorized!')
  }

  return true
}

export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
}
