import { connect } from 'react-redux'
import { Tables as Component } from './tables'

const mapStateToProps = (state) => ({
    tables: state.tables,
  })

export const Tables = connect(mapStateToProps)(Component)
