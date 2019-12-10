const getRandomInt = require('./get-random-int')

const broadcastStarts = data => {
  const id = getRandomInt(data.tables.length)

  if(data.tables[id].isBroadcasting === false && data.tables[id].participants.length >= 2) {
    data.tables[id].isBroadcasting = true
    data.notifications.push(`Table ${id + 1} started broadcasting`)
  }

  return data
}

module.exports = broadcastStarts
