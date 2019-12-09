const getRandomInt = require('./get-random-int')
const names = require('./names')

const userJoins = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].participants.length < 4) {
    const name = names[getRandomInt(names.length)]
    const participant = {
      name: name,
      hasWebcamIssue: false,
      hasConnectionIssue: false,
    }
    tables[id].participants.push(participant)
    return tables
  }

  return tables
}

module.exports = userJoins
