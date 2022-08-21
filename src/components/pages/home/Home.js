import { Home, Photo } from '@mui/icons-material'
import React from 'react'
import styles from './main.module.scss'
import profil from '../../../images/Profile1.jpg'
import TiweeetList from '../../tiweetList/TweetList'


const MyHome = () => {
  return (
    <div className={styles.Main}>

        <div className={styles.Topbar}>
        <div className={styles.home}>
        <Home className={styles.icon}/>
                <span>خانه</span>
            </div>       
        </div>
        <div className={styles.topbarBottom}>
            <div className={styles.Profile}>
                <img src={profil} alt="profile" />
                <input type="text" placeholder='توییت کن ...' />
            </div>
            <div className={styles.twitt}>
                <Photo className={styles.icon}/>
                <button>توییت</button>
            </div>
        </div>

        
            <TiweeetList/>
      
    </div>
  )
}

export default MyHome