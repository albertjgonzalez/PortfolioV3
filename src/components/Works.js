import React, { Component } from 'react';
import './Works.css'
import yellow from '../images/Pastel-yellow.jpg';


class Works extends Component {



    render() {
        return (
            <div id='Works' className='Works'>
                <div className='Work-Content-Wrapper'>
                    <div className='Work-Row-Top'>
                        <div className='Picture-Container'>
                            <img id='Work1-Img' src="/" alt="" />
                        </div>
                        <div className="Work-Description">
                            <h5>Orlando Safe City</h5>
                            <p>Find the right neighborhood for you family.</p>
                            <a href='/'>Heroku</a>
                            <a href='/'>GitHub</a>
                            <img src={yellow} id='work-Text-Image' alt='yellow' />
                        </div>
                    </div>


                    <div className='Work-Row-Center'>
                        <div className="Work-Description">
                            <img src={yellow} id='work-Text-Image2' alt='yellow' />
                            <h5>Newbie Tutor</h5>
                            <p>Where Newbs teach other Newbs.</p>
                            <a href='/'>Heroku</a>
                            <a href='/'>GitHub</a>
                        </div>
                        <div className='Work-Picture-Container'>
                            <img id='Work2-Img' src="/" alt="" />
                        </div>
                    </div>


                    <div className='Work-Row-Bottom'>
                        <div className='Work-Picture-Container'>
                            <img id='Work3-Img' src="/" alt="" />
                        </div>
                        <div className="Work-Description">
                            <h5>I❤Giphy</h5>
                            <p>Hope you love Gifs as much as we do.</p>
                            <a href='/'>Heroku</a>
                            <a href='/'>GitHub</a>
                            <img src={yellow} id='work-Text-Image3' alt='yellow' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Works