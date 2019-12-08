const getRandomInt = require('./get-random-int')

const broadcastStarts = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].isBroadcasting === false && tables[id].participants.length >= 2) {
    tables[id].isBroadcasting = true
  }

  return tables
}

module.exports = broadcastStarts
