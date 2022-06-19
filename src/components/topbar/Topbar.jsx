import React from 'react'
import {Person,Mail} from "@material-ui/icons"
import "./topbar.scss"
export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
        <div className="wrapper">
          <div className="left">
            
            <a href="#intro" className='logo'>Lite Jan</a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>+1 206-635-6326</span>
            </div>
            <div className="itemContainer">
              <Mail className='icon'/>
              <span>lightjan2005@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line1'></span>
              <span className='line1'></span>
            </div>
          </div>
        </div>
        
    </div>
  )
}
