import React from 'react'
import Logo from '../../assets/logo.png';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className='header-style'>
    <div>
        <img src={Logo} alt="Logo Image" className='header-logo'/>
    </div>
       
    </div>
  )
}

export default Header