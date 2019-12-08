import { connect } from 'react-redux'
import { updateTables } from '../../redux-components/actions'
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
        (data) => dispatch(updateTables(data))
      )
    },
    onUpdateTables: (data) => dispatch(updateTables(data))
  }
)

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  {
    socket: stateProps.socket,
    tables: stateProps.tables,
    onGetTables: () => dispatchProps.onGetTables(stateProps.socket),
    onUpdateTables: data => dispatchProps.onUpdateTables(data)
  }
)

export const Tables = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
