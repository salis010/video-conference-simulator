const getRandomInt = require('./get-random-int')

const broadcastEnds = data => {

  const n = getRandomInt(4)

  if(n === 0) {
    const id = getRandomInt(data.tables.length)

    if(data.tables[id].isBroadcasting === true && data.tables[id].participants.length >= 1) {
      data.tables[id].isBroadcasting = false
      data.notifications.push(`Table ${id + 1} stopped broadcasting`)

      for(let i = 0; i < data.tables[id].participants.length; i++) {
        data.tables[id].participants[i].hasWebcamIssue = false
        data.tables[id].participants[i].hasConnectionIssue = false
      }
    }
  }

  return data
}

module.exports = broadcastEnds
