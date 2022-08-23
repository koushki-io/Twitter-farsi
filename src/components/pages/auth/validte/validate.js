export const validate = (data,type)=>{
    const erorrs={};


  
    if(!data.username){
        erorrs.username='نام کاربری الزامی است'

    }else{
        delete erorrs.username
    }

    if(!data.password){
        erorrs.password="پسورد الزامی است"
    }else if(data.password.length < 6){
        erorrs.password=" پسورد حداقل شامل 6 حرف باشد"

    }
    else{
        delete erorrs.password
    }
    

    if(type==="signUp"){
        if(!data.fullname.trim()){
            erorrs.fullname="نام کامل الزامی است"
        }else{
            delete erorrs.fullname
        }

        
    if (!data.confirmPassword) {
        erorrs.confirmPassword=' تکرار پسورد الزامی است'
        
    }
    else if(data.confirmPassword !== data.password){
        erorrs.confirmPassword="پسورد یکسان نیست"

    }
    else{
        delete erorrs.confirmPassword
    }
 

    }

return erorrs


}