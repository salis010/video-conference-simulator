import { connect } from 'react-redux'
import { NotificationWindow as Component } from './notification-window'

const mapStateToProps = state => (
  {
    notifications: state.notifications,
  }
)

export const NotificationWindow = connect(mapStateToProps)(Component)
