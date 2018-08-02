module.exports = (sequlize, DataTypes) => {
  const Bookmark = sequlize.define('Bookmark', {})

  Bookmark.associate = function (models) {
    // Building association between user & song as a bookmark
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  }

  return Bookmark
}