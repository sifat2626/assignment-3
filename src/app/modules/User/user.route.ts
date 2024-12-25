import express from 'express'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { USER_ROLE } from './user.constant'
import { UserControllers } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/auth/register',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
)

router.patch(
  '/users/change-role/:id',
  auth(USER_ROLE.admin),
  validateRequest(UserValidation.updateUserRoleValidationSchema),
  UserControllers.updateUserRole,
)

router.delete(
  '/users/delete-user/:id',
  auth(USER_ROLE.admin),
  UserControllers.deleteUser,
)

export const UserRoutes = router
