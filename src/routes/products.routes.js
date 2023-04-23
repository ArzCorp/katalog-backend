import { Router } from 'express'
import {
	addProductController,
	getProductsController,
} from '../controllers/products.controller.js'

export const productRouter = Router()

productRouter.get('/products', getProductsController)
productRouter.post('/products', addProductController)
