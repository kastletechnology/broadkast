module.exports = (sequlize, DataTypes) => {
  const Song = sequlize.define('Song', {
    title: DataTypes.STRING
  })

  return Song
}