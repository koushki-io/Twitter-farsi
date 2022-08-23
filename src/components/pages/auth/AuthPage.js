import styles from './auth.module.scss'
import React,{useState} from 'react'
import { Paper, Tab, Tabs } from '@mui/material'
import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"

import 'react-toastify/dist/ReactToastify.css';

const LOGIN_TAB_VALUE= 1
const SIGNUP_TAB_VALUE= 2

const AuthPage = () => {
    const [value, setvalue] = useState(LOGIN_TAB_VALUE)

    const handleChange=(e,newValue)=>{
        setvalue(newValue)
    }
  return (<div className={styles.container}>
    
    <Paper 
    className={styles.paper}
    
    square>
        <h4>خوش آمدید به توییتر ما</h4>
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
  >
    <Tab className={styles.tab} label="ورود"  value={LOGIN_TAB_VALUE}/>
    <Tab className={styles.tab} label='ثبت نام' value={SIGNUP_TAB_VALUE}/>
  </Tabs>

  {value === SIGNUP_TAB_VALUE  
  &&
<SignUp/>
 }
  {value === LOGIN_TAB_VALUE 
  && 
  <Login/>
   }

</Paper>

</div>
  )
}

export default AuthPage