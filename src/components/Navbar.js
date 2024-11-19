import React from 'react'
import 'boxicons';
import icon from "../assets/Google_Keep_icon.png"
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(props) {
  const openmenu=()=>{
    document.getElementById("menu").classList.toggle("show")
  //  console.log("hello");   
  }
  return (
    <div className='frame'>
        <nav className='nav'>
         <div className=' nav-1'>
        <box-icon  name='menu' className="menu" onClick={openmenu} ></box-icon>
        <div className='nav-img'><img src={icon} alt='logo' ></img></div>
        <h2 className='keep'>Keep</h2>
        <div className='ser'>
        <input className='search' type='search' placeholder='Search'>
        
        </input>
        <box-icon name='search-alt-2' className="bop" ></box-icon>
        </div>
        </div> 
        <div className='nav-2'>
        <box-icon name='refresh' ></box-icon>
        <box-icon name='layout' onClick={props.fun}></box-icon>
        <box-icon name='cog' ></box-icon>
        <div className='g'>G</div>
        </div>
        </nav>
        <section className='nav-left' id="menu">
          <ul>
            <Link to="/"><box-icon name='bulb' ></box-icon>
            <p>Notes</p>  
            </Link>
            <Link to="/reminder"><box-icon name='bell' ></box-icon>
            <p>Reminders</p>  
            </Link>
            <Link to='/archive'><box-icon name='archive-in' ></box-icon>
            <p>Archive</p>  
            </Link> 
            <Link to="/bin"><box-icon name='trash' ></box-icon>
            <p>Bin</p>  
            </Link> 
           
          </ul>
          
        </section>
      
      
        </div>
  )
}

export default Navbar