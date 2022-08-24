import axios from "axios";

const BASE_URL='https://twitterapi.liara.run/api';
const getAxios=()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    return axios.create({
        baseURL:BASE_URL,
        headers:{
            "x-auth-token":`${user["x-auth-token"]}`
        }
    })
}

export const SignUpAction=(SignUpSend,notify,navigate)=>async(dispatch)=>{
    dispatch({type:"REQUEST"})
    try {
        const {data}= await axios.post(`${BASE_URL}/register`,SignUpSend)
        dispatch({type:"SUCCESS",payload:data})
        notify("ثبت نام باموفقیت انجام شد","success")
        localStorage.setItem("user",JSON.stringify(data))
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
        dispatch({type:"SUCCESS_PHOTO",payload:data.image})
        notify("ثبت نام باموفقیت انجام شد","success")
       localStorage.setItem("user",JSON.stringify(data))
       localStorage.setItem("image",JSON.stringify(data.image))   
       navigate('/')
         
    } catch (error) {
        dispatch({type:"ERROR"})
        notify(error.response.data.message,"error")
        

        
        
    }
}


export const logOutAction=(navigate)=>(dispatch)=>{
    dispatch({type:"logOut"})
    localStorage.clear()
    navigate("/")
    window.location.reload()
}



export const UploadPhotoAction=(Photo,notify,setimagePath)=>async(dispatch)=>{
   
    dispatch({type:"REQUEST_PHOTO"})
    try {
        const {data}= await getAxios().post("/uploadUserPhoto",Photo)
        dispatch({type:"SUCCESS_PHOTO",payload:data.imagePath})
        notify("پروفایل با موفقیت ذخیره شد ","success")
        localStorage.setItem("image",JSON.stringify(data.imagePath))
        setimagePath(data.imagePath)

        
    } catch (error) {
        dispatch({type:"ERROR_PHOTO"})
        notify(error.response.data.message,"error") 
        
    }
}
export const getAllTweetAction=(notify)=>async(dispatch)=>{
   
    dispatch({type:"REQUEST_TWEETS"})
    try {
        const {data}= await getAxios().post("/getAllTweet")
        dispatch({type:"SUCCESS_TWEETS",payload:data})
       
        
    } catch (error) {
        dispatch({type:"ERROR_TWEETS"})
        notify(error.response.data.message,"error") 
        
    }
}