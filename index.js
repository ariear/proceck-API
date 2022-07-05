import express from 'express'
import { getff } from './src/routes/checkaccount.js'
import { endpoint } from './src/routes/endpoint.js'

const app = express()

app.use(endpoint)
app.use('/api/', getff)

app.listen(3000)