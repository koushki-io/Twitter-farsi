import { Password } from '@mui/icons-material'
import React,{useState,useEffect} from 'react'
import { notify } from '../Alert/tost'
import { validate } from '../validte/validate'
import styles from "./SignUp.module.scss"


const SignUp = () => {
  const [SignUp, setSignUp] = useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
  })
  const [touched, settouched] = useState({
    fullname:false,
    username:false,
    password:false,
    confirmPassword:false,
  })
  const [Errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(SignUp,"signUp"))
   
  }, [SignUp])
 


  const ChangeHandler=(e)=>{
    setSignUp({...SignUp,[e.target.name]:e.target.value})
    
    
  }
  const focusHandler=(e)=>{
    settouched({...touched,[e.target.name]:true})

  }

  const LoginHandler=()=>{
    const sendSignUp={
      "name":SignUp.fullname,
      "username" : SignUp.username,
      "password": SignUp.password
    }
    
    if(!Object.keys(Errors).length){

        notify("ورود موفقیت امیز","success")
    }else{
     
     Object.values(Errors).map((item)=>notify(item,"error"))
      
    }
  }
  return (
    <div className={styles.SignUp}>
    <form onSubmit={(e)=>e.preventDefault()}>


        <div className={styles.SignUpItem}>
            <label>نام کامل</label>
            <input 
            style={{borderColor: Errors.fullname && touched.fullname && "#e53935"}}

            onFocus={focusHandler}
            onChange={ChangeHandler}
            value={SignUp.fullname} type="text" name='fullname'  />
        </div>
        <div className={styles.SignUpItem}>
            <label> نام کاربری</label>
            <input
            style={{borderColor: Errors.username && touched.username && "#e53935"}}

            onFocus={focusHandler}
            onChange={ChangeHandler}
            value={SignUp.username} type="text" name='username'  />
        </div>
        <div className={styles.SignUpItem}>
            <label>رمز عبور</label>
            <input
            style={{borderColor: Errors.password && touched.password && "#e53935"}}

            onFocus={focusHandler}
            onChange={ChangeHandler}
            value={SignUp.password} type="password" name='password' 
             />
        </div>
        <div className={styles.SignUpItem}>
            <label>تکرار رمز عبور </label>
            <input 
            style={{borderColor: Errors.confirmPassword && touched.confirmPassword && "#e53935"}}

            onFocus={focusHandler}
            onChange={ChangeHandler}
            value={SignUp.confirmPassword} type="password" name='confirmPassword' 
             />
        </div>

        <button 
        onClick={LoginHandler}
        >ورود</button>
    </form>
  </div>
  )
}

export default SignUp