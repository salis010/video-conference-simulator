const joinTable = (data, id, join, participant) => {

  data.tables[id].joined = join

  if(join) {
    if(data.tables[id].participants.length < 4) {
      data.tables[id].participants.push(participant)
      data.notifications.push(`You joined Table ${id + 1}`)
    }

    return data

  } else {
    for( let i = 0; i < data.tables[id].participants.length; i++){
      if (data.tables[id].participants[i].name === 'Me') {
        data.tables[id].participants.splice(i, 1)
        data.notifications.push(`You left Table ${id + 1}`)
        break
       }
    }
    return data
  }
}

const manageSocketing = (socket, data) => {

  socket.on('get-tables', function(payload, fn) {
    console.log("get-tables")
    fn(payload)
  })

  socket.on('join', function(payload, fn) {
      fn(joinTable(data, payload.id, payload.join, payload.participant))
  })
}

module.exports = manageSocketing
