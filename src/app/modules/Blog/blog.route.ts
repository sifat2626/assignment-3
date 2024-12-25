import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BlogControllers } from './blog.controller'
import { BlogValidation } from './blog.validation'
import auth from '../../middlewares/auth'
import checkDeletedOrBlocked from '../../middlewares/checkDeletedOrBlocked'
import { USER_ROLE } from '../User/user.constant'

const router = express.Router()

router.post(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.superAdmin),
  checkDeletedOrBlocked(),
  validateRequest(BlogValidation.createBlogSchema),
  BlogControllers.createBlog,
)

router.get('/', BlogControllers.getBlogs)

router.get('/:id', BlogControllers.getBlogById)

router.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.superAdmin),
  checkDeletedOrBlocked(),
  validateRequest(BlogValidation.updateBlogSchema),
  BlogControllers.updateBlog,
)

router.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.superAdmin),
  checkDeletedOrBlocked(),
  BlogControllers.deleteBlog,
)

export const BlogRoutes = router
