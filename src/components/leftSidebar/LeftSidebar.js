import React from 'react'
import styles from './leftSide.module.scss'
import profil from '../../images/Profile1.jpg'
import Xiaomi from '../../images/Xiaomi.jpg'
import Samsung  from '../../images/Samsung.jpg'
import BillGates from '../../images/BillGates.jpg'
import Mike_IMC from '../../images/Mike_IMC.jpg'
import Shirley_IMC from '../../images/Shirley_IMC.jpg'

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

            <div className={styles.item}>
                <img src={Xiaomi} alt="profile" />
                <div>
                    <h4>Xiaomi</h4>
                    <span>@Xiaomi</span>
                </div>
            </div>

            <div className={styles.item}>
                <img src={Samsung} alt="profile" />
                <div>
                    <h4>Samsung</h4>
                    <span>@Samsung</span>
                </div>
            </div>

            <div className={styles.item}>
                <img src={BillGates} alt="profile" />
                <div>
                    <h4>BillGates</h4>
                    <span>@BillGates</span>
                </div>
            </div>

            <div className={styles.item}>
                <img src={Mike_IMC} alt="profile" />
                <div>
                    <h4>Mike_IMC</h4>
                    <span>@Mike_IMC</span>
                </div>
            </div>

            <div className={styles.item}>
                <img src={Shirley_IMC} alt="profile" />
                <div>
                    <h4>Shirley_IMC</h4>
                    <span>@Shirley_IMC</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LeftSidebar