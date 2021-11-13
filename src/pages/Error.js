import React from 'react'
import {Link} from 'react-router-dom'
import loginImg from '../login-img.svg';

export default function Error() {
  return (
    <div className="section-center">
      <img src={loginImg} alt="login back image"/>
      <h1>404!</h1>
      <h2>Ooops! There is something wrong.</h2>
      <Link to="/">Back To Home Page</Link>
    </div>
  )
}
