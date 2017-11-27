export const EXPORT_TO_PDF = 'EXPORT_TO_PDF'
export const SHOW_PRINTER_OVERLAY = 'SHOW_PRINTER_OVERLAY'
// Add Action String Constant Here (do not delete this line)

export const exportToPdf = (data) => ({
  type: EXPORT_TO_PDF,
  data
})

export const showPrinterOverlay = (data) => ({
  type: SHOW_PRINTER_OVERLAY,
  data
})

// Add Action Creator Here (do not delete this line)
