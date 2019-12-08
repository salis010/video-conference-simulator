//import { createTables } from './create-tables'
import socketIOClient from 'socket.io-client'
import { updateTableJoinStatus } from './update-table-join-status'
import { UPDATE_TABLES, JOIN_TABLE, UPDATE_TABLE_JOIN_STATUS } from './action-types'

const socket = socketIOClient("localhost:3000")

const initialState = {
  //tables: createTables(15),
  socket: socket,
  tables: [],
  joinedTable: false,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case UPDATE_TABLES:
        return { ...state, tables: action.payload }

      case JOIN_TABLE:
        return { ...state, joinedTable: action.payload }

      case UPDATE_TABLE_JOIN_STATUS:
        const tables = updateTableJoinStatus(state, action.payload)
        return { ...state, tables: tables }

      default:
        return state
    }
  }
