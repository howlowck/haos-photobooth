/* global localStorage */

import { START_SESSION } from 'actions/session'
import { Observable } from 'rxjs'
import { setCurrentPrinterSheets, setCurrentInkSheets, setTotalSheets } from 'actions/printer'

export default (action$, state, dispatch) => action$
  .ofType(START_SESSION)
  .flatMap(action => {
    let sheetsLeft = +localStorage.getItem('printerTraySheetsLeft')
    let inkSheetsLeft = +localStorage.getItem('printerInkSheetsLeft')
    let totalSheetsLeft = +localStorage.getItem('printerTotalSheetsLeft')
    return Observable.concat(
      Observable.of({ type: 'socket/checkPrinter' }),
      Observable.of(setCurrentPrinterSheets(sheetsLeft)),
      Observable.of(setCurrentInkSheets(inkSheetsLeft)),
      Observable.of(setTotalSheets(totalSheetsLeft))
    )
  })
