import React from 'react'
import styles from './header.module.scss'

const Header = ({Icon,Title}) => {
  return (
    <div className={styles.Topbar}>
        <div className={styles.home}>
        <Icon className={styles.icon}/>
                <span>{Title}</span>
            </div>       
        </div>
  )
}

export default Header