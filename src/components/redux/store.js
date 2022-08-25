import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import { SignUpReducr,AllHashTagsReducr , PhotoReducr,TweetsReducr,AllUserReducr} from "./reducer";

const middeleware=[thunk]


const reducer=combineReducers({
    getSignUp: SignUpReducr,
     getPhoto: PhotoReducr,
     getTweets: TweetsReducr,
     getAlluser: AllUserReducr,
     getHashtags:AllHashTagsReducr,
})
const user=localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
const image=localStorage.getItem("image") ? JSON.parse(localStorage.getItem("image")) : ''

const initial={
    getSignUp:{user:user,loading:false},
    getPhoto:{photo:image,loading:false},
}



const store=createStore(reducer,initial,composeWithDevTools(applyMiddleware(...middeleware)))





export default store