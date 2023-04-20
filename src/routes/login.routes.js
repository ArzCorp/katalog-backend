import { Router } from 'express'
import { logInController } from '../controllers/login.controller.js'

export const loginRoutes = Router()

loginRoutes.post('/login', logInController)
