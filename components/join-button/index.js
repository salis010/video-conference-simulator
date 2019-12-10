import { connect } from 'react-redux'
import { updateTables, joinTable } from '../../redux-components/actions'
import { JoinButton as Component } from './join-button'

const mapStateToProps = (state, props) =>
  (
    {
      socket: state.socket,
      id: props.id,
      joined: props.joined,
      joinedTable: state.joinedTable,
      isDisabled: (state.joinedTable === true && state.tables[props.id].joined === false) ||
        (state.tables[props.id].participants.length >= 4 && !state.joinedTable === true)
    }
  )

const mapDispatchToProps = dispatch =>
  (
    {
      onClick: (socket, id, join) => {
        socket.emit(
          'join',
          {
            'id': id,
            'join': join,
            'participant': {
                'name': 'Me',
                'hasWebcamIssue': false,
                'hasConnectionIssue': false
              }
            },
          (data) => [
            dispatch(updateTables(data.tables)),
            dispatch(joinTable(join)),
          ]
        )
      }
    }
  )

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  (
    {
      socket: stateProps.socket,
      id: stateProps.id,
      isDisabled: stateProps.isDisabled,
      joined: stateProps.joined,
      onClick: () => dispatchProps.onClick(stateProps.socket, ownProps.id, !stateProps.joinedTable),
    }
  )

export const JoinButton = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
