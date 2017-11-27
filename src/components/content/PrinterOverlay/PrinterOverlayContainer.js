/* global location */
import { connect } from 'react-redux'
import PrinterOverlay from './PrinterOverlay'
import { get } from 'lodash'
import { decrementPrinterSheet } from 'actions/printer'

const mapStateToProps = (state) => ({
  visible: !!get(state, 'photos[2].path') && !get(state, 'printer.jobStarted', false),
  printerReady: state.printer.traySheets > 0 && state.printer.inkSheets > 0,
  person: get(state, 'faces[0]', {})
})

const mapDispatchToProps = (dispatch) => ({
  onRestart: () => {
    location.reload()
  },
  print: () => {
    dispatch({ type: 'socket/startPrint' })
    dispatch(decrementPrinterSheet())
  }
})

const PrinterOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(PrinterOverlay)

export default PrinterOverlayContainer
