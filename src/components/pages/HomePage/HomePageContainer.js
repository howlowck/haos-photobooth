import { connect } from 'react-redux'
import { startSession } from 'actions/session'
import { get } from 'lodash'
import HomePage from './HomePage'

const mapStateToProps = (state) => ({
  sessionStarted: get(state, 'photoSession.started', false),
  photoStripVisible: !get(state, 'photos[2].path'),
  printing: get(state, 'printer.jobStart', false)
})

const mapDispatchToProps = (dispatch) => ({
  startSession: (event) => {
    dispatch(startSession())
  }
})

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer
