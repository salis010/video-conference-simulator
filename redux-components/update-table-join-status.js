//remove 'Me' from table when I leave
const removeMe = participants => {
    for( let i = 0; i < participants.length; i++){
      if ( participants[i] === 'Me') {
        participants.splice(i, 1)
       }
    }
    return participants
}

export const updateTableJoinStatus = (state, payload) => {
  return state.tables.map((table, index) => {
      if(index !== payload.id) {
        return table
      }
      return Object.assign({}, table, {
        joined: payload.join,
        participants: payload.join ? [...table.participants, 'Me'] : removeMe(table.participants),
      })
    }
  )
}
