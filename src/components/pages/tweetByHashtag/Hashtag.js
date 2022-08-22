import { Tag } from '@mui/icons-material'
import React from 'react'
import styles from './hashtag.module.scss'
import profil from '../../../images/Profile1.jpg'
import TiweeetList from '../../tiweetList/TweetList'
import { TweetList } from '../home/Home'



const Hashtag = () => {
  return (

    <div className={styles.Hashtag}>

        <div className={styles.Topbar}>
          
        <div className={styles.TopbarConetent}>
        <Tag className={styles.tag}/>
        <span>کرونا ویروس</span>
      </div>      

        </div>

       
        
            <TiweeetList TweetList={TweetList}/>
      
    </div>
  )
}

export default Hashtag