import React from 'react'
import { useState } from 'react'
import Nav from './Nav'
import Addform from './Addform'
import Selectform from './Selectform'
import Deleteform from './Deleteform'
import Updateform from './Updateform'


const Navbar = () => {
    const [display, setDisplay] = useState("none");
  return (
    <div>
        <div id = "nav-bar">
            <Nav Name="Add Agent" onShow = {()=>setDisplay("add")}/>
            <Nav Name = "View Agent" onShow = {()=>setDisplay("view")} />
            <Nav Name = "Delete Agent" onShow = {()=>setDisplay("delete")} />
            <Nav Name = "Update Agent" onShow = {()=>setDisplay("update")} />
        </div>
        {(display === "add") && <Addform />}
        {(display === "view") && <Selectform />}
        {(display === "delete") && <Deleteform />}
        {(display === "update") && <Updateform />}
    </div>
  )
}

export default Navbar
