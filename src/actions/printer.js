export const SET_CURRENT_PRINTER_SHEETS = 'SET_CURRENT_PRINTER_SHEETS'
export const SET_CURRENT_INK_SHEETS = 'SET_CURRENT_INK_SHEETS'
export const SET_TOTAL_SHEETS = 'SET_TOTAL_SHEETS'
export const DECREMENT_PRINTER_SHEET = 'DECREMENT_PRINTER_SHEET'
export const RESET_TRAY_SHEETS = 'RESET_TRAY_SHEETS'
export const RESET_INK_SHEETS = 'RESET_INK_SHEETS'
// Add Action String Constant Here (do not delete this line)

export const setCurrentPrinterSheets = (data) => ({
  type: SET_CURRENT_PRINTER_SHEETS,
  data
})

export const setCurrentInkSheets = (data) => ({
  type: SET_CURRENT_INK_SHEETS,
  data
})

export const setTotalSheets = (data) => ({
  type: SET_TOTAL_SHEETS,
  data
})

export const decrementPrinterSheet = (data) => ({
  type: DECREMENT_PRINTER_SHEET,
  data
})

export const resetTraySheets = (data) => ({
  type: RESET_TRAY_SHEETS,
  data
})

export const resetInkSheets = (data) => ({
  type: RESET_INK_SHEETS,
  data
})

// Add Action Creator Here (do not delete this line)
