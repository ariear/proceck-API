import express from 'express'
import { checkAccountFF } from '../controller/checkaccountController.js'

const app = express()

export const getff = app.get('/ff/:id', checkAccountFF)