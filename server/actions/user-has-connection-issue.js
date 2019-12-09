const getRandomInt = require('./get-random-int')

const userHasConnectionIssue = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].participants.length > 0 && tables[id].isBroadcasting) {
    const participantId = getRandomInt(tables[id].participants.length)

    if(!tables[id].participants[participantId].hasConnectionIssue) {
      const n = getRandomInt(2)
      tables[id].participants[participantId].hasConnectionIssue = n === 0 ? true : false
      return tables
    }
  }

  return tables
}

module.exports = userHasConnectionIssue
