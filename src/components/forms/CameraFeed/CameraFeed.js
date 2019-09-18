/* global URL */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './CameraFeed.scss'

class CameraFeed extends Component {
  onSuccessGetMedia (stream) {
    this.stream = stream
    const { videoEl } = this
    // const videoSourceUrl = URL.createObjectURL(stream)
    // videoEl.src = videoSourceUrl
    videoEl.srcObject = stream
    videoEl.play()
  }

  startStream () {
    if (!this.stream) {
      navigator.getUserMedia({ video: true, audio: false }, this.onSuccessGetMedia.bind(this), () => {})
    }
  }

  endStream () {
    if (this.stream) {
      this.stream.getVideoTracks()[0].stop()
      delete this.stream
    }
  }

  render () {
    const { className, enabled, width, height } = this.props

    if (!enabled) {
      this.endStream()
    } else {
      this.startStream()
    }
    return (
      <div className={classNames([styles.base, className])}>
        <video
          className={styles.video}
          ref={(video) => { this.videoEl = video }}
          width={width}
          height={height}
          autoPlay
        />
      </div>
    )
  }
}

CameraFeed.propTypes = {
  className: PropTypes.string,
  enabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
}

export default CameraFeed
