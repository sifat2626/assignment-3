import express from 'express'
import { AdminControllers } from './admin.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'

const router = express.Router()

router.delete('/users/:id', auth(USER_ROLE.admin), AdminControllers.deleteUser)

router.patch(
  '/users/:id/block',
  auth(USER_ROLE.admin),
  AdminControllers.blockUser,
)

router.delete(
  '/blogs/:id',
  auth(USER_ROLE.admin),
  AdminControllers.deleteBlogByAdmin,
)

export const AdminRoutes = router
