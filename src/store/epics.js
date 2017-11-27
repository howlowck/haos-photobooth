import { combineEpics } from 'redux-observable'
import dslrEpic from 'epics/dslr'
import pdfEpic from 'epics/pdf'
import webcamEpic from 'epics/webcam'
import sessionEpic from 'epics/session'
import checkPrinter from 'epics/checkPrinter'
import wipePhotos from 'epics/wipePhotos'
import detectNext from 'epics/detectNext'

export const rootEpic = (imageInput) => {
  if (imageInput === 'webcam') {
    return combineEpics(
      webcamEpic,
      pdfEpic,
      sessionEpic,
      checkPrinter,
      wipePhotos,
      detectNext
    )
  }

  return combineEpics(
    dslrEpic,
    pdfEpic,
    sessionEpic,
    checkPrinter,
    wipePhotos,
    detectNext
  )
}
