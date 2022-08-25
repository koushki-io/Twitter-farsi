import React from 'react'
import styles from "./tweet.module.scss"
import profil from '../../images/Profile1.jpg'
import userImage from '../../images/user.png'
import { Favorite, Loop } from '@mui/icons-material'
import { useDispatch} from 'react-redux'
import { renderTweet } from '../helper/renderTweet'
import { reTweetAction } from '../redux/action'



const TiweeetList = ({TweetList}) => {
 const dispatch= useDispatch()
const reTweetHandler=(text)=>{
  dispatch(reTweetAction(text))
}
  const getimage=(image)=>{
    if(image){
        return image
    }else{
      return userImage
    }
  }
  return (
    <div className={styles.TiweeetList}>

      {TweetList.map((tweet,index)=>{
        return <div key={tweet._id} className={styles.Item}>
        <div className={styles.Profile}>
          <img src={getimage(tweet.user.image)} alt="profile" />
            <div>
            <span className={styles.name}>{tweet.user.name}</span>
          <span className={styles.email}>{tweet.user.username}</span>
            </div>
        </div>
        <div className={styles.Content}>
         <p dangerouslySetInnerHTML={renderTweet(tweet.text)}></p>
        
        </div>
        <div className={styles.Box}>
          <span>{tweet.likes}</span>
          <Favorite className={styles.HeartIcon}/>
          <Loop className={styles.Loop} onClick={()=>reTweetHandler(tweet.text)}  />
                    </div>

        </div>
      })}

          




    </div>
  )
}

export default TiweeetList