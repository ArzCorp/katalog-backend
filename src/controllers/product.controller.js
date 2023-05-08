import { pool } from '../../db.js'
import { ERRORS, QUERYS, RESPONSE_TEMPLATE } from '../utils/constants.js'
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
