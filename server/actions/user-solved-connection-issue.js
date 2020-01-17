const getRandomInt = require('./get-random-int')

const userSolvedConnectionIssue = data => {
  const id = getRandomInt(data.tables.length)

  if(data.tables[id].participants.length > 0) {
    const participantId = getRandomInt(data.tables[id].participants.length)

    if(data.tables[id].participants[participantId].hasConnectionIssue) {
      data.tables[id].participants[participantId].hasConnectionIssue = false
      return data
    }
  }

  return data
}

module.exports = userSolvedConnectionIssue
