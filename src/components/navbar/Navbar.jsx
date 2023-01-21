import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/GPT-3.svg';

const Navbar = () => {
  const {toggleMenu, setToggleMenu} = useState(false)
  return (
    <div className="gpt3_navbar">
      <div className= 'gpt3_navbar-links'>
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        <div className="gpt3_navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3_navbar-menu">

        </div>
      </div>
    </div>
  )
}

export default Navbar