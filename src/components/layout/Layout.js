import React from 'react'
import styles from './layout.module.scss'
import RightSidebar from '../rightSidebar/RightSidebar'
import LeftSidebar from '../leftSidebar/LeftSidebar'



const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
    <div className={styles.RightSidebare}>
    <RightSidebar/>
      </div>
    <div className={styles.MainPart}>
    
        {children}
    
      </div>
    <div className={styles.LeftSidebar}>
    <LeftSidebar/>
      </div>


   


     
  
    

    </div>
  )
}

export default Layout