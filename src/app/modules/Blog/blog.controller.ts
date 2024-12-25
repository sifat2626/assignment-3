import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BlogService } from './blog.service'

const createBlog = catchAsync(async (req, res) => {
  const { title, content } = req.body
  const author = req.user._id // Assuming the user ID is added by an authentication middleware

  const blog = await BlogService.createBlog({ title, content, author })

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfully!',
    data: blog,
  })
})

const getBlogs = catchAsync(async (req, res) => {
  const blogs = await BlogService.getAllBlogs(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs fetched successfully!',
    data: blogs,
  })
})

const getBlogById = catchAsync(async (req, res) => {
  const { id } = req.params
  const blog = await BlogService.getBlogById(id)

  if (!blog) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Blog not found!',
      data: blog,
    })
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog fetched successfully!',
    data: blog,
  })
})

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const updates = req.body

  const updatedBlog = await BlogService.updateBlog(id, updates, req.user._id)

  if (!updatedBlog) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Blog not found or unauthorized!',
      data: updatedBlog,
    })
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully!',
    data: updatedBlog,
  })
})

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params

  const deleted = await BlogService.deleteBlog(id, req.user._id)

  if (!deleted) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Blog not found or unauthorized!',
      data: '',
    })
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully!',
    data: '',
  })
})

export const BlogControllers = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
}
