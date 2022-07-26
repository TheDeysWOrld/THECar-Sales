import React from 'react'
import "./homepage.css"

function Homepage({setLoginUser}) {
  return (
    <div className='homepage'>
        <h1>Hello Homepage</h1>
        <div className='button' onClick={()=>setLoginUser({})}>Logout</div>
    </div>
  )
}

export default Homepage