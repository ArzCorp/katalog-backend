export const EMPTY_STRING = ''

export const SALT_ROUNDS = 10

export const USERS_API_URL = '/users'
export const LOGIN_API_URL = '/login'

export const GENERIC_ERROR = 'Ocurrió un error inesperado intente más tarde'
export const LOGIN_ERROR = 'Usuario o contraseña incorrectos'
export const CREATE_USER_ERROR =
	'Ocurrió un error al crear el usuario, intenta otra vez.'

export const getUserError = (email) =>
	`El correo electronico ${email} no esta registrado`

export const messageCreateSuccessUser = (email) =>
	`Se generó usuario ${email} exitosamente`

export const GET_USER_QUERY = 'SELECT * FROM users WHERE email = ?'
export const POST_USER_QUERY =
	'INSERT INTO users (name, password, email, lastname) VALUES (?, ?, ?, ?)'

export const RESPONSE_TEMPLATE = {
	code: 200,
	success: true,
	error: false,
	message: EMPTY_STRING,
	data: [],
	results: [].length,
}

export const RESPONSE_NOT_FOUND = {
	...RESPONSE_TEMPLATE,
	code: 404,
	success: false,
	error: true,
	message: '404 not found',
	data: [],
}
