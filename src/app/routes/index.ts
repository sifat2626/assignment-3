import { Router } from 'express'
import { AuthRoutes } from '../modules/Auth/auth.route'

import { UserRoutes } from '../modules/User/user.route'
import { BlogRoutes } from '../modules/Blog/blog.route'
import { AdminRoutes } from '../modules/Admin/admin.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
