import { JOIN_TABLE, UPDATE_TABLES, UPDATE_NOTIFICATIONS } from "./action-types"

export const updateTables = tables => ({ type: UPDATE_TABLES, payload: tables })

export const updateNotifications = notifications => ({ type: UPDATE_NOTIFICATIONS, payload: notifications })

export const joinTable = join => ({ type: JOIN_TABLE, payload: join })
