const passport = require('passport')

module.exports = function (req, res, next) {
  // Call the passport authenticate with the JWT strategy
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      // 403 = authentication error
      res.status(403).send({
        error: 'you do not have access to this resource'
      })
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}