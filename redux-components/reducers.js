import socketIOClient from 'socket.io-client'
import { UPDATE_TABLES, UPDATE_NOTIFICATIONS, JOIN_TABLE } from './action-types'

const socket = socketIOClient("localhost:3000")

const initialState = {
  socket: socket,
  tables: [],
  notifications: [],
  joinedTable: false,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case UPDATE_TABLES:
        return { ...state, tables: action.payload }

      case UPDATE_NOTIFICATIONS:
        return { ...state, notifications: action.payload }

      case JOIN_TABLE:
        return { ...state, joinedTable: action.payload }

      default:
        return state
    }
  }
