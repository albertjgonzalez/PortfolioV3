import React, { Component } from 'react';
import './Home.css'


class Navbar extends Component {
    render() {
      return (
        <div className='Home'>
        <div className='name-wrapper'>
        <h1>Albert</h1>
        <h1> J </h1>
        <h1>Gonzalez</h1>
        </div>
        <div className='title-wrapper'>
        <h1>Web </h1>
        <h1>Developer</h1>
        </div>
        </div>
      )
    }
}

export default Navbar