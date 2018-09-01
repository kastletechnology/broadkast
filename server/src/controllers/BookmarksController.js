const {
  Bookmark,
  Song,
  User
} = require('../models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        // Work for both instances (with SongId or without SongId)
        where: where,
        include: [
          {
            // Pass in model that is associated to the bookmark
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        // Make a new object with the bookmark ID
        .map(bookmark => _.extend({
          bookmarkId: bookmark.id
        }, bookmark.Song))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body
      // Check in database to see whether this user has bookmarks this song
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })

      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }

      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy() // delete the bookmark from the database
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the bookmark'
      })
    }
  }
}