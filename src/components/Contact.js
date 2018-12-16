import React, { Component } from 'react';
import './Contact.css'
import { Textfield, Button } from 'react-mdl';
import blue from '../images/pastel-blue.jpg'


class Contact extends Component {
    render() {
      return (
        <div id='Contact' className='Contact'>
        <div className='Contact-Content-Wrapper'>
        <h4>Let's Connect.</h4>
        <Textfield
    onChange={() => {}}
    label="Email"
    floatingLabel
    style={{width: '30%'}}
/>
<br />
<br />
<br />
<Textfield
    onChange={() => {}}
    label="Name"
    floatingLabel
    style={{width: '30%'}}
/>
<br />
<br />
<br />
<Textfield
    onChange={() => {}}
    label="Message"
    floatingLabel
    style={{width: '90%'}}
/>
        <Button primary>Send</Button>
        </div>
        <img className='contact-Image'src={blue} alt='blue'/>
    </div>
    
    
      )
      
    }
}

export default Contact;