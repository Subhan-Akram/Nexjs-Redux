import React,{useEffect} from 'react'
import { iconAction } from '../store/slice-reducer/iconSlice'
import { postActions,getPosts} from "../store/slice-reducer/postSlice"
import {getCurrentCompany} from "../store/slice-reducer/getData"
import style from "../styles/Home.module.css"
import { useDispatch,useSelector } from 'react-redux'
function index() {
  const dispatch=useDispatch();
  const selector=useSelector(state=>state.icon);
  const gernalSelector=useSelector(state=>state);
  console.log("reuslkt>>>>>",gernalSelector.post?.loading)
  console.log("gernal selector",gernalSelector,postActions,getPosts)

   useEffect(()=>{
    // redux toolkit simple 
  dispatch(iconAction.iconSun())
  // redux toolkit  async dispatch
  dispatch(getPosts())
  // async simple redux (without toolkit) with thunk middleware 
  dispatch(getCurrentCompany())
   },[])
  
  return (
    <div className={style.main}>

     <h1>Next Js with Redux</h1>
      <button className={style.btn_dispatch} onClick={()=>{
        console.log("working")
        dispatch(iconAction.iconMoon())}}>make it moon</button>
        <button className={style.btn_dispatch} onClick={()=>{
        console.log("working")
        dispatch(iconAction.iconSun())}}>make it sun </button>
        
        <h3>Icon Reducer State :</h3>
      <h2>  {selector.icon}</h2>
<br/><br /><br />
      <h1 className={style.heading}>Getting Data With Async Redux toolkit On UseEffect Call</h1>
      {gernalSelector.post.entities.map(val=>{
        return val.title
      })}
      <br /><br />
<h1 className={style.heading}>Getting Data With Async Simple  Redux Thunk Middleware  On UseEffect Call</h1>
      {gernalSelector.data.Posts.map(val=>{
        return val.title
      })}

    </div>
  )
}

export default index