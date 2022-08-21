import React from 'react'
import styles from './rightSide.module.scss'
import {Twitter,Tag} from '@mui/icons-material';
const Hashtag=[
  "پرچم_دار_جدید",
  "کرونا_ویروس",
  "سامسونگ",
  "هلو-سامر",
  "پرچم_دار_جدید",
  "کرونا_ویروس",
  "سامسونگ",
  "هلو-سامر",
  
]

const RightSidebar = () => {
  return (
    <div className={styles.RightSidebar}>
      <div className={styles.topbar}>
          <Twitter className={styles.icon}/>
        <h3>توییتر فارسی</h3>

      </div>

     

      <div className={styles.Conetent}>
        <div className={styles.ConetentTitel}>
          <h3>داغ ترین هشتگ ها</h3>
        </div>

        {Hashtag.map(item=>{
        return <div className={styles.ConetentItem}>
        <Tag className={styles.tag}/>
        <span>{item}</span>
      </div>
      })}

      </div>
    </div>
  )
}

export default RightSidebar