export const EMPTY_STRING = ''

export const SALT_ROUNDS = 10

export const USERS_API_URL = '/users'
export const LOGIN_API_URL = '/login'

export const GENERIC_ERROR = 'Ocurrió un error inesperado intente más tarde'
export const LOGIN_ERROR = 'Usuario o contraseña incorrectos'
export const CREATE_USER_ERROR =
	'Ocurrió un error al crear el usuario, intenta otra vez.'
export const GET_PRODUCTS_ERROR =
	'Error al obtener los productos intenta más tarde.'
export const CREATE_PRODUCT_ERROR =
	'Ocurrió un error al crear el producto intente más tarde.'

export const getUserError = (email) =>
	`El correo electronico ${email} no esta registrado`

export const messageCreateSuccessUser = (email) =>
	`Se generó usuario ${email} exitosamente`
export const messageCreateSuccessProduct = (productName) =>
	`Producto "${productName}" agregado exitosamente`

export const GET_USER_QUERY = 'SELECT * FROM users WHERE email = ?'
export const POST_USER_QUERY =
	'INSERT INTO users (name, password, email, lastname, catalog_name) VALUES (?, ?, ?, ?, ?)'
export const GET_PRODUCTS_QUERY =
	'SELECT id, name, description, price, image, inventory_quantity FROM products WHERE user_id = ?'
export const ADD_PRODUCT_QUERY =
	'INSERT INTO products (name, description, image, user_id, price, inventory_quantity) VALUES (?, ?, ?, ?, ?, ?)'

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
