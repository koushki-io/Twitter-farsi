import React from 'react'
import styles from "./tweet.module.scss"
import profil from '../../images/Profile1.jpg'
import { Favorite, Loop } from '@mui/icons-material'
import { renderTweet } from '../helper/renderTweet'



const TiweeetList = ({TweetList}) => {
  return (
    <div className={styles.TiweeetList}>

      {TweetList.map((tweet,index)=>{
        return <div key={index} className={styles.Item}>
        <div className={styles.Profile}>
          <img src={tweet.sender.image} alt="profile" />
            <div>
            <span className={styles.name}>{tweet.sender.name}</span>
          <span className={styles.email}>{tweet.sender.id}</span>
            </div>
        </div>
        <div className={styles.Content}>
         <p dangerouslySetInnerHTML={renderTweet(tweet.text)}></p>
        
        </div>
        <div className={styles.Box}>
          <span>{tweet.like}</span>
          <Favorite className={styles.HeartIcon}/>
          <Loop className={styles.Loop} />
                    </div>

        </div>
      })}

          




    </div>
  )
}

export default TiweeetList