import express from 'express'
import { checkAccountAOV, checkAccountCOD, checkAccountFF, checkAccountGI, checkAccountML, checkAccountSM } from '../controller/checkaccountController.js'

const checkaccount = express()

checkaccount.get('/ff/:id', checkAccountFF)
checkaccount.get('/ml/:zoneid/:id', checkAccountML)
checkaccount.get('/aov/:id', checkAccountAOV)
checkaccount.get('/cod/:id', checkAccountCOD)
checkaccount.get('/gi/:id', checkAccountGI)
checkaccount.get('/sm/:id', checkAccountSM)

export default checkaccount