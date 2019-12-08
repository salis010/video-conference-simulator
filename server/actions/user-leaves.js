const getRandomInt = require('./get-random-int')

const userLeaves = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].participants.length > 0) {
    const participantId = tables[id].participants[getRandomInt(tables[id].participants.length)]
    if(tables[id].participants[participantId] !== 'Me') {
      tables[id].participants.splice(participantId, 1)

      if(tables[id].participants <= 0)
        tables[id].isBroadcasting = false
    }
  }

  return tables
}

module.exports = userLeaves
