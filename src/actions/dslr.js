export const START_DSLR_SEQUENCE = 'START_DSLR_SEQUENCE'
export const END_DSLR_SEQUENCE = 'END_DSLR_SEQUENCE'
// Add Action String Constant Here (do not delete this line)

export const startDslrSequence = (data) => ({
  type: START_DSLR_SEQUENCE,
  data
})

export const endDslrSequence = (data) => ({
  type: END_DSLR_SEQUENCE,
  data
})

// Add Action Creator Here (do not delete this line)
