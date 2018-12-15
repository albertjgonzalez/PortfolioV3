import React, { Component } from 'react';
import './Home.css';
import gif from '../images/home2.gif';

class Navbar extends Component {
    render() {
      return (
        <div className='Home'>
        <div className='name-wrapper'>
        <span>Albert</span>
        <span> J </span><br />
        <span>Gonzalez</span>
        </div>
        <div className='title-wrapper'>
        <span>Web</span><br />
        <span>Developer</span>
        </div>

        <img id="Home-Img"src={gif} alt={'gif'} />

        </div>
        
      )
    }
}

export default Navbar