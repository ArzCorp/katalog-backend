import { pool } from '../../db.js'
import {
	ERRORS,
	QUERYS,
	RESPONSE_TEMPLATE,
	SUCCESS_MESSAGES,
} from '../utils/constants.js'
import { sendErrorResponse } from '../utils/sendErrorResponse.js'

export const getProductsController = async (req, res) => {
	const { params } = req
	const userId = params.id
	try {
		const [products] = await pool.query(QUERYS.GET_PRODUCTS, [userId])
		if (!products.length > 0) throw new Error(ERRORS.GET_PRODUCTS)

		const response = { ...RESPONSE_TEMPLATE }
		response.data = products
		response.results = products.length
		res.status(response.code).json(response)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			code: 500,
			res,
		})
	}
}

export const addProductController = async (req, res) => {
	try {
		const { body } = req
		const { name, description, image, price, user_id, inventory_quantity } =
			body
		const newproductData = [
			name,
			description,
			image,
			user_id,
			price,
			inventory_quantity,
		]
		const [addProduct] = await pool.query(QUERYS.ADD_PRODUCT, newproductData)
		const productId = addProduct.insertId
		if (!productId) throw new Error(ERRORS.CREATE_PRODUCT)

		const response = { ...RESPONSE_TEMPLATE }
		response.code = 201
		response.message = SUCCESS_MESSAGES.CREATE_PRODUCT(name)
		res.status(response.code).json(response)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			code: 500,
			res,
		})
	}
}
