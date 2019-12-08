const joinTable = (tables, id, join, participant) => {

  tables[id].joined = join

  if(join) {

    if(tables[id]. participants.length < 4) {
      tables[id]. participants.push(participant)
    }
    return tables

  } else {

    for( let i = 0; i < tables[id].participants.length; i++){
      if (tables[id].participants[i] === 'Me') {
        tables[id].participants.splice(i, 1)
        break
       }
    }
    return tables
  }
}

const manageSocketing = (socket, tables) => {

  socket.on('get-tables', function(data, fn) {
    console.log("get-tables")
    fn(tables)
  })

  socket.on('join', function(data, fn) {
      fn(joinTable(tables, data.id, data.join, data.participant))
  })
}

module.exports = manageSocketing
