import { Router } from 'express'
import { API_URLS } from '../utils/constants.js'
import {
	getProductController,
	updateProductController,
} from '../controllers/product.controller.js'

export const productRouter = Router()

productRouter.get(API_URLS.GET_PRODUCT, getProductController)
productRouter.post(API_URLS.UPDATE_PRODUCT, updateProductController)
