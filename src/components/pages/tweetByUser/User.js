import {  Person } from '@mui/icons-material'
import React from 'react'
import styles from './user.module.scss'
import TiweeetList from '../../tiweetList/TweetList'
import Header from '../../header/Header'
import { TweetList } from '../home/Home'

const User = () => {
  return (
    <div className={styles.Main}>

        <Header Icon={Person} Title='مهدی کوشکی'/>

        
            <TiweeetList TweetList={TweetList}/>
      
    </div>
  )
}

export default User