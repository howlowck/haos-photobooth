/* global localStorage */

import { DECREMENT_PRINTER_SHEET, RESET_TRAY_SHEETS, RESET_INK_SHEETS } from 'actions/printer'
const saveToLocalStorage = store => next => action => {
  let result = next(action)
  if (action.type === DECREMENT_PRINTER_SHEET) {
    const { printer } = store.getState()
    localStorage.setItem('printerTraySheetsLeft', printer.traySheets)
    localStorage.setItem('printerInkSheetsLeft', printer.inkSheets)
    localStorage.setItem('printerTotalSheetsLeft', printer.totalSheets)
  }
  if (action.type === RESET_TRAY_SHEETS) {
    const { printer } = store.getState()
    localStorage.setItem('printerTraySheetsLeft', printer.traySheets)
  }

  if (action.type === RESET_INK_SHEETS) {
    const { printer } = store.getState()
    localStorage.setItem('printerInkSheetsLeft', printer.inkSheets)
  }

  return result
}

export default saveToLocalStorage
