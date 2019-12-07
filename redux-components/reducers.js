import { createTables } from './create-tables'
import { updateTableJoinStatus } from './update-table-join-status'
import { JOIN_TABLE, UPDATE_TABLE_JOIN_STATUS } from './action-types'

const initialState = {
  tables: createTables(15),
  joinedTable: false,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case JOIN_TABLE:
        return { ...state, joinedTable: action.payload }

      case UPDATE_TABLE_JOIN_STATUS:
        const tables = updateTableJoinStatus(state, action.payload)
        return { ...state, tables: tables }

      default:
        return state
    }
  }
