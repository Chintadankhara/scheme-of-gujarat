import React from 'react'

export const As = (props) => {
    function ok(){
console.log(props.getset(false));
    }
  return (
    <>
    <button onClick={ok} className='btn btn-warning m-5'>Click to remove</button>
    </>
  )
}
