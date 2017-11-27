import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './PrinterOverlay.scss'
import Overlay from 'components/core/Overlay'
import PhotoStrip from 'components/content/PhotoStrip'
import Button from 'components/forms/Button'
import PrinterInfo from 'components/content/PrinterInfo'

class PrinterOverlay extends Component {
  getPrintButton (print) {
    const { printerReady } = this.props
    if (!printerReady) {
      return <Button size='x-large' type='danger' disabled>Can't Print yet</Button>
    }
    return <Button onClick={print} size='x-large'>Print Now!</Button>
  }
  render () {
    const { className, visible, onRestart, print, person } = this.props
    if (!visible) return <div />
    return (
      <Overlay className={classNames([styles.base, className])}>
        <h1 className={'font-fancy ' + styles.title}>{`Print this ${person.name || ''}`}</h1>
        <br />
        <PrinterInfo />
        <br /><br />
        {this.getPrintButton(print)}
        <br /><br />
        <Button disabled={false} type='danger' onClick={onRestart} size='large'>Restart (without printing)</Button>
        <PhotoStrip className={styles.strip} />
      </Overlay>
    )
  }
}

PrinterOverlay.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool,
  printerReady: PropTypes.bool,
  onRestart: PropTypes.func,
  print: PropTypes.func
}

export default PrinterOverlay
