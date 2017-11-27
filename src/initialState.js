/* global __DEV__ */

let initialState = {}

initialState = {
  countdownTimer: {
    duration: 5,
    secondsLeft: 3,
    message: 'Be Goofy',
    visible: false
  },
  photoSession: {
    started: false
  },
  photos: [
      // {
      //   triggered: true,
      //   path: '/photos/photo1.JPG'
      // },
      // {
      //   triggered: true,
      //   path: '/photos/photo2.JPG'
      // }
  ]
}

export default initialState
