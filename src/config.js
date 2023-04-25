import { config } from 'dotenv'
import { EMPTY_STRING } from './utils/constants.js'

config()

export const PORT = process.env.PORT || 5001
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || '1234'
export const DB_PORT = process.env.PORT || 3306
export const DB_NAME = process.env.DB_NAME || 'testing'
export const IMGBB_API_KEY = process.env.IMGBB_API_KEY || EMPTY_STRING
