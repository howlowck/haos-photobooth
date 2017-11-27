import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './CountdownOverlay.scss'

class CountdownOverlay extends Component {
  componentDidMount () {

  }
  render () {
    const { className, visible, seconds, message, onComplete, onChangePerSecond } = this.props

    if (seconds === 1) {
      setTimeout(onComplete, 1000)
    }

    if (seconds > 0 && visible) {
      setTimeout(onChangePerSecond, 1000)
    }

    return (
      <div className={classNames([styles.base, className, visible ? '' : 'hidden'])}>
        <p className={'font-fancy ' + styles.message}>{message}</p>
        <p className={styles.seconds}>{seconds}</p>
      </div>
    )
  }
}

CountdownOverlay.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  seconds: PropTypes.number,
  message: PropTypes.string,
  onComplete: PropTypes.func,
  onChangePerSecond: PropTypes.func
}

export default CountdownOverlay
