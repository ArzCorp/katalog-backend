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
	const catalogName = params.id

	try {
		const [[products]] = await pool.query(QUERYS.GET_PRODUCTS, [catalogName])
		const response = { ...RESPONSE_TEMPLATE }

		if (!products.length > 0) {
			response.code = 201
			response.message = ERRORS.EMPTY_PRODUCTS
		} else {
			response.data = products
			response.results = products.length
		}

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

export const deleteProductController = async (req, res) => {
	try {
		const { params } = req
		const productId = params.id

		const [queryResult] = await pool.query(QUERYS.DELETE_PRODUCT, [productId])
		if (queryResult.affectedRows <= 0) throw new Error(ERRORS.PRODUCT_NOT_EXIST)

		const response = { ...RESPONSE_TEMPLATE }
		response.code = 201
		response.message = SUCCESS_MESSAGES.DELETE_PRODUCT
		res.status(response.code).json(response)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			code: 500,
			res,
		})
	}
}
