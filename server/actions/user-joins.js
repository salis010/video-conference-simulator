const getRandomInt = require('./get-random-int')
const names = require('./names')

const userJoins = tables => {
  const id = getRandomInt(tables.length)

  if(tables[id].participants.length < 4) {
    const name = names[getRandomInt(names.length)]
    tables[id].participants.push(name)
    return tables
  }

  return tables
}

module.exports = userJoins
