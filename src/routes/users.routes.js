import { Router } from 'express'
import {
  getCatalogColorByUserController,
  postUsersController,
} from '../controllers/users.controller.js'
import { API_URLS } from '../utils/constants.js'

export const usersRouter = Router()

usersRouter.post(API_URLS.USERS, postUsersController)

usersRouter.get(
  API_URLS.GET_CATALOG_COLOR_BY_USER,
  getCatalogColorByUserController
)
