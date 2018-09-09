const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// For database usage
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')

// pass an express application
require('./routes')(app)

// For database usage
sequelize.sync({force: false})
  .then(() => {
    // refer to config.js:
    // app.listen(process.env.PORT || 8081)
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
