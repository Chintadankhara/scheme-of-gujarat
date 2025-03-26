import { NavLink } from 'react-router-dom'
export const Signoutbutton = () => {
  function clearcookie(){
   document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

  }
  return (
    <>
      <button className={'btn btn-dark text-white border border-light nav-item nav-link me-2 ps-3 ms-auto pe-3 pt-1 pb-1 mb-1 mt-1'} role='button' onClick={clearcookie}>Sign-Out</button>

    </>
  )
}
