import { START_SESSION } from 'actions/session'
import { resetCountdown } from 'actions/countdown'

export default (action$, state, dispatch) => action$
  .ofType(START_SESSION)
  .do(() => {
    console.log('started Session!')
  })
  .mapTo(resetCountdown())
