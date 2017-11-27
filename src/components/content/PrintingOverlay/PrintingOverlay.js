/* global location */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './PrintingOverlay.scss'
import Overlay from 'components/core/Overlay'
import OverlayTitle from 'components/core/OverlayTitle'
import Button from 'components/forms/Button'

class PrintingOverlay extends Component {
  render () {
    const { className, visible } = this.props
    if (!visible) return <div />
    return (
      <Overlay className={classNames([styles.base, className])}>
        <OverlayTitle className='font-fancy'>Pick up your photo now</OverlayTitle>
        <p style={{ fontSize: 40 }}>(It takes a moment to print and Don't forget to cut it)</p>
        <br /><br /><br /><br /><br /><br />
        <Button size='x-large' onClick={() => location.reload()}>OK!</Button>
      </Overlay>
    )
  }
}

PrintingOverlay.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool
}

export default PrintingOverlay
