import { JOIN_TABLE, UPDATE_TABLES, UPDATE_NOTIFICATIONS, UPDATE_TABLE_JOIN_STATUS } from "./action-types"

export const updateTables = tables => ({ type: UPDATE_TABLES, payload: tables })

export const updateNotifications = notifications => ({ type: UPDATE_NOTIFICATIONS, payload: notifications })

export const joinTable = join => ({ type: JOIN_TABLE, payload: join })

export const updateTableJoinState = (id, join) => ({ type: UPDATE_TABLE_JOIN_STATUS, payload: { id: id, join: join }})
