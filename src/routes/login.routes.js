import { Router } from 'express'
import { logInController } from '../controllers/login.controller.js'
import { API_URLS } from '../utils/constants.js'

export const loginRoutes = Router()

loginRoutes.post(API_URLS.LOG_IN, logInController)
