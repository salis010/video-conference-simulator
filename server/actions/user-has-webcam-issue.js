const getRandomInt = require('./get-random-int')

const userHasWebcamIssue = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].participants.length > 0 && tables[id].isBroadcasting) {
    const participantId = getRandomInt(tables[id].participants.length)

    if(!tables[id].participants[participantId].hasWebcamIssue) {
      const n = getRandomInt(2)
      tables[id].participants[participantId].hasWebcamIssue = n === 0 ? true : false
      return tables
    }
  }

  return tables
}

module.exports = userHasWebcamIssue
