import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    /* used for dark navigation bar */
    const [sticky, setSticky] = useState(false);
    
    /* '()=>{}' gets executed only once when the component is loaded*/
    useEffect(()=>{
      /* when we scroll this function gets executed */
      window.addEventListener('scroll', ()=>{
        /* window.scrollY provides the scroll position from the top*/
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);

  return (
    /* if sticky=true, extra classname='dark-nav', 
       if sticky=false, no extra className('') */
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar