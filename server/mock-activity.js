const getRandomInt = require('./actions/get-random-int')
const userJoins = require('./actions/user-joins')
const userLeaves = require('./actions/user-leaves')
const broadcastStarts = require('./actions/broadcast-starts')
const broadcastEnds = require('./actions/broadcast-ends')
const userHasConnectionIssue = require('./actions/user-has-connection-issue')
const userHasWebcamIssue = require('./actions/user-has-webcam-issue')
const userSolvedConnectionIssue = require('./actions/user-solved-connection-issue')
const userSolvedWebcamIssue = require('./actions/user-solved-webcam-issue')

const actions = [
  data => userJoins(data),
  data => userLeaves(data),
  data => broadcastStarts(data),
  data => broadcastEnds(data),
  data => userHasConnectionIssue(data),
  data => userHasWebcamIssue(data),
  data => userSolvedConnectionIssue(data),
  data => userSolvedWebcamIssue(data),
]

const mockActivity = (socket, data) => {
  setInterval(() =>
    {
      const fn = actions[getRandomInt(actions.length)]
      const newData = fn(data)
      newData.notifications = newData.notifications.slice(-3)

      socket.emit('mocked-activity', newData)
    },
    800)
}

module.exports = mockActivity
