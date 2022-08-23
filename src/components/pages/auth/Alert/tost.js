import {toast} from 'react-toastify'
export const notify=(text,type)=>{
    if(type==="success"){
    return toast.success(text);
    } 
    if(type==="error"){
        return toast.error(text);

    }
}