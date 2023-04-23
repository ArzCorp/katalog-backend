import { pool } from '../../db.js'
import {
	ADD_PRODUCT_QUERY,
	CREATE_PRODUCT_ERROR,
	GET_PRODUCTS_ERROR,
	GET_PRODUCTS_QUERY,
	RESPONSE_TEMPLATE,
	messageCreateSuccessProduct,
} from '../utils/constants.js'
import { sendErrorResponse } from '../utils/sendErrorResponse.js'

export const getProductsController = async (req, res) => {
	const { params } = req
	const userId = params.id
	try {
		const [products] = await pool.query(GET_PRODUCTS_QUERY, [userId])
		if (!products.length > 0) throw new Error(GET_PRODUCTS_ERROR)

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
		const [addProduct] = await pool.query(ADD_PRODUCT_QUERY, newproductData)
		const productId = addProduct.insertId
		if (!productId) throw new Error(CREATE_PRODUCT_ERROR)

		const response = { ...RESPONSE_TEMPLATE }
		response.code = 201
		response.message = messageCreateSuccessProduct(name)
		res.status(response.code).json(response)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			code: 500,
			res,
		})
	}
}
