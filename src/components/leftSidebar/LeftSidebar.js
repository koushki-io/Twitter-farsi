import React from 'react'
import styles from './leftSide.module.scss'
import profil from '../../images/Profile1.jpg'
import Xiaomi from '../../images/Xiaomi.jpg'
import Samsung  from '../../images/Samsung.jpg'
import BillGates from '../../images/BillGates.jpg'
import Mike_IMC from '../../images/Mike_IMC.jpg'
import Shirley_IMC from '../../images/Shirley_IMC.jpg'
import { ButtonBase } from '@mui/material'

const user=[
    {name: "Xiaomi", image:Xiaomi  , email:"@Xiaomi" },
    {name: "Samsung", image:Samsung  , email:"@Samsung" },
    {name: "BillGates", image:BillGates  , email:"@BillGates" },
    {name: "Mike_IMC", image:Mike_IMC  , email:"@Mike_IMC" },
    {name: "Shirley_IMC", image:Shirley_IMC  , email:"@Shirley_IMC" },
]

const LeftSidebar = () => {
    
  return (
    <div className={styles.LeftSidebar}>
        <div className={styles.profile}>
            <span>alireza.polad</span>
            <img src={profil} alt="profile" />
        </div>
        
        <div className={styles.Content}>
            <div className={styles.Title}>
            <h4>بهترین خبرنگاران</h4>
            </div>

                    {user.map((item,index)=>{
                        return <ButtonBase className={styles.item} key={index}>
                        <img src={item.image} alt="profile" />
                        <div>
                            <h4>{item.name}</h4>
                            <span>{item.email}</span>
                        </div>
        
                    </ButtonBase>
                    })}
            
        </div>
    </div>
  )
}

export default LeftSidebar