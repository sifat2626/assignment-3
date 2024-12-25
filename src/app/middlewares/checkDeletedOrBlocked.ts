import catchAsync from '../utils/catchAsync'

const auth = () => {
  return catchAsync(async (req, res, next) => {
    const user = req.user
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
