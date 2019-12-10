import { connect } from 'react-redux'
import { updateTables, updateNotifications } from '../../redux-components/actions'
import { Tables as Component } from './tables'

const mapStateToProps = state => ({
    socket: state.socket,
    tables: state.tables,
  })

const mapDispatchToProps = dispatch => (
  {
    onGetTables: (socket) => {
      socket.emit(
        'get-tables',
        {'message': 'get-tables'},
        (data) => dispatch(updateTables(data.tables))
      )
    },
    onUpdateTables: tables => dispatch(updateTables(tables)),
    onUpdateNotifications: notifications => dispatch(updateNotifications(notifications))
  }
)

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  {
    socket: stateProps.socket,
    tables: stateProps.tables,
    onUpdateTables: tables => dispatchProps.onUpdateTables(tables),
    onUpdateNotifications: notifications => dispatchProps.onUpdateNotifications(notifications)
  }
)

export const Tables = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
