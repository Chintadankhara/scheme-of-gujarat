import React from 'react'
import { NavLink } from 'react-router-dom'
export const Signupbutton = () => {
    return (
        <>
            <NavLink to={'/signup'} className={'btn btn-danger text-white border border-light nav-item nav-link ms-auto ps-3 pe-3 pt-1 pb-1 mb-1 mt-1'} role='button' id='btn2'>Contact-Me</NavLink>
        </>
    )
}
