import {  Route, Routes } from "react-router-dom"
import React, { useEffect, useLayoutEffect, useState } from "react"
import { Home } from "./pages/Home"
import { Allscheme } from "./pages/Allscheme"
import { Signin} from "./components/Signin.jsx"
import { Signup } from "./components/Signup.jsx"
import { As } from "./components/As.jsx"
function App() {
    // const [get, set] = useState(false);
    
    // useLayoutEffect(()=>{
    //   const g = document.cookie.split("=")[1];
    //   if(g=="chintan"){
    //     set(true)
    //   }
    // },[set])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allscheme" element={<Allscheme />} />
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
         
    </>
  )
}

export default App
