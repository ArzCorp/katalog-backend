import { pool } from '../../db.js'
import {
	ERRORS,
	QUERYS,
	RESPONSE_TEMPLATE,
	SUCCESS_MESSAGES,
} from '../utils/constants.js'
import { sendErrorResponse } from '../utils/sendErrorResponse.js'

export const getProductController = async (req, res) => {
	try {
		const { params } = req
		const { id } = params

		const response = { ...RESPONSE_TEMPLATE }

		const [queryResponse] = await pool.query(QUERYS.GET_PRODUCT, [id])
		if (queryResponse.length > 0) {
			response.data = queryResponse[0]
			response.results = queryResponse.length
		} else {
			response.code = 404
			response.message = ERRORS.PRODUCT_NOT_EXIST
		}

		res.status(response.code).json(response)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			res,
		})
	}
}

export const updateProductController = async (req, res) => {
	try {
		const { body } = req
		const { id, name, description, price, image, inventory_quantity } = body
		const response = { ...RESPONSE_TEMPLATE }
		const queryValues = [
			id,
			name,
			description,
			price,
			image,
			inventory_quantity,
		]

		const [queryResponse] = await pool.query(QUERYS.UPDATE_PRODUCT, queryValues)
		if (queryResponse.affectedRows) {
			response.message = SUCCESS_MESSAGES.UPDATE_PRODUCT
			response.code = 201
		} else {
			throw new Error(ERRORS.PRODUCT_UPDATE)
		}

		res.status(response.code).json(response)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			res,
		})
	}
}
