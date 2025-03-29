import React, { useEffect, useRef } from 'react'
import img from '../assets/my.jpg'
import Typed from 'typed.js'
export const Home = () => {
    const textRef = useRef()

    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: ["Im MERN stack developer...", "Im FRONTED developer...", "Im BACKEND developer..."],
            typeSpeed: 100,
            backSpeed: 10,
            backDelay: 1000,
            loop: true

        })
        return (() => {
            typed.destroy()
        })

    }, [])

    return (
        <>

            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={img} alt="profile" className='mainpic img-fluid' /> <br />
                    </div>

                    <div className='col-md-8 text-center mt-4'>
                        <span className='headtext'>   Hi there ,<br />
                        <span className='mt-3 typedtext' ref={textRef}></span></span>
                        
                        <span>

                            <p className='mt-5 
                            maintext'>Im a <span className='f'>MERN</span> stack developer, i can create responsive website, with latest technology like REACT JS , i can also create restful APIs with express js for more information contact-me on email and follow me</p>
                        </span>
                        <a href="https://github.com/Chintadankhara">
                            <span className='git bi bi-github'></span>
                        </a>
                        <a href="https://www.linkedin.com/in/chintan-dankhara-6306272a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><span className='linked bi bi-linkedin'></span></a>
                    </div>
          
                </div>
               

               
     

            </div>
        </>
    )
}
