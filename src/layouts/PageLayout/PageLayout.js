import React from 'react'
// import { IndexLink } from 'react-router'
import PropTypes from 'prop-types'
import styles from './PageLayout.scss'

// const getNav = () => {
//   return (
//     <nav className='nav'>
//       <div className='nav-left'>
//         <IndexLink to='/' activeClassName={styles['nav-item-active']}>Home</IndexLink>
//       </div>
//       <div className='nav-center'>
//         <h1>Photobooth</h1>
//       </div>
//       <div className='nav-right' />
//     </nav>
//   )
// }

export const PageLayout = ({ children }) => (
  <div className={styles.viewport}>
    {children}
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
