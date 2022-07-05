import express from 'express'
import { checkAccountFF, checkAccountML } from '../controller/checkaccountController.js'

const checkaccount = express()

checkaccount.get('/ff/:id', checkAccountFF)
checkaccount.get('/ml/:zoneid/:id', checkAccountML)

export default checkaccount