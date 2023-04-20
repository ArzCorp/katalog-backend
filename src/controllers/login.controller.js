import { compare } from 'bcrypt'
import { pool } from '../../db.js'
import { RESPONSE_TEMPLATE } from '../utils/constants.js'

export const logInController = async (req, res) => {
	const { body } = req
	const { email, password } = body
	const query = 'SELECT password FROM users WHERE email = ?'
	const queryData = [email]
	const currentUser = await pool.query(query, queryData)
	const currentUserPassword = currentUser[0][0].password

	compare(password, currentUserPassword, (err, passwordIsEqual) => {
		if (passwordIsEqual)
			return res.json({
				...RESPONSE_TEMPLATE,
				message: 'Datos correctos',
				data: true,
			})

		return res.json({
			...RESPONSE_TEMPLATE,
			message: 'Datos incorrecto',
			data: false,
			error: true,
		})
	})
}
