import { connect } from 'react-redux'
import PrintingOverlay from './PrintingOverlay'
import { get } from 'lodash'

const mapStateToProps = (state) => ({
  visible: get(state, 'printer.jobStarted', false)
})

const mapDispatchToProps = (dispatch) => ({

})

const PrintingOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(PrintingOverlay)

export default PrintingOverlayContainer
