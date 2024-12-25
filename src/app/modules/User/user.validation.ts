import { z } from 'zod'
import { UserRoleEnum } from './user.constant'

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'User name is required.' }),
    email: z.string().email(),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .max(20, { message: 'Password can not be more than 20 characters' })
      .min(5, { message: 'Password can be at least 6 characters' }),
  }),
})

const updateUserRoleValidationSchema = z.object({
  body: z.object({
    role: z.enum([...UserRoleEnum] as [string, ...string[]]),
  }),
})
export const UserValidation = {
  userValidationSchema,
  updateUserRoleValidationSchema,
}
