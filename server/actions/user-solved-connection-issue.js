const getRandomInt = require('./get-random-int')

const userSolvedConnectionIssue = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].participants.length > 0) {
    const participantId = getRandomInt(tables[id].participants.length)

    if(tables[id].participants[participantId].hasConnectionIssue) {
      tables[id].participants[participantId].hasConnectionIssue = false
      return tables
    }
  }

  return tables
}

module.exports = userSolvedConnectionIssue
