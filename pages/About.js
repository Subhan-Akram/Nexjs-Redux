import React from 'react'
import Link from 'next/link'
function About(props) {
  console.log("title>>",props)
  return (
    <div>About

    <Link href='/index' as="/">  <button >go to home</button></Link>
    </div>
  )
}

export default About