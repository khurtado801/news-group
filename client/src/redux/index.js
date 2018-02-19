import {createStore, combineReducers, applyMiddleware} from "redux";
import auth from "./auth";
import news from "./news";
import articles from "./articles"
import thunk from "redux-thunk"




const rootReducer = (combineReducers({auth, news, articles}));

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
})
export default store;