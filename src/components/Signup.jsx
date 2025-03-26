import React from 'react'
import { NavLink } from 'react-router-dom'
import scheme from '../assets/gujarat.png'
export const Signup = () => {
   
      
  return (
    <>
      {/* <!--Main-container--> */}
      <div className="container mt-4 text-center">

        {/* <!--Logo-with-heading--> */}
        <span className="logo">
          <img className="img-fluid rounded"
            src={scheme}
            width="60px" />
          <nav aria-label="breadcrumb">
            <ol className=" breadcrumb">
              <li className=" breadcrumb-item">
                <a href="/">Home</a>
              </li>
            </ol>
          </nav>
        </span>


        <div className="main mt-4 text-center ms-auto me-auto">

          {/* <!--Signup-with-description--> */}
          <h1 className="pt-4 pb-3 heading">Sign-Up</h1>

          <form action="" method="post">

            {/* <!-- Input Name --> */}
            <input type="text" required placeholder="Name *" className="fname w-75  mb-4" id="nameid" />
            <br />
            {/* <!-- Input Email --> */}
            <input type="email" required placeholder="Email *" className="password w-75 mb-4" id="emailid" /><br />
            {/* <!-- Input Password --> */}
            <input type="password" required placeholder="Set your Password *" className="password mb-4 w-75"
              id="passwordid1" />
            <br />
            {/* <!-- Input Password --> */}
            <input type="password" required placeholder="Re-enter your Password *" className="password mb-2 w-75"
              id="passwordid2" /> <br />
            <span id="error_msg"></span>
            <br />

            {/* <!-- Alert message to user in case if entered & re-entered password are not same --> */}
            <span id="passcheck">

            </span>

            {/* <!/--Sing-in--> */}
            <button type="submit" className="btn btn-dark mt-4 mb-3 w-75" id="loginbtn">Submit</button>
            <br />

            <div className="mt-3">
              Alreay user ?
              <NavLink to={'/signin'} className={'text-decoration-none'}>Signin</NavLink>
            </div>

          </form>

        </div>


      </div>
    </>
  )
}
