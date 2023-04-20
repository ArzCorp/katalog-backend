import { hash } from 'bcrypt'
import { pool } from '../../db.js'
import { RESPONSE_TEMPLATE, SALT_ROUNDS } from '../utils/constants.js'

export const getUsersController = async (req, res) => {
	const queryResponse = await pool.query('SELECT * FROM users;')
	const response = {
		...RESPONSE_TEMPLATE,
		data: queryResponse[0],
		results: queryResponse[0].length,
	}

	res.send(response)
}

export const postUsersController = async (req, res) => {
	const { body } = req
	const { password, name, lastname, email } = body
	const query =
		'INSERT INTO users (name, password, email, lastname) VALUES (?, ?, ?, ?)'

	hash(password, SALT_ROUNDS, async (error, result) => {
		const userData = [name, result, email, lastname]
		const queryResult = await pool.query(query, userData)
		console.log({ queryResult })
	})
	const response = { ...RESPONSE_TEMPLATE }

	res.send(response)
}
