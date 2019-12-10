const getRandomInt = require('./get-random-int')

const userLeaves = data => {

  if(getRandomInt(2) === 0) {
    const id = getRandomInt(data.tables.length)

    if(data.tables[id].participants.length > 0) {

      const participantId = getRandomInt(data.tables[id].participants.length)

      if(data.tables[id].participants[participantId].name !== 'Me') {
        data.notifications.push(`${data.tables[id].participants[participantId].name} left Table ${id + 1}`)
        data.tables[id].participants.splice(participantId, 1)

        if(data.tables[id].participants <= 0 && data.tables[id].isBroadcasting) {
          data.tables[id].isBroadcasting = false
          data.notifications.push(`Table ${id + 1} stopped broadcasting`)
        }
      }
    }
  }

  return data
}

module.exports = userLeaves
