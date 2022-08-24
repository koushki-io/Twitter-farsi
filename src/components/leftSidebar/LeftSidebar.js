import React from 'react'
import styles from './leftSide.module.scss'
import profil from '../../images/Profile1.jpg'
import Xiaomi from '../../images/Xiaomi.jpg'
import Samsung  from '../../images/Samsung.jpg'
import BillGates from '../../images/BillGates.jpg'
import Mike_IMC from '../../images/Mike_IMC.jpg'
import Shirley_IMC from '../../images/Shirley_IMC.jpg'
import { ButtonBase, Menu, MenuItem } from '@mui/material'
import { Logout,Collections} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logOutAction, UploadPhotoAction } from '../redux/action'
import { useSelector } from 'react-redux'
import ProfileUser from "../../images/user.png"
import {notify} from "../pages/auth/Alert/tost"
import { useEffect } from 'react'





const User=[
    {name: "Xiaomi", image:Xiaomi  , email:"@Xiaomi" },
    {name: "Samsung", image:Samsung  , email:"@Samsung" },
    {name: "BillGates", image:BillGates  , email:"@BillGates" },
    {name: "Mike_IMC", image:Mike_IMC  , email:"@Mike_IMC" },
    {name: "Shirley_IMC", image:Shirley_IMC  , email:"@Shirley_IMC" },
]

const LeftSidebar = () => {
    const [ancherMenu, setancherMenu] = useState()
    const [imageFile, setimageFile] = useState()
    const [imagePath, setimagePath] = useState(false)
    const{user}= useSelector(x=>x.getSignUp)
    const {photo}= useSelector(x=>x.getPhoto)

    
const disptch =useDispatch()
        const MenuHandler=(e)=>{
            if (ancherMenu) {
                
                setancherMenu(null)
            }else{
                setancherMenu(e.currentTarget)
            }
        }
        const logOutHandler=()=>{
            disptch(logOutAction(navigate))
        }
   
    const navigate= useNavigate();

    const getImage=()=>{
        if(imagePath){
            return imagePath
        }else if(photo){
            return photo
        } else{
            return ProfileUser
        }
    }

    const changeAvatarHandler=(e)=>{
           if(e.target.files && e.target.files.length > 0){
            setimageFile(e.target.files[0])

            const render =new FileReader();
            render.onload=(e)=>{
                setimagePath(e.target.result)

            }
            render.readAsDataURL(e.target.files[0])
            const formData=new FormData();
            formData.append("image",e.target.files[0])
            disptch(UploadPhotoAction(formData,notify,setimagePath))

           }
    }
    
  return (
    <div className={styles.LeftSidebar}>
        <div 
        onClick={MenuHandler}
        className={styles.profile}>
            <div className={styles.user}>
            <span className={styles.name}>{user.name}</span>
            <span className={styles.username}>{user.username}</span>

            </div>
            <img src={getImage()} alt="profile" />
        </div>
        
        <div className={styles.Content}>
            <div className={styles.Title}>
                
            <h4>بهترین خبرنگاران</h4>
            </div>

                    {User.map((item,index)=>{
                        return <ButtonBase onClick={()=>{
                            navigate(`/users`)
                        }}
                        className={styles.item} key={index}>
                        <img src={item.image} alt="profile" />
                        <div>
                            <h4>{item.name}</h4>
                            <span>{item.email}</span>
                        </div>
                        
        
                    </ButtonBase>
                  
                    })}
            
        </div>
        <Menu
        open={Boolean(ancherMenu)} onClose={()=>setancherMenu(null)} anchorEl={ancherMenu}>
                    <MenuItem className={styles.MenuItem} >
                        <label htmlFor="file">
                         <span>ویرایش عکس پروفایل</span><Collections className={styles.icon}/>
                         </label>
                         <input type="file" id='file' style={{display:"none"}} onChange={changeAvatarHandler}/>
                     </MenuItem>
                    <MenuItem className={styles.MenuItem} onClick={logOutHandler}> <span>خروج</span><Logout className={styles.icon}/> </MenuItem>

        </Menu>
    </div>
  )
}

export default LeftSidebar