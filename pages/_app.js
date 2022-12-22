import '../styles/globals.css'
import { Provider } from "react-redux";
// import withRedux from "next-redux-wrapper";
import React from "react";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  
  return (<Provider store={store}>
  <Component {...pageProps} />
</Provider>)
}


