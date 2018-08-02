const path = require('path')

module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'Broadkast',
    user: process.env.DB_USER || 'Broadkast',
    password: process.env.DB_PW || 'Broadkast',
    options:{
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname,'../../Broadkast.sqlite')
    }
  },

  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
