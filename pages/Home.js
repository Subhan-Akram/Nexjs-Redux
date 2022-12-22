import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useDispatch} from "@reduxjs/toolkit"
// import {iconAction} from "../store/slice-reducer/iconSlice"
// import {iconAction} from "../store/store"

import { useRouter } from 'next/router'
function Home() {
  const dispatch=useDispatch();

  return (
    <main className={styles.main}>
      
    <Link href={{
    pathname: "About",
  
}}
// as={"About/46"}
>
      <button>Go to about page</button>
    </Link>

    <Link href={{
    pathname: "posts/[slug]",
    query: {
        // id: "2",
        slug:"my-first-post",
        title: "episode.title",
        obj:"as",
        s:["fd"]
    }
}}
as={`posts/my-first-post`}
>
      <button>Go To Blogadsesa page </button>
    </Link>
   
    {/* <div className='btn_d'>   */}
     {/* <button style={"backgroundColor:blue,color:green"} 
     onClick={()=>{dispatch(getPosts())}}>Dispatch api </button></div> */}





  </main>
  )
}

export default Home