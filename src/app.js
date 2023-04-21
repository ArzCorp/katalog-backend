import express, { json } from 'express'
import cors from 'cors'

import { usersRouter } from './routes/users.routes.js'
import { RESPONSE_NOT_FOUND } from './utils/constants.js'
import { loginRoutes } from './routes/login.routes.js'

export const app = express()

app.use(json())
app.use(cors())

app.use(usersRouter)

app.use(loginRoutes)

app.use((req, res) => {
	res.json(RESPONSE_NOT_FOUND)
})
