import React from 'react'

function Scroll(props) {
  return (
    <div className = "scrollContent">
      {props.children}
    </div>
  )
}

export default Scroll;
