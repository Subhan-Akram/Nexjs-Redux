import rootReducer from "./slice-reducer/index";
// import thunk from "redux-thunk";
// import {  applyMiddleware, compose } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { iconslice } from "./slice-reducer/iconSlice";
// // const initStore = initialState => {
// let composeEnhancers = compose;

// //Check if function running on the sever or client
// // if (!typeof window === undefined) {
// //   //Setup Redux Debuger
// //   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // }
// const store= configureStore({
//   reducer: {
//      icon: iconslice.reducer,
//   }  
// });


 

// // return store;
// // };

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import {  applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";


const loggerMiddleware = createLogger();

const store= configureStore({
   reducer: rootReducer
  },
applyMiddleware(thunkMiddleware, loggerMiddleware)
)


export default store

