import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import PhotoStrip from 'components/content/PhotoStrip'
import styles from './PhotoPrintout.scss'

const logo = 'logo.jpg'
const photoOne = '/photos/photo1.JPG'
const photoTwo = '/photos/photo2.JPG'
const photoThree = '/photos/photo3.JPG'

const PhotoPrintout = ({ className }) => (
  <div className={classNames([styles.base, className])}>
    <PhotoStrip logo={logo} photoOne={photoOne} photoTwo={photoTwo} photoThree={photoThree} />
    <PhotoStrip logo={logo} photoOne={photoOne} photoTwo={photoTwo} photoThree={photoThree} />
  </div>
)

PhotoPrintout.propTypes = {
  className: PropTypes.string
}

export default PhotoPrintout
