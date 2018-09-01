module.exports = (sequlize, DataTypes) => {
  const History = sequlize.define('History', {})

  History.associate = function (models) {
    // Building association between user & song as a bookmark
    History.belongsTo(models.User)
    History.belongsTo(models.Song)
  }

  return History
}