import { connect } from 'react-redux'
import { get } from 'lodash'
import PrinterInfo from './PrinterInfo'
import { resetTraySheets, resetInkSheets } from 'actions/printer'

const mapStateToProps = (state) => ({
  traySheets: state.printer.traySheets,
  inkSheets: state.printer.inkSheets,
  connected: get(state, 'printer.connected', false)
})

const mapDispatchToProps = (dispatch) => ({
  retryConnection: () => {
    dispatch({ type: 'socket/checkPrinter' })
  },
  resetTraySheets: () => {
    dispatch(resetTraySheets())
  },
  resetInkSheets: () => {
    dispatch(resetInkSheets())
  }
})

const PrinterInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PrinterInfo)

export default PrinterInfoContainer
