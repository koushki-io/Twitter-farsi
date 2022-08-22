import styles from './auth.module.scss'
import React,{useState} from 'react'
import { Paper, Tab, Tabs } from '@mui/material'

const LOGIN_TAB_VALUE= 1
const REGEX_TAB_VALUE= 2

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
    <Tab className={styles.tab} label='ثبت نام' value={REGEX_TAB_VALUE}/>
  </Tabs>

  {value === REGEX_TAB_VALUE
  
  &&
  <div className={styles.Login}>
    <form onSubmit={(e)=>e.preventDefault()}>


        <div className={styles.LoginItem}>
            <label>نام کامل</label>
            <input type="text" name='username'  />
        </div>
        <div className={styles.LoginItem}>
            <label> ایمیل</label>
            <input type="text" name='email'  />
        </div>
        <div className={styles.LoginItem}>
            <label>رمز عبور</label>
            <input type="password" name='password' 
             />
        </div>
        <div className={styles.LoginItem}>
            <label>تکرار رمز عبور </label>
            <input type="password" name='confirmPassword' 
             />
        </div>

        <button>ورود</button>
    </form>
  </div>
  }

  {value === LOGIN_TAB_VALUE
  &&
  <div className={styles.Login}>
    <form onSubmit={(e)=>e.preventDefault() }>


        <div className={styles.LoginItem}>
            <label>نام کاربری</label>
            <input type="text" name='username'  />
        </div>
        <div className={styles.LoginItem}>
            <label>رمز عبور</label>
            <input type="password" name='password' 
             />
        </div>
        <button>ورود</button>

    </form>
  </div>
  }
</Paper>

</div>
  )
}

export default AuthPage