import { Home, Photo } from '@mui/icons-material'
import React from 'react'
import styles from './main.module.scss'
import profil from '../../../images/Profile1.jpg'
import Samsung from '../../../images/Samsung.jpg'
import TiweeetList from '../../tiweetList/TweetList'
import Header from '../../header/Header'

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
  return (
    <div className={styles.Main}>

        <Header Icon={Home} Title='خانه'/>

        <div className={styles.topbarBottom}>
            <div className={styles.Profile}>
                <img  src={profil} alt="profile" />
                <div className={styles.input} contentEditable={true} data-placeholder='edit me' ></div>
            </div>
            <div className={styles.twitt}>
                <Photo className={styles.icon}/>
                <button>توییت</button>
            </div>
        </div>

        
            <TiweeetList TweetList={TweetList}/>
      
    </div>
  )
}

export default MyHome