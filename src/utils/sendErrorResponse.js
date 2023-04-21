import { GENERIC_ERROR, RESPONSE_TEMPLATE } from './constants.js'

export const sendErrorResponse = ({ errorMessage, res, code = 500 }) => {
	const response = {
		...RESPONSE_TEMPLATE,
		success: false,
		error: true,
		code,
	}

	if (errorMessage) {
		response.message = errorMessage
	} else {
		response.message = GENERIC_ERROR
	}

	res.status(response.code).json(response)
}
