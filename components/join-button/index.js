import { connect } from 'react-redux'
import { joinTable, updateTableJoinState } from '../../redux-components/actions'
import { JoinButton as Component } from './join-button'

const mapStateToProps = (state, props) =>
  (
    {
      id: props.id,
      joined: props.joined,
      joinedTable: state.joinedTable,
      isDisabled: state.joinedTable === true && state.tables[props.id].joined === false 
    }
  )

const mapDispatchToProps = dispatch =>
  (
    {
      onClick: (id, join) => [
        dispatch(joinTable(join)),
        dispatch(updateTableJoinState(id, join))
      ],
    }
  )

const mergeProps = (stateProps, dispatchProps, ownProps) =>
  (
    {
      id: stateProps.id,
      isDisabled: stateProps.isDisabled,
      joined: stateProps.joined,
      onClick: () => dispatchProps.onClick(ownProps.id, !stateProps.joinedTable),
    }
  )

export const JoinButton = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
