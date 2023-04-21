import { compareSync } from 'bcrypt'
import { pool } from '../../db.js'
import { sendErrorResponse } from '../utils/sendErrorResponse.js'
import {
	GET_USER_QUERY,
	LOGIN_ERROR,
	RESPONSE_TEMPLATE,
} from '../utils/constants.js'

export const logInController = async (req, res) => {
	const { body } = req
	const { email, password } = body
	const userData = [email]

	try {
		const [currentUser] = await pool.query(GET_USER_QUERY, userData)
		if (currentUser.length <= 0) throw new Error(LOGIN_ERROR)

		const currentUserPassword = currentUser[0].password
		const passwordIsEqual = await compareSync(password, currentUserPassword)

		const responseData = currentUser[0]
		delete responseData.password

		const response = {
			...RESPONSE_TEMPLATE,
			message: `Bienvenid@ ${currentUser[0].name}`,
			data: responseData,
		}

		if (passwordIsEqual) return res.status(response.code).json(response)
		throw new Error(LOGIN_ERROR)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			code: 401,
			res,
		})
	}
}
