/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'
import { USER_ROLE } from './user.constant'

export interface TUser {
  _id: string
  name: string
  email: string
  password: string | undefined
  role: 'superAdmin' | 'admin' | 'user'
  isBlocked: boolean // Indicates if the user is blocked
  isDeleted: boolean // Indicates if the user is soft-deleted
}

export interface UserModel extends Model<TUser> {
  // Static methods for checking if the user exists
  isUserExistsByEmail(email: string): Promise<TUser | null> // Updated return type to include null

  // Static methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}

export type TUserRole = keyof typeof USER_ROLE
