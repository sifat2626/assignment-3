import AppError from '../errors/AppError'
import { User } from '../modules/User/user.model'
import catchAsync from '../utils/catchAsync'

const auth = () => {
  return catchAsync(async (req, res, next) => {
    const user = await User.findById(req.user._id)

    if (!user) {
      return new AppError(404, 'This user is not found !')
    }
    if (user.isDeleted || user.isBlocked) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized access',
        data: null,
      })
    }
    next()
  })
}

export default auth
