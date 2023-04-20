export const EMPTY_STRING = ''

export const SALT_ROUNDS = 10

export const GET_USERS_URL = '/users'

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
