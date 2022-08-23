import React, { useState,useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginAction } from '../../../redux/action'
import { notify } from '../Alert/tost'
import { validate } from '../validte/validate'
import styles from "./login.module.scss"

const Login = () => {
  const disptch= useDispatch();
  const navigate= useNavigate();
  const{loading}= useSelector(x=>x.getSignUp)
  const [Login, setLogin] = useState({
    username:"",
    password:"",

  })
  const [touched, settouched] = useState({
    username:false,
    password:false,
  })
  const [Errors, setErrors] = useState({})
  

  const ChangeHandler=(e)=>{
    setLogin({...Login,[e.target.name]:e.target.value})
   
  }
  const focusHandler=(e)=>{
    settouched({...touched,[e.target.name]:true})

  }

  const SignUpHandler=()=>{
    const sendLogin=Login;
    if(!Object.keys(Errors).length){
      disptch(LoginAction(sendLogin,notify,navigate))
  }else{
   
   Object.values(Errors).map((item)=>notify(item,"error"))
    
  }
  }
  useEffect(() => {
    setErrors(validate(Login,"login"))
   
  }, [Login])

  return (
    <div className={styles.Login}>
    <form onSubmit={(e)=>e.preventDefault() }>


        <div className={styles.LoginItem}>
            <label>نام کاربری</label>
            <input 
            onFocus={focusHandler}
            style={{borderColor: Errors.username && touched.username && "#e53935"}}
            onChange={ChangeHandler}
            value={Login.username} type="text" name='username'  />
        </div>
        <div className={styles.LoginItem}>
            <label>رمز عبور</label>

            <input
            onFocus={focusHandler}
            style={{borderColor: Errors.password && touched.password && "#e53935"}}
            onChange={ChangeHandler}
            value={Login.password} type="password" name='password' 
             />
             {loading && <span className={styles.loading}>درحال بارگذاری ...</span>}

        </div>
        <button
        onClick={SignUpHandler}
        >ورود</button>

    </form>
  </div>
  )
}

export default Login