import React,{useEffect} from 'react'
import styles from './rightSide.module.scss'
import {Twitter,Tag} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { AllHashTagsAction } from '../redux/action';
import {notify} from '../pages/auth/Alert/tost'


const RightSidebar = () => {
   const {hashtags} = useSelector(x=>x.getHashtags)
   const {tweets}= useSelector(x=>x.getTweets)
 const dispatch= useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
     dispatch(AllHashTagsAction(notify))
    }, [tweets])


  return (
    <div className={styles.RightSidebar}>
      <div 
      onClick={()=>{
        navigate("/home")
      }}
       className={styles.topbar}>
          <Twitter className={styles.icon}/>
        <h3>توییتر فارسی</h3>

      </div>

     

      <div className={styles.Conetent}>
        <div className={styles.ConetentTitel}>
          <h3>داغ ترین هشتگ ها</h3>
        </div>

        {hashtags.map((item)=>{
        return <div 
        onClick={()=>{
          navigate('/hashtags')
        }}
        key={item._id} className={styles.ConetentItem}>
        <Tag className={styles.tag}/>
        <span>{item.text}</span>
      </div>
      })}

      </div>
    </div>
  )
}

export default RightSidebar