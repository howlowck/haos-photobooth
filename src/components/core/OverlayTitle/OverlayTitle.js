import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './OverlayTitle.scss'

const OverlayTitle = ({ className, children }) => (
  <div className={classNames([styles.base, className])}>
    {children}
  </div>
)

OverlayTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
}

export default OverlayTitle
