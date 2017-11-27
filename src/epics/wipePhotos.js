import { START_SESSION } from 'actions/session'

export default (action$, state, dispatch) => action$
  .ofType(START_SESSION)
  .mapTo({ type: 'socket/wipePhotos' })
