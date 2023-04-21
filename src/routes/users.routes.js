import { Router } from 'express'
import { postUsersController } from '../controllers/users.controller.js'
import { USERS_API_URL } from '../utils/constants.js'

export const usersRouter = Router()

usersRouter.post(USERS_API_URL, postUsersController)
