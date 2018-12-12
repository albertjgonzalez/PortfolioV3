import React, { Component } from 'react';
import './Home.css';


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
        </div>
      )
    }
}

export default Navbar