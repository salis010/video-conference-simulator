const getRandomInt = require('./get-random-int')

const broadcastEnds = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].isBroadcasting === true && tables[id].participants.length >= 1) {
    tables[id].isBroadcasting = false

    for(let i = 0; i < tables[id].participants.length; i++) {
      tables[id].participants[i].hasWebcamIssue = false
      tables[id].participants[i].hasConnectionIssue = false
    }
  }

  return tables
}

module.exports = broadcastEnds
