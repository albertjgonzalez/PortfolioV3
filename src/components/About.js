import React, { Component } from 'react';
import './About.css';
import red from '../images/pastel-red.png';

class About extends Component {

   

    render() {
      return (
        <div id="About" className='About'>
            <div className='About-Content-Wrapper'>
            <div className='About-Row-Top'>
            <div className='Picture-Container'>
                <img id='profilePicture' src="/" alt="" />
                </div>
            <div className='aboutText' id='aboutMe'>
                    I'm a Full Stack Web Developer based in Orlando, Fl with a passion for solving problems, an eye for
                    design, and love of all things tech. Let's build something!
                    <img src={red} id='about-Text-Image' alt='red'/>
            </div>
            </div>
            <div className='About-Row-Bottom'>
            <div className='aboutText' id='aboutMe2'>
            ‘Curiosity about life in all of its aspects, I think, is still the secret of great creative people’ - Leo Burnett
            <img src={red} id='about-Text-Image2' alt='red'/>
            </div>
            <div className='Picture-Container'>
            <img id='profilePicture' src="/" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}
}

export default About;
