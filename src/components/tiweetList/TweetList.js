import React from 'react'
import styles from "./tweet.module.scss"
import profil from '../../images/Profile1.jpg'
import { Favorite, Loop } from '@mui/icons-material'


const TiweeetList = () => {
  return (
    <div className={styles.TiweeetList}>

          <div className={styles.Item}>

          <div className={styles.Profile}>
            <img src={profil} alt="profile" />
              <div>
              <span className={styles.name}>محمد یاسری</span>
            <span className={styles.email}>mohammad.yasery@</span>
              </div>
            
            
            
          </div>
          <div className={styles.Content}>
            <p>بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای  <span>#صبحانه </span>  
خورشت <span>#کرفس</span>  درست کنه</p>
            <p>بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای  <span>#صبحانه </span>  
خورشت <span>#کرفس</span>  درست کنه</p>
            <p>بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای  <span>#صبحانه </span>  
خورشت <span>#کرفس</span>  درست کنه</p>
            <p>بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای  <span>#صبحانه </span>  
خورشت <span>#کرفس</span>  درست کنه</p>
          </div>
          <div className={styles.Box}>
            <span>172</span>
            <Favorite className={styles.HeartIcon}/>
            <Loop className={styles.Loop} />
                      </div>

          </div>



          <div className={styles.Item}>

          <div className={styles.Profile}>
            <img src={profil} alt="profile" />
              <div>
              <span className={styles.name}>محمد یاسری</span>
            <span className={styles.email}>mohammad.yasery@</span>
              </div>
            
            
            
          </div>
          <div className={styles.Content}>
            <p>بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای  <span>#صبحانه </span>  
خورشت <span>#کرفس</span>  درست کنه</p>
          </div>
          <div className={styles.Box}>
            <span>172</span>
            <Favorite className={styles.HeartIcon}/>
            <Loop className={styles.Loop} />
                      </div>

          </div>





          <div className={styles.Item}>

          <div className={styles.Profile}>
            <img src={profil} alt="profile" />
              <div>
              <span className={styles.name}>محمد یاسری</span>
            <span className={styles.email}>mohammad.yasery@</span>
              </div>
            
            
            
          </div>
          <div className={styles.Content}>
            <p>بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای  <span>#صبحانه </span>  
خورشت <span>#کرفس</span>  درست کنه</p>
          </div>
          <div className={styles.Box}>
            <span>172</span>
            <Favorite className={styles.HeartIcon}/>
            <Loop className={styles.Loop} />
                      </div>

          </div>






          <div className={styles.Item}>

          <div className={styles.Profile}>
            <img src={profil} alt="profile" />
              <div>
              <span className={styles.name}>محمد یاسری</span>
            <span className={styles.email}>mohammad.yasery@</span>
              </div>
            
            
            
          </div>
          <div className={styles.Content}>
            <p>بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای  <span>#صبحانه </span>  
خورشت <span>#کرفس</span>  درست کنه</p>
          </div>
          <div className={styles.Box}>
            <span>172</span>
            <Favorite className={styles.HeartIcon}/>
            <Loop className={styles.Loop} />
                      </div>

          </div>





          <div className={styles.Item}>

          <div className={styles.Profile}>
            <img src={profil} alt="profile" />
              <div>
              <span className={styles.name}>محمد یاسری</span>
            <span className={styles.email}>mohammad.yasery@</span>
              </div>
            
            
            
          </div>
          <div className={styles.Content}>
            <p>بهترین وعده غذایی با اختلاف زیادی صبحانست چون ممکن نیست برای  <span>#صبحانه </span>  
خورشت <span>#کرفس</span>  درست کنه</p>
          </div>
          <div className={styles.Box}>
            <span>172</span>
            <Favorite className={styles.HeartIcon}/>
            <Loop className={styles.Loop} />
                      </div>

          </div>

    </div>
  )
}

export default TiweeetList