import {  Route, Routes } from "react-router-dom"
import React from "react"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Allscheme } from "./pages/Allscheme"
import { Signin} from "./components/Signin.jsx"
import { Signup } from "./components/Signup.jsx"
function App() {

  return (
    <>
      <Navbar />
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
