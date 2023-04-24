import { Router } from 'express'
import { postUsersController } from '../controllers/users.controller.js'
import { API_URLS } from '../utils/constants.js'

export const usersRouter = Router()

usersRouter.post(API_URLS.USERS, postUsersController)
