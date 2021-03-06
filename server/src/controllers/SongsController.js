const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let song = null
      const search = req.query.search
      if (search) {
        song = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        // Find all Songs
        song = await Song.findAll({
          limit: 10
        })
      }
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      // Find one song according to the songId
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show the song'
      })
    }
  },
  async post (req, res) {
    try {
      // Creat new Songs
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  },
  async put (req, res) {
    try {
      // Update a song
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to update the song'
      })
    }
  }
}