import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './PrinterInfo.scss'
import Button from 'components/forms/Button'

const getConnectedEl = (connected, retry) => {
  if (!connected) {
    return (
      <div>
        <i className='fa fa-times fail' />
        <br /><br />
        <Button onClick={retry}>Try Again</Button>
      </div>
    )
  }
  return <i className='fa fa-check success' />
}

const getTrayEl = (trayLeft, resetTray) => {
  if (trayLeft < 1) {
    return (<div className={styles.noTray}>
      <i className='fa fa-times fail' />
      <p>Oh no! There is no more paper in the printer.</p> <br />
      <p>Please open a pack and put the paper in the tray. Glossy side up.</p>
      <p>If you need help, please see a helper nearby</p>
      <Button size='large' onClick={resetTray}>I Added the Paper</Button>

    </div>)
  }
  return <i className='fa fa-check success' />
}

const getInkEl = (inkLeft, resetInk) => {
  if (inkLeft < 1) {
    return (<div className={styles.noTray}>
      <i className='fa fa-times fail' />
      <p>Oh no! You also have to change the ink cartridge</p> <br />
      <p>Open the right side of the printer, and slide a new cartridge in.</p>
      <p>If you need help, please see a helper nearby</p>
      <Button size='large' onClick={resetInk}>I changed the cartridge</Button>
    </div>)
  }
  return <i className='fa fa-check success' />
}

class PrinterInfo extends Component {
  render () {
    const { className, connected, traySheets, inkSheets,
      retryConnection, resetTraySheets, resetInkSheets } = this.props

    return (
      <div className={classNames([styles.base, className])}>
        <div className={styles.connected}>
          <h3>Printer Connected</h3>
          {getConnectedEl(connected, retryConnection)}
        </div>
        <div className={styles.tray}>
          <h3>Paper in Tray</h3>
          {getTrayEl(traySheets, resetTraySheets)}
        </div>
        <div className={styles.ink}>
          <h3>Printer Ink</h3>
          {getInkEl(inkSheets, resetInkSheets)}
        </div>
      </div>
    )
  }
}

PrinterInfo.propTypes = {
  className: PropTypes.string,
  connected: PropTypes.bool,
  traySheets: PropTypes.number,
  inkSheets: PropTypes.number,
  retryConnection: PropTypes.func,
  resetTraySheets: PropTypes.func,
  resetInkSheets: PropTypes.func
}

export default PrinterInfo
