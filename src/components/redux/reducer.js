export const SignUpReducr=(state={data:{},loading:false},action)=>{
    switch (action.type) {
        case "REQUEST":
            return {...state,loading:true}
        case "SUCCESS":
            return {...state,loading:false,data:action.payload}
        case "REQUEST":
            return {...state,loading:false}
        default:
         return state
    }

}