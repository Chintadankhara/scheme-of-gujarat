import { NavLink } from 'react-router-dom'
import scheme from '../assets/gujarat.png'
import right from '../assets/right.png'
import doctor from '../assets/doctor.jpg'
import farmer from '../assets/farmer.jpg'
import oldlady from '../assets/oldlady.jpg'
import student from '../assets/student.jpg'
import worker from '../assets/worker.jpg'
import whelechair from '../assets/whelechair.jpg'
import di from "../assets/di.webp"
import digilocker from "../assets/digilocker.webp"
import dataGov from "../assets/dataGov.webp"
import igod from "../assets/igod.webp"
import indiaGov from "../assets/indiaGov.webp"
import myGov from "../assets/mygov.webp"
import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import { Signinbutton } from '../components/Signinbutton.jsx'
import { Signoutbutton } from '../components/Signoutbutton.jsx'
import { Signupbutton } from "../components/Signupbutton.jsx"
export const Home = () => {
  const [iscookie, setcookie] = useState(false);
  useEffect(() => {
    const check = document.cookie.split("=")[1]
    if (check == "chintan")
      setcookie(true);
  }, [iscookie,setcookie])
  const textRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Education scheme...", "Agriculture scheme...", "Health scheme...", "Disability-citizens scheme...", "Senior-citizen scheme...", "Special-art scheme..."],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 1000,
      loop: true,
    })
    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <>
      {/* Main navigation bar */}
      <nav className="navbar navbar-expand-md  back navbar-dark shadow-lg mt-3 sticky-top p-0">

        <div className="container" style={{ 'boxShadow': 'rgb(145, 133, 133)' }}>
          <a href="#" className="navbar-brand">
            <img src={scheme} alt="" width={'50px'} className='rounded ms-2' />
            <span className="ms-2">Scheme Of Gujarat</span>
          </a>
          {/* Navigation toggler */}
          <a className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#show">
            <span><i className="bi bi-three-dots-vertical text-white" style={{ 'cursor': 'pointer' }}></i></span>
          </a>
          {/*Navigation toggler */}
          <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="show" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <span className="text-light">Scheme Of Gujarat</span>
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav text-center">
                <li className="nav-item ms-2">
                  <a href="" className="nav-link">More-Info</a>
                </li>
                <li className="nav-item ms-2">
                  <a href="" className="nav-link">Join-Us</a>
                </li>
              </ul>

              {
                iscookie ? <>
                  <Signoutbutton/>
                </> : <>
                  <Signinbutton /><Signupbutton />
                </>

              }

            </div>
          </div>
        </div>
      </nav>

      {/* <!--Scheme-heading--> */}

      <div className="container">
        <div className="head mt-4">
          "Scheme Of Gujarat it is an Initiatives that
          Empowering Gujarat: Government Schemes Portal - Explore,
          Apply, and Benefit from Various Welfare scheme."
          <br />
          <h3 ref={textRef} style={{ 'display': 'inline-block', 'color': 'red' }}></h3>
        </div>

        <div className="text-center mt-4">
          <a href="All scheme.html" target="_blank" className="btn btn-dark shadow-lg pt-3 pb-3 ps-3 pe-3" role="button">
            <span className="size-scheme">Your Scheme <img src={right} className="right"
              width="40px" /></span>
          </a>
        </div>
      </div>

      {/* <!---Find-your-scheme--> */}
      <div className="container">

      </div>


      {/* <!--Card-of-scheme--> */}
      <div className="container text-center  d-flex mt-2">
        <div className="row">

          {/* <!--Education-card--> */}
          <div className=" col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100">
              <img className="card-img-top" src={student} />
              <div className="card-body special ">
                <h2 className="card-title">Education</h2>
                <hr />
                <p className="card-tex">
                  Aims to Provide financial aid to students, Universalize elementary education, Enhance employability
                  through skill training, Promote girls' education.</p>
                <a className="btn btn-dark" href="\Scheme of gujarat\html\education.html">More
                  Info
                  <span className="bi bi-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>


          {/* <!--Farmer-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100  ">
              <img className="card-img-top" src={farmer} />
              <div className="card-body special">
                <h2 className="card-title">Agriculture</h2>
                <hr />
                <p className="card-tex ">
                  Aims to Provide financial support, Simplify loan processes,
                  Protect against crop failure, Improve soil fertility, Insure crops.
                </p>
                <a className="btn btn-dark" href="\Scheme of gujarat\html\agriculture.html">More
                  Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

          {/* <!--Doctor-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100 mb-2">
              <img className="card-img-top" src={doctor} />
              <div className="card-body special">
                <h2 className="card-title">Health</h2>
                <hr />
                <p className="card-tex">
                  Aims to Expand health insurance, Improve healthcare infrastructure,
                  Ensure affordable healthcare, Promote sanitation. </p>
                <a className="btn btn-dark" href="\Scheme of gujarat\html\health.html">More
                  Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

          {/* <!--Disabled-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100 mb-2">
              <img className="card-img-top" src={whelechair} />
              <div className="card-body special">
                <h2 className="card-title">Disability-citizens</h2>
                <hr />
                <p className="card-tex">
                  Aims to Provide financial aid, Streamline benefits,
                  Empower disabled individuals, Offer rehabilitation service, Support education.
                </p>
                <a className="btn btn-dark" href="#">More Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

          {/* <!--Sinior-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100  mb-2">
              <img className="card-img-top" src={oldlady} />
              <div className="card-body special">
                <h2 className="card-title">Senior-citizen</h2>
                <hr />
                <p className="card-tex">
                  Aims to Provide financial aid, Streamline benefits,
                  Empower disabled individuals, Offer rehabilitation service, Support education.
                </p>
                <a className="btn btn-dark" href="#">More Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

          {/* <!--Worker-card--> */}
          <div className="col-md-4 col-6 mt-3">
            <div className="card text-center ok flex-column h-100  mb-2">
              <img className="card-img-top" src={worker} />
              <div className="card-body special">
                <h2 className="card-title">Special-art</h2>
                <hr />
                <p className="card-tex">
                  Aims to Provide financial aid, Streamline benefits,
                  Empower disabled individuals, Offer rehabilitation service, Support education.
                </p>
                <a className="btn btn-dark" href="#">More Info
                  <span className="bi bi-arrow-right"></span></a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer section with developer details */}

      <div className="container-fluid mt-4 foot">

        <div className="card text-center bg-dark text-light">
          <div className="card-body">
            <div className="card-title">
              <div className="card-img-top">
                <img src={scheme} width="100px" className="rounded" /><span className="text-s">Scheme Of
                  Gujarat</span>
              </div>
              <div className="card-title mt-3">
                <h1>Maintained By</h1>
              </div>
              <div className="card-text mt-3">
                <p>
                  Beladiya Dhrumil (it)<br />
                  Gopani Dhruv (it)<br />
                  Dankhara Chintan (it)<br />
                  Chauhan Tushar (it) <br />
                  Bhavesh solanki (it)
                </p>

              </div>
            </div>

            <hr />
            <div className="card-title">
              <h1>Useful Links</h1>
              <img src={di} />
              <img src={digilocker} />
              <img src={dataGov} />
              <img src={igod} />
              <img src={indiaGov} />
              <img src={myGov} />
            </div>

            <hr />
            <div className="card-title">
              <h1>Other-Links</h1>
            </div>
            <div className="card-text">
              <a href="#" className="btn btn-primary mb-2 mt-2 me-2" role="button">More-Info</a>
              <a href="#" className="btn btn-primary mb-2 mt-2 me-2" role="button">Documentation</a>
              <a href="#" className="btn btn-primary mb-2 mt-2 me-2" role="button">Terms & Conditions</a>
            </div>

            <hr />
            <span className="card-foter">Last Updated On : 26/3/2024 | Version : 1.2.0</span>
          </div>
        </div>
      </div>

    </>
  )
}
