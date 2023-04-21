import { Router } from 'express'
import { logInController } from '../controllers/login.controller.js'
import { LOGIN_API_URL } from '../utils/constants.js'

export const loginRoutes = Router()

loginRoutes.post(LOGIN_API_URL, logInController)
