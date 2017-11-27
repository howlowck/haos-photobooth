import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './PhotoStrip.scss'

const getEl = (loading, photo) => {
  if (loading) {
    return <p className={styles.spinner}><span><i className='fa fa-spinner fa-spin' /> Loading</span></p>
  }
  return <img src={photo} />
}

const PhotoStrip = ({
  className,
  logo,
  photoOne, loadingOne,
  photoTwo, loadingTwo,
  photoThree, loadingThree,
  visible
}) => {
  if (!visible) return <div />

  return (
    <div className={classNames([styles.base, className])}>
      <div className={styles.logo}>
        <img src='logo.jpg' />
      </div>
      <div className={styles.photos}>
        <div className={styles.photo}>
          {getEl(loadingOne, photoOne)}
        </div>
        <div className={styles.photo}>
          {getEl(loadingTwo, photoTwo)}
        </div>
        <div className={styles.photo}>
          {getEl(loadingThree, photoThree)}
        </div>
      </div>
    </div>
  )
}

PhotoStrip.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  photoOne: PropTypes.string,
  photoTwo: PropTypes.string,
  photoThree: PropTypes.string,
  loadingOne: PropTypes.bool,
  loadingTwo: PropTypes.bool,
  loadingThree: PropTypes.bool,
  visible: PropTypes.bool
}

PhotoStrip.defaultProps = {
  loadingOne: false,
  photoOne: '',
  loadingTwo: false,
  photoTwo: '',
  loadingThree: false,
  photoThree: '',
  visible: true
}

export default PhotoStrip
