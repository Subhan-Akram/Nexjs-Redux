import React from 'react'
import { useRouter } from 'next/router'
function Blog(){
    const router = useRouter()
  const { slug } = router.query;
  const params = router.query;
  console.log("params---->",params,"slug ",slug)
  return (
    <div>Blog Page 

      <h1>First Blof on Next Js</h1>
    </div>
  )
}

export default Blog