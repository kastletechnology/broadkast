// Include the library that installed by cmd "npm install --save passport passport-jwt"
const passport = require('passport')
const {User} = require('./models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config')

passport.use(
  // This strategy is going to decode and verify the token is valid 
  new JwtStrategy({
    // If someone make a request that has the BearerToken and
    // the authorization is going to go ahead and use that
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authorization.jwtSecret
  }, async function (jwtPayload, done) {
    try {
      // Check that user exist in the database
      const user = await User.findOne({
        where: {
          id: jwtPayload.id
        }
      })
      // If no, return error
      if (!user) {
        return done(new Error(), false)
      }
      // If yes, return the user object
      return done(null, user)
    } catch (err) {
      return done(new Error(), false)
    }
  })
)

// Explicit that this isn't really doing anything other than setting up this passport object
module.exports = null