import React from 'react'
import PropTypes from 'prop-types'
import { classNames } from 'support/helpers'
import styles from './Button.scss'

const getSizeClass = (size) => {
  if (size === 'x-large') {
    return styles.xlarge
  }

  if (size === 'normal') {
    return ''
  }

  return `is-${size}`
}

const Button = ({ className, onClick, children, size = 'normal', type = 'primary', disabled = false }) => (
  <button
    className={classNames(['button', `is-${type}`, getSizeClass(size), styles.base, className])}
    disabled={disabled}
    onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large', 'x-large']),
  type: PropTypes.oneOf(['success', 'primary', 'info', 'warning', 'danger'])
}

export default Button
