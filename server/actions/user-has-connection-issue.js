const getRandomInt = require('./get-random-int')

const userHasConnectionIssue = data => {
  const id = getRandomInt(data.tables.length)

  if(data.tables[id].participants.length > 0 && data.tables[id].isBroadcasting) {
    const participantId = getRandomInt(data.tables[id].participants.length)

    if(!data.tables[id].participants[participantId].hasConnectionIssue) {
      const n = getRandomInt(2)
      if(n === 0) {
        data.tables[id].participants[participantId].hasConnectionIssue = true
        data.notifications.push(`Table ${id + 1}: ${data.tables[id].participants[participantId].name} has a connection issue`)
        return data
      }
    }
  }

  return data
}

module.exports = userHasConnectionIssue
