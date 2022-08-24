import { Home, Photo } from '@mui/icons-material'
import React,{useEffect, useRef, useState} from 'react'
import styles from './main.module.scss'
import profil from '../../../images/Profile1.jpg'
import userprofile from '../../../images/user.png'
import Samsung from '../../../images/Samsung.jpg'
import TiweeetList from '../../tiweetList/TweetList'
import Header from '../../header/Header'
import { renderTweetInput } from '../../helper/renderTweet'
import { getAllTweetAction, newTweetAction } from '../../redux/action'
import { useDispatch , useSelector } from 'react-redux'
import { notify } from '../auth/Alert/tost'



export const TweetList=[
  {
    sender:{
      name: "Samsong",
      id: "@samsung",
      image: profil
    },
    text: " بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کس  خورشت #کرفس درست کنه ",
    like:5
  }
  ,
  {
    sender:{
      name: "سیامک کوه دره",
      id: "@ُsiamakkoh",
      image: Samsung
    },
    text: " دوچرخه هایی که در تصویر دیده م￾ شوند، همان #دوچرخه _های نارنج￾ معروف￾ است که در طرح #آسمان_آبی_زمین_پاک مدیریت شهری قبل با ارائه کارت مل￾ در تمام مناطق شهر تهران قابل.دسترس￾ و اجاره ساعت￾ از خانه های دوچرخه بودند",
    like:65
  },
  {
    sender:{
      name: "Samsong",
      id: "@samsung",
      image: profil
    },
    text: " بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کس  خورشت #کرفس درست کنه ",
    like:172
  }
  ,
  {
    sender:{
      name: "سیامک کوه دره",
      id: "@ُsiamakkoh",
      image: Samsung
    },
    text: " دوچرخه هایی که در تصویر دیده م￾ شوند، همان #دوچرخه _های نارنج￾ معروف￾ است که در طرح #آسمان_آبی_زمین_پاک مدیریت شهری قبل با ارائه کارت مل￾ در تمام مناطق شهر تهران قابل.دسترس￾ و اجاره ساعت￾ از خانه های دوچرخه بودند",
    like:45
  },
  {
    sender:{
      name: "Samsong",
      id: "@samsung",
      image: profil
    },
    text: " بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای #صبحانه کس  خورشت #کرفس درست کنه ",
    like:5
  }
  ,
  {
    sender:{
      name: "سیامک کوه دره",
      id: "@ُsiamakkoh",
      image: Samsung
    },
    text: " دوچرخه هایی که در تصویر دیده م￾ شوند، همان #دوچرخه _های نارنج￾ معروف￾ است که در طرح #آسمان_آبی_زمین_پاک مدیریت شهری قبل با ارائه کارت مل￾ در تمام مناطق شهر تهران قابل.دسترس￾ و اجاره ساعت￾ از خانه های دوچرخه بودند",
    like:45
  }
]

const MyHome = () => {
    const dispatch= useDispatch();
    const {photo}=useSelector(x=>x.getPhoto)
    const {tweets,loading}= useSelector(x=>x.getTweets)
    const {user}= useSelector(x=>x.getSignUp)
    
  // const input=useRef();

    const getimage=()=>{
    
      
       if(photo){
            return photo
          }
          else{
                return userprofile
          }
    }
  
  const [tweet, settweet] = useState()
  useEffect(() => {
    dispatch(getAllTweetAction(notify))
  //  input.current.addEventListener("input", function(e) {
  //   console.log(e.target.innerText);

  // }, false);
  }, [])

  const tweetHandler=()=>{
    dispatch(newTweetAction())
  }
  
  return (
    <div className={styles.Main}>

        <Header Icon={Home} Title='خانه'/>

        <div className={styles.topbarBottom}>
            <div className={styles.Profile}>
                <img  src={getimage()} alt="profile" />
                <div 
                //  dangerouslySetInnerHTML={tweet} 
                 ref={input} className={styles.input} 
                 contentEditable={true} data-placeholder='توییت کن' ></div>
            </div>
            <div className={styles.twitt}>
                <Photo className={styles.icon}/>
                <button
                onClick={tweetHandler}
                >توییت</button>
            </div>
        </div>
                {tweets &&  
            <TiweeetList TweetList={tweets}/>
                
                }
        
      
    </div>
  )
}

export default MyHome