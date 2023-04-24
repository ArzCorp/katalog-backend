import { hashSync } from 'bcrypt'
import { pool } from '../../db.js'
import { sendErrorResponse } from '../utils/sendErrorResponse.js'
import {
	ERRORS,
	QUERYS,
	RESPONSE_TEMPLATE,
	SALT_ROUNDS,
	SUCCESS_MESSAGES,
} from '../utils/constants.js'

const getUser = async (email) => {
	const [queryResponse] = await pool.query(QUERYS.GET_USER, [email])
	if (queryResponse.length <= 0) throw new Error(ERRORS.GET_USER(email))

	return queryResponse[0].email
}

export const postUsersController = async (req, res) => {
	try {
		const { body } = req
		const { password, name, lastname, email, catalog_name } = body
		const hashPassword = await hashSync(password, SALT_ROUNDS)

		const newUserData = [name, hashPassword, email, lastname, catalog_name]
		await pool.query(QUERYS.POST_USER, newUserData)

		const newEmailRegister = await getUser(email)
		if (!newEmailRegister) throw new Error(ERRORS.CREATE_USER)

		const response = {
			...RESPONSE_TEMPLATE,
			code: 201,
			message: SUCCESS_MESSAGES.CREATE_USER(newEmailRegister),
		}
		res.status(response.code).json(response)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			res,
		})
	}
}
