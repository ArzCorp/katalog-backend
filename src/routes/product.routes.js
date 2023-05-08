import { Router } from 'express'
import { API_URLS } from '../utils/constants.js'
import { getProductController } from '../controllers/product.controller.js'

export const productRouter = Router()

productRouter.get(API_URLS.GET_PRODUCT, getProductController)
