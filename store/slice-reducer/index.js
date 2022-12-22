import { combineReducers } from "redux";
import {postReducer} from "./postSlice";
import {iconReducer} from "./iconSlice"
import getData from "../slice-reducer/getData"
console.log("reducer",postReducer)

export default combineReducers({
post:postReducer,
icon:iconReducer,
data:getData
});
