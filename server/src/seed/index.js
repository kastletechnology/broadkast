const {
  sequelize,
  Song,
  User
} = require('./models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')

// For database usage
sequelize.sync({force: false})
  .then(async function {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(song => {
        Song.create(song)
      })
    )
  })
