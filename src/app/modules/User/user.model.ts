/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import config from '../../config'
import { TUser, UserModel } from './user.interface'

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: [true, 'Full Name is required'],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false, // Secure password by default
    },
    role: {
      type: String,
      required: [true, 'Role is required'],
      enum: {
        values: ['superAdmin', 'admin', 'user'],
        message: '{VALUE} is not a valid role',
      },
      default: 'user',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false, // Added isDeleted field for soft deletion
    },
  },
  {
    timestamps: true,
  },
)

// Pre-save middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  const user = this

  if (!user.isModified('password')) return next() // Only hash if password is modified
  if(!user.password) return next() // Only hash if password is provided

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

// Remove password from response after saving
userSchema.post('save', function (doc, next) {
  doc.password = undefined
  next()
})

// Static method to find user by email
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password')
}

// Static method to match password
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword)
}

export const User = model<TUser, UserModel>('User', userSchema)
