import { Tag } from '@mui/icons-material'
import React from 'react'
import styles from './hashtag.module.scss'
import profil from '../../../images/Profile1.jpg'
import TiweeetList from '../../tiweetList/TweetList'


const Hashtag = () => {
  return (

    <div className={styles.Main}>

        <div className={styles.Topbar}>
          
        <div className={styles.ConetentItem}>
        <Tag className={styles.tag}/>
        <span>کرونا ویروس</span>
      </div>      

        </div>

       
        
            <TiweeetList/>
      
    </div>
  )
}

export default Hashtag