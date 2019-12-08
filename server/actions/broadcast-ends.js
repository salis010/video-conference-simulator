const getRandomInt = require('./get-random-int')

const broadcastEnds = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].isBroadcasting === true && tables[id].participants.length >= 1) {
    tables[id].isBroadcasting = false
  }

  return tables
}

module.exports = broadcastEnds
