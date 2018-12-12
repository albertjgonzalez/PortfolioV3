import React from 'react';
import './About.css';

const About = (props) => {
    return (
        <div className='About'>
            <div className='About-Content-Wrapper'>
            <div className='About-Row-Top'>
            <div className='Picture-Container'>
                <img id='profilePicture' src="/" alt="" />
                </div>
            <div id='aboutMe'>
                    I'm a web developer based in Orlando, Fl with a passion for solving problems, an eye for
                    design, and love of all things tech. Lets build something!
            </div>
            </div>
            <div className='About-Row-Bottom'>
            <div id='aboutMe2'>
                    I'm a web developer based in Orlando, Fl with a passion for solving problems, an eye for
                    design, and love of all things tech. Lets build something!
            </div>
            <div className='Picture-Container'>
                <img id='profilePicture2' src="/" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;
