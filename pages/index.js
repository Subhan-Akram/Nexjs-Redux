import React,{useEffect} from 'react'
import { iconAction } from '../store/slice-reducer/iconSlice'
import { postActions,getPosts} from "../store/slice-reducer/postSlice"
import {getCurrentCompany} from "../store/slice-reducer/getData"

import { useDispatch,useSelector } from 'react-redux'
function index() {
  const dispatch=useDispatch();
  const selector=useSelector(state=>state.icon);
  const gernalSelector=useSelector(state=>state);
  console.log("reuslkt>>>>>",gernalSelector.post?.loading)
  console.log("gernal selector",gernalSelector,postActions,getPosts)

   useEffect(()=>{
  dispatch(iconAction.iconSun())
  dispatch(getPosts())
  dispatch(getCurrentCompany())
   },[])
  
  return (
    <div>index

      <button onClick={()=>{
        console.log("working")
        dispatch(iconAction.iconMoon())}}>call apis</button>

        {selector.icon}
    </div>
  )
}

export default index