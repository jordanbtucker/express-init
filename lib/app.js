const debug = require('debug')('express-init')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const errorHandler = require('errorhandler')
const helmet = require('helmet')
const morgan = require('morgan')
const serveStatic = require('serve-static')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.text())
app.use(compression())
app.use(cookieParser())
app.use(cors())
app.use(helmet())

app.get('/message', async (req, res) => {
	const message = await Promise.resolve(`Hello, ${process.env.NAME}!`)
	debug('message: %s', message)
	res.type('html').end(`<h1>${message}</h1>`)
})

app.use(serveStatic(path.resolve(__dirname, '../public')))
app.use(errorHandler())
app.use(morgan('combined'))

module.exports = app
