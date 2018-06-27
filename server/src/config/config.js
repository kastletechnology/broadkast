module.exports = {
  port: 8081,
  db: {
      database: process.env.DB_NAME || 'Broadkast',
      user: process.env.DB_USER || 'Broadkast',
      password: process.env.DB_PW || 'Broadkast',
      options:{
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: './Broadkast.sqlite'
      }
  }
}