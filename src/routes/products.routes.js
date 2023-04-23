import { Router } from 'express'
import {
	addProductController,
	getProductsController,
} from '../controllers/products.controller.js'

export const productRouter = Router()

productRouter.get('/products/:id', getProductsController)
productRouter.post('/products', addProductController)
