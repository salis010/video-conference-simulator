const getRandomInt = require('./actions/get-random-int')
const userJoins = require('./actions/user-joins')
const userLeaves = require('./actions/user-leaves')
const broadcastStarts = require('./actions/broadcast-starts')
const broadcastEnds = require('./actions/broadcast-ends')
// const userHasConnectionIssue = require('./actions/user-has-connection-issue')
// const userHasWebcamIssue = require('./actions/user-has-webcam-issue')

const actions = [
  tables => userJoins(tables),
  //tables => userLeaves(tables),
  tables => broadcastStarts(tables),
  tables => broadcastEnds(tables),
  // (tables) => userHasConnectionIssue(tables),
  // (tables) => userHasWebcamIssue(tables),
]

const mockActivity = (socket, tables) => {
  setInterval(() =>
    {
      const fn = actions[getRandomInt(actions.length)]
      const newTables = fn(tables)
      //console.log(newTables)
      socket.emit('mocked-activity', newTables)
    },
    200)
}

module.exports = mockActivity
