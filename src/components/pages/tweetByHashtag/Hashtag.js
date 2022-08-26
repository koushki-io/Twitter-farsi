import { Tag } from '@mui/icons-material'
import React, { useEffect } from 'react'
import styles from './hashtag.module.scss'
import profil from '../../../images/Profile1.jpg'
import TiweeetList from '../../tiweetList/TweetList'
import { TweetList } from '../home/Home'
import { useParams } from 'react-router-dom'
import { hashtagIdAction } from '../../redux/action'
import { useDispatch,useSelector } from 'react-redux'
import { notify } from '../auth/Alert/tost'



const Hashtag = () => {
const {hashtagId}=useParams();
const dispatch=useDispatch()
const {hashID} =useSelector(x=>x.getHashId)
useEffect(() => {
 dispatch(hashtagIdAction(hashtagId,notify))
}, [hashtagId])

  return (

    <div className={styles.Hashtag}>

        <div className={styles.Topbar}>
          
        <div className={styles.TopbarConetent}>
        <Tag className={styles.tag}/>
        <span>{hashtagId}</span>
      </div>      

        </div>

       
        
            <TiweeetList TweetList={hashID}/>
      
    </div>
  )
}

export default Hashtag