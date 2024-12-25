import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../User/user.model'
import { Blog } from '../Blog/blog.model'

const deleteUser = async (id: string) => {
  const user = await User.findByIdAndDelete(id)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }

  return user
}

const blockUser = async (id: string) => {
  const user = await User.findById(id)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }

  user.isBlocked = true
  await user.save()

  return user
}

const deleteBlogById = async (id: string) => {
  const blog = await Blog.findByIdAndDelete(id)

  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found')
  }

  return blog
}

export const AdminServices = {
  deleteUser,
  blockUser,
  deleteBlogById,
}
