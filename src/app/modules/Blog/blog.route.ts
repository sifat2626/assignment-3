import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { BlogControllers } from './blog.controller'
import { BlogValidation } from './blog.validation'
import auth from '../../middlewares/auth'
import checkDeletedOrBlocked from '../../middlewares/checkDeletedOrBlocked'

const router = express.Router()

router.post(
  '/',
  auth(),
  checkDeletedOrBlocked(),
  validateRequest(BlogValidation.createBlogSchema),
  BlogControllers.createBlog,
)

router.get('/', BlogControllers.getBlogs)

router.get(
  '/:id',
  validateRequest(BlogValidation.getBlogByIdSchema),
  BlogControllers.getBlogById,
)

router.patch(
  '/:id',
  auth(),
  checkDeletedOrBlocked(),
  validateRequest(BlogValidation.updateBlogSchema),
  BlogControllers.updateBlog,
)

router.delete(
  '/:id',
  auth(),
  checkDeletedOrBlocked(),
  validateRequest(BlogValidation.deleteBlogSchema),
  BlogControllers.deleteBlog,
)

export const BlogRoutes = router
