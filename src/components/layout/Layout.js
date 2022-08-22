import React from 'react'
import styles from './layout.module.scss'
import RightSidebar from '../rightSidebar/RightSidebar'
import MyHome from '../pages/home/Home'
import LeftSidebar from '../leftSidebar/LeftSidebar'
import Hashtag from '../pages/tweetByHashtag/Hashtag'
import User from '../pages/tweetByUser/User'

const Layout = () => {
  return (
    <div className={styles.layout}>
    <div className={styles.RightSidebare}>
    <RightSidebar/>
      </div>
    <div className={styles.MainPart}>
    
    <MyHome/>
    {/* <Hashtag/> */}
    {/* <User/> */}
      </div>
    <div className={styles.LeftSidebar}>
    <LeftSidebar/>
      </div>


   


     
  
    

    </div>
  )
}

export default Layout