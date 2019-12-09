const getRandomInt = require('./get-random-int')

const userSolvedWebcamIssue = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].participants.length > 0) {
    const participantId = getRandomInt(tables[id].participants.length)

    if(tables[id].participants[participantId].hasWebcamIssue) {
      tables[id].participants[participantId].hasWebcamIssue = false
      return tables
    }
  }

  return tables
}

module.exports = userSolvedWebcamIssue
