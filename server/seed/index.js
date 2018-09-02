const {
  sequelize,
  Song,
  User,
  Bookmark,
  History
} = require('../src/models')

// Promise is used to ensure that we finish inserting all songs & users before do other stuff
const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./histories.json')

// For database usage
sequelize.sync({force: true}) // force = true to drop everything in the database before adding
  .then(async function () {
    await Promise.all(
      users.map(user => {
        // Run through the json array and for each one create a new user object
        User.create(user)
      })
    )

    await Promise.all(
      songs.map(song => {
        // Run through the json array and for each one create a new song object
        Song.create(song)
      })
    )

    await Promise.all(
      bookmarks.map(bookmark => {
        // Run through the json array and for each one create a new bookmark object
        Bookmark.create(bookmark)
      })
    )

    await Promise.all(
      histories.map(history => {
        // Run through the json array and for each one create a new history object
        History.create(history)
      })
    )
  })
