/* global location */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import CameraFeed from 'components/forms/CameraFeed'
import PhotoStrip from 'components/content/PhotoStrip'
import PrinterOverlay from 'components/content/PrinterOverlay'
import Overlay from 'components/core/Overlay'
import OverlayTitle from 'components/core/OverlayTitle'
import CountdownOverlay from 'components/content/CountdownOverlay'
import Button from 'components/forms/Button'
import styles from './HomePage.scss'
import PrintingOverlay from 'components/content/PrintingOverlay'

const getStartButton = (sessionStarted, onClick) => {
  if (!sessionStarted) {
    return (<Overlay>
      <OverlayTitle className='font-fancy'>Dev Crew Photobooth</OverlayTitle>
      <Button className={styles.startButton} size='x-large' onClick={onClick}>Start!</Button>
    </Overlay>)
  }
}

class HomePage extends Component {
  render () {
    const { className, sessionStarted, startSession, photoStripVisible } = this.props
    return (
      <div className={classNames([styles.base, className])}>
        {getStartButton(sessionStarted, startSession)}
        <PrinterOverlay />
        <PrintingOverlay />
        <div className={styles.cameraFeed}>
          <CountdownOverlay className={styles.cameraFeedPosition} />
          <CameraFeed enabled width='1333' height='1000' className={styles.cameraFeedPosition} />
        </div>
        <div className={styles.strip}>
          <PhotoStrip visible={photoStripVisible} />
          <Button type='danger' size='large' className={styles.restartButton} onClick={() => location.reload()}>
            Restart Photobooth
          </Button>
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {
  className: PropTypes.string,
  sessionStarted: PropTypes.bool,
  startSession: PropTypes.func,
  photoStripVisible: PropTypes.bool
}

export default HomePage
