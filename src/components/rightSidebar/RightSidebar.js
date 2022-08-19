import React from 'react'
import styles from './rightSide.module.scss'
import {Twitter,Tag} from '@mui/icons-material';

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

        <div className={styles.ConetentItem}>
          <Tag className={styles.tag}/>
          <span>پرچم_دار_جدید</span>
        </div>

        <div className={styles.ConetentItem}>
          <Tag className={styles.tag}/>
          <span>کرونا_ویروس</span>
        </div>

        <div className={styles.ConetentItem}>
          <Tag className={styles.tag}/>
          <span>ویروس_لامصب</span>
        </div>


        
        <div className={styles.ConetentItem}>
          <Tag className={styles.tag}/>
          <span>پرچم_دار_جدید</span>
        </div>

        <div className={styles.ConetentItem}>
          <Tag className={styles.tag}/>
          <span>کرونا_ویروس</span>
        </div>

        <div className={styles.ConetentItem}>
          <Tag className={styles.tag}/>
          <span>ویروس_لامصب</span>
        </div>

      </div>
    </div>
  )
}

export default RightSidebar