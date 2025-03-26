import React from 'react'
import scheme from '../assets/gujarat.png'
import google from '../assets/google.png'
import { NavLink } from 'react-router-dom'
export const Signin = () => {
  return (
    <>

      {/* <!--Main-container--> */}
      <div className="container mt-4 text-center">

        {/* <!--Logo-with-heading--> */}
        <span className="logo">
          <img className="img-fluid rounded" src={scheme} width="60px" />
          <nav aria-label="breadcrumb">
            <ol className=" breadcrumb">
              <li className=" breadcrumb-item">
                <NavLink to={'/'}>Home</NavLink>
              </li>
            </ol>
          </nav>
        </span>

        <div className="main mt-4 text-center ms-auto me-auto">

          {/* <!--Login-with-description--> */}
          <h1 className="pt-3 pb-3 heading">Sign-In</h1>
          <p className='information'>The faster you fill up,
            the faster you get your scheme</p>

          <form action="" method="">

            {/* <!--Enter-Email--> */}
            <input type="text" required placeholder="Enter your email *" className="user mt-2 mb-4 w-75" name="email"
              id="emailid" />
            <br />
            {/* <!--Enter-password--> */}
            <input type="password" required placeholder="Enter your Password *" className="password mb-3 w-75"
              name="password" id="passwordid" />
            <br />
            <span id="msg">

            </span>
            {/* <!--Remember-me--> */}
            <span className="me-2 ms-1">
              <label style={{ 'cursor': 'pointer' }}>
                <input type="checkbox" className="mb-3 me-1" style={{ 'cursor': 'pointer' }} />
                Remember me</label>
            </span>
            {/* <!--Forgot-password--> */}
            <a href="#" className="ms-1 text-decoration-none">Forgot Password ?</a>
            <br />

            {/* <!--Sing-in--> */}
            <button type="submit" className="btn btn-dark mt-3 mb-3 w-75" id="loginbtn">Submit</button>
            <br />
            <span>------------------- OR -------------------</span>
            <br />
            {/* <!--Sing-in-with-google--> */}
            <button type="button" className="btn btn-light mt-3 w-75  p-1" style={{ 'border': '1px solid black' }}><img
              src={google}
              width="30px" className="me-2" /> Sign In With Google</button>

            <div className="mt-3">
              Don't have account ?
              <NavLink to={'/signup'} className={'text-decoration-none'}
              >Sign-Up</NavLink>

            </div>
          </form>

        </div>
      </div>
    </>
  )
}
