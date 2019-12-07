const pink = "#ff93a0"
const beige = "#ffcb82"

export const createTables = n => {
  const tables = []

  for(let i = 0; i < n; i++) {
    tables.push(
      {
        id: i,
        name:`Table ${i + 1}`,
        backgroundColor: i % 2 === 0 ? pink : beige,
        participants: ['Igor', 'Lax', 'Anna'],
        joined: false,
      }
    )
  }

  return tables
}
