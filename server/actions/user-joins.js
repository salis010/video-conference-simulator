const getRandomInt = require('./get-random-int')
const names = require('./names')

const userJoins = data => {
  const id = getRandomInt(data.tables.length)

  if(data.tables[id].participants.length < 4) {
    const name = names[getRandomInt(names.length)]
    const participant = {
      name: name,
      hasWebcamIssue: false,
      hasConnectionIssue: false,
    }

    data.tables[id].participants.push(participant)
    data.notifications.push(`${name} joined Table ${id + 1}`)

    return data
  }

  return data
}

module.exports = userJoins
