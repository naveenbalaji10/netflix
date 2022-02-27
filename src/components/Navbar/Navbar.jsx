import { useState } from 'react'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    const [scrolled ,setScrolled]=useState(false)
    
    window.onscroll=()=>{
        setScrolled(window.pageYOffset === 0 ? false : true);
        return ( ()=>window.onscroll=== null)
    }
  return (
    <div className={scrolled ? 'navbar scrolled' :'navbar'}>
        <div className='container'>
            <div className='left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt=""/>
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>Recent and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
              <Search className='icon'/>
              <span>Kid</span>
              <Notifications className='icon'/>
              <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className='profile'>
          <ArrowDropDown className='icon'/>
          <div className='options'>
              <span>Settings</span>
              <span>Log Out</span>
          </div>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar