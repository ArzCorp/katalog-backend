import { hashSync } from 'bcrypt'
import { pool } from '../../db.js'
import { sendErrorResponse } from '../utils/sendErrorResponse.js'
import {
	CREATE_USER_ERROR,
	GET_USER_QUERY,
	POST_USER_QUERY,
	RESPONSE_TEMPLATE,
	SALT_ROUNDS,
	getUserError,
	messageCreateSuccessUser,
} from '../utils/constants.js'

const getUser = async (email) => {
	const [queryResponse] = await pool.query(GET_USER_QUERY, [email])
	if (queryResponse.length <= 0) throw new Error(getUserError(email))

	return queryResponse[0].email
}

export const postUsersController = async (req, res) => {
	try {
		const { body } = req
		const { password, name, lastname, email } = body
		const hashPassword = await hashSync(password, SALT_ROUNDS)

		const newUserData = [name, hashPassword, email, lastname]
		await pool.query(POST_USER_QUERY, newUserData)

		const newEmailRegister = await getUser(email)
		if (!newEmailRegister) throw new Error(CREATE_USER_ERROR)

		const response = {
			...RESPONSE_TEMPLATE,
			code: 201,
			message: messageCreateSuccessUser(newEmailRegister),
		}
		res.status(response.code).json(response)
	} catch (error) {
		sendErrorResponse({
			errorMessage: error.message,
			res,
		})
	}
}
