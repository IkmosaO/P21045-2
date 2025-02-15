/* eslint-disable no-console */
const express = require('express')
const path = require('path')
const contactsRouter = require('./routes/contactsRoutes')
const textMessageRouter = require('./routes/textMessageRoutes')
const textCampaignRouter = require('./routes/textCampaignRoutes')
const cors = require('cors')
// const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.static('client/build'))

app.use(express.json())

app.use('/api/contact', contactsRouter)
app.use('/api/text', textMessageRouter)
app.use('/api/campaign', textCampaignRouter)


app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  console.log('Server is running on port 3001')
})
