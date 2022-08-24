import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import { SignUpReducr , PhotoReducr,TweetsReducr} from "./reducer";


const middeleware=[thunk]

const user=localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
const image=localStorage.getItem("image") ? JSON.parse(localStorage.getItem("image")) : ''

const initial={
    getSignUp:{user:user,loading:false},
    getPhoto:image,
}

const reducer=combineReducers({
    getSignUp: SignUpReducr,
     getPhoto: PhotoReducr,
     getTweets: TweetsReducr
})


const store=createStore(reducer,initial,composeWithDevTools(applyMiddleware(...middeleware)))





export default store