const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
//   app.post('/register', (req, res) => {
//     res.send({
//       // message: 'Your user was registered! have fun!'
//       message: `Hello ${req.body.email}! Your user was registered! have fun!`
//     })
//   })

//  with the controller built seperately, it can be replaced by below
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

  app.post('/login', AuthenticationController.login)

  app.get('/songs', SongsController.index)

  app.get('/songs/:songId', SongsController.show)

  app.put('/songs/:songId', SongsController.put)

  app.post('/songs', SongsController.post)

  app.get('/bookmarks', BookmarksController.index)

  app.post('/bookmarks', BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete)
}
