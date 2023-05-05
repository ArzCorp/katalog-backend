export const EMPTY_STRING = ''

export const SALT_ROUNDS = 10

export const API_URLS = Object.freeze({
	USERS: '/users',
	LOG_IN: '/login',
	GET_PRODUCTS_BY_USER: '/products/:id',
	PRODUCTS: '/products',
	DELETE_PRODUCT: '/products/:id',
})

export const ERRORS = Object.freeze({
	GENERIC: 'Ocurrió un error inesperado intente más tarde',
	LOG_IN: 'Usuario o contraseña incorrectos',
	CREATE_USER: 'Ocurrió un error al crear el usuario, intenta otra vez.',
	GET_PRODUCTS: 'Error al obtener los productos intenta más tarde.',
	CREATE_PRODUCT: 'Ocurrió un error al crear el producto intente más tarde.',
	GET_USER: (email) => `El correo electronico ${email} no esta registrado`,
	DELETE_PRODUCT: 'Ocurrió un error al eliminar el producto intente más tarde.',
	PRODUCT_NOT_EXIST: 'El producto no existe.',
})

export const QUERYS = Object.freeze({
	GET_USER: 'SELECT * FROM users WHERE email = ?',
	POST_USER:
		'INSERT INTO users (name, password, email, lastname, catalog_name) VALUES (?, ?, ?, ?, ?)',
	GET_PRODUCTS: 'CALL get_user_products(?)',
	ADD_PRODUCT:
		'INSERT INTO products (name, description, image, user_id, price, inventory_quantity) VALUES (?, ?, ?, ?, ?, ?)',
	DELETE_PRODUCT: 'DELETE FROM products WHERE products.id = ?',
})

export const SUCCESS_MESSAGES = Object.freeze({
	CREATE_USER: (email) => `Se generó usuario ${email} exitosamente`,
	CREATE_PRODUCT: (productName) =>
		`Producto "${productName}" agregado exitosamente`,
	DELETE_PRODUCT: 'Producto eliminado con éxito.',
})

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
