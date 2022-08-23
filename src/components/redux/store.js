import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

const middeleware=[thunk]

const initial={

}

const reducer=combineReducers({

})


const store=createStore(reducer,initial,composeWithDevTools(applyMiddleware(...middeleware)))





export default store