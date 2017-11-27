import { resetCountdown } from 'actions/countdown'

export default (action$, store) => {
  return action$
    .ofType('message')
    .filter((action) => action.data.name === 'client/newPhoto')
    .map((action) => {
      if (store.getState().photos.length < 3) {
        return resetCountdown()
      }
      return { type: 'socket/checkPrinter' }
    })
}
