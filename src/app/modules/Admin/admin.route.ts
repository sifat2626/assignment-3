import express from 'express'
import { AdminControllers } from './admin.controller'

const router = express.Router()

router.delete('/users/:id', AdminControllers.deleteUser)

router.patch('/users/:id/block', AdminControllers.blockUser)

export const AdminRoutes = router
