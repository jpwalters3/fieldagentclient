import React from 'react'

const Nav = ({Name, onShow}) => {
  return (
    <div id = "nav-element">
        <button id = "nav-button" onClick = {onShow}>{Name}</button>
    </div>
  )
}

export default Nav
