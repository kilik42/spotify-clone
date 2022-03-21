import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

const Login = () => {
  return (
    <div className="login">
        <h1>I am the login page</h1>
      {/* spotify logo  */}
      <img src="https://imgs.search.brave.com/1yJObJ9mXlvMYUPX0Rzs9lkr3ELBru1X-2uHMk6KrCY/rs:fit:1200:1200:1/g:ce/aHR0cDovL21lZGlh/Lmlkb3dubG9hZGJs/b2cuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE2LzA2L1Nw/b3RpZnlfbG9nb19o/b3Jpem9udGFsX2Js/YWNrLmpwZw" alt="" />
      {/* login with spotify button */}
      <a href={loginUrl}>Login with spotify</a>


    </div>
  )
}

export default Login
