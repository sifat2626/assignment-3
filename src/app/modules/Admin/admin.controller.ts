import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AdminServices } from './admin.service'

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await AdminServices.deleteUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User has been deleted successfully.',
    data: result,
  })
})

const blockUser = catchAsync(async (req, res) => {
  const { id } = req.params

  const result = await AdminServices.blockUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User has been blocked successfully.',
    data: result,
  })
})

export const AdminControllers = {
  deleteUser,
  blockUser,
}
