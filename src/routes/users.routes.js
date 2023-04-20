import { Router } from 'express'
import { GET_USERS_URL } from '../utils/constants.js'
import {
	getUsersController,
	postUsersController,
} from '../controllers/users.controller.js'

export const usersRouter = Router()

usersRouter.get(GET_USERS_URL, getUsersController)
usersRouter.post(GET_USERS_URL, postUsersController)
