import { JOIN_TABLE, UPDATE_TABLE_JOIN_STATUS, UPDATE_TABLES } from "./action-types"

export const updateTables = tables => ({ type: UPDATE_TABLES, payload: tables })

export const joinTable = join => ({ type: JOIN_TABLE, payload: join })

export const updateTableJoinState = (id, join) => ({ type: UPDATE_TABLE_JOIN_STATUS, payload: { id: id, join: join }})
