import { SET_CURRENT_PRINTER_SHEETS, SET_CURRENT_INK_SHEETS,
  SET_TOTAL_SHEETS, DECREMENT_PRINTER_SHEET,
  RESET_TRAY_SHEETS, RESET_INK_SHEETS
 } from 'actions/printer'

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === 'message' && action.data.name === 'client/printerConnectStatus') {
    return {
      ...prevState,
      connected: action.data.payload
    }
  }

  if (action.type === 'socket/startPrint') {
    return {
      ...prevState,
      jobStarted: true
    }
  }

  if (action.type === SET_CURRENT_PRINTER_SHEETS) {
    return {
      ...prevState,
      traySheets: action.data
    }
  }

  if (action.type === SET_CURRENT_INK_SHEETS) {
    return {
      ...prevState,
      inkSheets: action.data
    }
  }

  if (action.type === SET_TOTAL_SHEETS) {
    return {
      ...prevState,
      totalSheets: action.data
    }
  }

  if (action.type === DECREMENT_PRINTER_SHEET) {
    let { traySheets, inkSheets, totalSheets } = prevState

    traySheets -= 1
    inkSheets -= 1
    totalSheets -= 1

    return {
      ...prevState,
      traySheets,
      inkSheets,
      totalSheets
    }
  }

  if (action.type === RESET_TRAY_SHEETS) {
    return {
      ...prevState,
      traySheets: 18
    }
  }

  if (action.type === RESET_INK_SHEETS) {
    return {
      ...prevState,
      inkSheets: 36
    }
  }

  return { ...prevState }
}
