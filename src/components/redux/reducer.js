export const SignUpReducr=(state={user:{},loading:false},action)=>{
    switch (action.type) {
        case "REQUEST":
            return {...state,loading:true}
        case "SUCCESS":
            return {...state,loading:false,user:action.payload}
        case "ERROR":
            return {...state,loading:false}
        case "logOut":
            return {user:{},loading:false}
        default:
         return state
    }

}
export const PhotoReducr=(state={photo:{},loading:false},action)=>{
    switch (action.type) {
        case "REQUEST_PHOTO":
            return {...state,loading:true}
        case "SUCCESS_PHOTO":
            return {...state,loading:false,photo:action.payload}
        case "ERROR_PHOTO":
            return {...state,loading:false}
        default:
         return state
    }

}


export const TweetsReducr=(state={tweets:[],loading:false},action)=>{
    switch (action.type) {
        case "REQUEST_TWEETS":
            return {...state,loading:true}
        case "SUCCESS_TWEETS":
            return {...state,loading:false,tweets:action.payload}
        case "ERROR_TWEETS":
            return {...state,loading:false}
        default:
         return state
    }

}
export const AllUserReducr=(state={AllUser:[],loading:false},action)=>{
    switch (action.type) {
        case "REQUEST_ALLUSER":
            return {...state,loading:true}
        case "SUCCESS_ALLUSER":
            return {...state,loading:false,AllUser:action.payload}
        case "ERROR_ALLUSER":
            return {...state,loading:false}
        default:
         return state
    }

}
export const AllHashTagsReducr=(state={hashtags:[],loading:false},action)=>{
    switch (action.type) {
        case "REQUEST_AllHashTags":
            return {...state,loading:true}
        case "SUCCESS_AllHashTags":
            return {...state,loading:false,hashtags:action.payload}
        case "ERROR_AllHashTags":
            return {...state,loading:false}
        default:
         return state
    }

}
export const reTweetReducer=(state='',action)=>{
    switch (action.type) {
        case "RETWEET":
            return action.payload
        default:
         return state
    }

}