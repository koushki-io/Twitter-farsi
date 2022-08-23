import axios from "axios"

const BASE_URL='https://twitterapi.liara.run/api'

export const SignUpAction=(SignUpSend,notify,navigate)=>async(dispatch)=>{
    dispatch({type:"REQUEST"})
    try {
    
        
        const {data}= await axios.post(`${BASE_URL}/register`,SignUpSend)
        dispatch({type:"SUCCESS",payload:data})
        notify("ثبت نام باموفقیت انجام شد","success")
       localStorage.setItem("name",data.name)
       localStorage.setItem("username",data.username)
       localStorage.setItem("token",data["x-auth-token"])
       navigate('/')

        
    } catch (error) {
        dispatch({type:"ERROR"})
        notify(error.response.data.message,"error") 
        
    }
}
export const LoginAction=(LoginSend,notify,navigate)=>async(dispatch)=>{
    dispatch({type:"REQUEST"})
    try {
        const {data}= await axios.post(`${BASE_URL}/login`,LoginSend)
        dispatch({type:"SUCCESS",payload:data})
        notify("ثبت نام باموفقیت انجام شد","success")
       localStorage.setItem("name",data.name)
       localStorage.setItem("username",data.username)
       localStorage.setItem("token",data["x-auth-token"])
       navigate('/')

        
    } catch (error) {
        dispatch({type:"ERROR"})
        notify(error.response.data.message,"error")
        

        
        
    }
}