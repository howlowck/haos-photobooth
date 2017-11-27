import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './Overlay.scss'

class Overlay extends Component {
  render () {
    const { className, children } = this.props

    return (
      <div className={classNames([styles.base, className])}>
        {children}
      </div>
    )
  }
}

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default Overlay
