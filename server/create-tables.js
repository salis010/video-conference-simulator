const createTables = n => {
  const tables = []
  const pink = "#ff93a0"
  const beige = "#ffcb82"

  for(let i = 0; i < n; i++) {
    tables.push(
      {
        id: i,
        name:`Table ${i + 1}`,
        backgroundColor: i % 2 === 0 ? pink : beige,
        participants: [],
        joined: false,
        isBroadcasting: false,
      }
    )
  }

  return tables
}

module.exports = createTables
