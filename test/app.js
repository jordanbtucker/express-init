require('dotenv/config')
const supertest = require('supertest')
const tap = require('tap')

const app = require('../lib/app')

tap.test('app', async t => {
	await t.test('GET /', async t => {
		await t.test(`responsds with '<h1>Express</h1>\n'`, async t => {
			const body = '<h1>Express</h1>\n'
			await supertest(app)
				.get('/')
				.expect(200, body)
		})
	})

	await t.test('GET /message', async t => {
		await t.test(`responsds with '<h1>Hello, $NAME!</h1>'`, async t => {
			const body = `<h1>Hello, ${process.env.NAME}!</h1>`
			await supertest(app)
				.get('/message')
				.expect(200, body)
		})
	})
})
