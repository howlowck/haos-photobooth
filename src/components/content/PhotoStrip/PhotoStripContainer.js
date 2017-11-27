import { connect } from 'react-redux'
import PhotoStrip from './PhotoStrip'
import { get } from 'lodash'

const mapStateToProps = (state, ownProps) => ({
  photoOne: get(state, 'photos[0].path'),
  photoTwo: get(state, 'photos[1].path'),
  photoThree: get(state, 'photos[2].path'),
  loadingOne: get(state, 'photos[0].triggered') && !get(state, 'photos[0].path'),
  loadingTwo: get(state, 'photos[1].triggered') && !get(state, 'photos[1].path'),
  loadingThree: get(state, 'photos[2].triggered') && !get(state, 'photos[2].path'),
  visible: ownProps.visible
})

const mapDispatchToProps = (dispatch) => ({

})

const PhotoStripContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoStrip)

export default PhotoStripContainer
