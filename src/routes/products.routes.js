import { Router } from 'express'
import {
	addProductController,
	deleteProductController,
	getProductsController,
} from '../controllers/products.controller.js'
import { API_URLS } from '../utils/constants.js'

export const productsRouter = Router()

productsRouter.get(API_URLS.GET_PRODUCTS_BY_USER, getProductsController)
productsRouter.post(API_URLS.PRODUCTS, addProductController)
productsRouter.delete(API_URLS.DELETE_PRODUCT, deleteProductController)
