import React from 'react'
import styles from './layout.module.scss'
import RightSidebar from '../rightSidebar/RightSidebar'
import Main from '../mainPart/Main'

const Layout = () => {
  return (
    <div className={styles.layout}>
   <RightSidebar/>
    <Main/>
     <div className={styles.LeftSidebar}>سایدبار چپ</div>
  
    

    </div>
  )
}

export default Layout