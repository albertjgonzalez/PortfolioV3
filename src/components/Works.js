import React, { Component } from 'react';
import './Works.css'


class Works extends Component {
    render() {
      return (
        <div className='Works'>
<div className='Work-Content-Wrapper'>
            <div className='Work-Row-Top'>
            <div className='Picture-Container'>
                <img id='Work1-Img' src="/" alt="" />
                </div>
            <div className="Work-Description">
                    I'm a web developer based in Orlando, Fl with a passion for solving problems, an eye for
                    design, and love of all things tech. Lets build something!
            </div>
            </div>
            <div className='Work-Row-Center'>
            <div className="Work-Description">
                    I'm a web developer based in Orlando, Fl with a passion for solving problems, an eye for
                    design, and love of all things tech. Lets build something!
            </div>
            <div className='Picture-Container'>
                <img id='Work2-Img' src="/" alt="" />
                </div>
            </div>
            <div className='Work-Row-Bottom'>
            <div className='Picture-Container'>
                <img id='Work3-Img' src="/" alt="" />
                </div>
            <div className="Work-Description">
                    I'm a web developer based in Orlando, Fl with a passion for solving problems, an eye for
                    design, and love of all things tech. Lets build something!
            </div>
            </div>
            </div>
        </div>
      )
    }
}

export default Works