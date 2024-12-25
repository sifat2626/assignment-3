import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../User/user.model'

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

export const AdminServices = {
  deleteUser,
  blockUser,
}
