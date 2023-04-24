import { Router } from 'express'
import {
	addProductController,
	getProductsController,
} from '../controllers/products.controller.js'
import { API_URLS } from '../utils/constants.js'

export const productRouter = Router()

productRouter.get(API_URLS.GET_PRODUCTS_BY_USER, getProductsController)
productRouter.post(API_URLS.PRODUCTS, addProductController)
