const getRandomInt = require('./get-random-int')

const userSolvedWebcamIssue = data => {
  const id = getRandomInt(data.tables.length)

  if(data.tables[id].participants.length > 0) {
    const participantId = getRandomInt(data.tables[id].participants.length)

    if(data.tables[id].participants[participantId].hasWebcamIssue) {
      data.tables[id].participants[participantId].hasWebcamIssue = false
      return data
    }
  }

  return data
}

module.exports = userSolvedWebcamIssue
