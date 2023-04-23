import express, { json } from 'express'
import cors from 'cors'

import { usersRouter } from './routes/users.routes.js'
import { RESPONSE_NOT_FOUND } from './utils/constants.js'
import { loginRoutes } from './routes/login.routes.js'
import { productRouter } from './routes/products.routes.js'
import bodyParser from 'body-parser'

export const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

app.use(usersRouter)
app.use(loginRoutes)
app.use(productRouter)

app.use((req, res) => {
	res.json(RESPONSE_NOT_FOUND)
})
