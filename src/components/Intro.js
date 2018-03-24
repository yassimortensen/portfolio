import React, { Component } from 'react';
import '../App.css';
import typingImage from './images/domenico-loia-310197.jpg'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faMediumM } from '@fortawesome/fontawesome-free-brands'
import { faFileAlt } from '@fortawesome/fontawesome-free-regular'

import ProfileImage from './ProfileImage.js'

class Intro extends Component {
  render() {
    return (
      <div style={{fontFamily:'Roboto Slab', paddingBottom:'1%'}}>
        <h1 className="code">code with</h1>
        <h1 className="name">yassi</h1>
        <img alt="" src={typingImage} className="background-image" />
        <a className="icon" href="https://www.linkedin.com/in/yassimortensen/">
          <FontAwesomeIcon icon={faLinkedin} style={{display:'inline-block', width:'10%'}}/>
        </a>
        <a className="icon" href="https://docs.google.com/presentation/d/1PqcB0LwDTbAtC4G-sAPRG8EJq7Zag_SToaOVDNSMugQ/edit?usp=sharing">
          <FontAwesomeIcon icon={faFileAlt} style={{display:'inline-block', width:'10%'}}/>
        </a>
        <ProfileImage />
        <a className="icon" href="https://github.com/yassimortensen">
          <FontAwesomeIcon icon={faGithubSquare} style={{display:'inline-block', width:'10%'}}/>
        </a>
        <a className="icon" href="https://medium.com/@yassimortensen">
          <FontAwesomeIcon icon={faMediumM} style={{display:'inline-block', width:'10%'}}/>
        </a>
        <div style={{margin:'0', padding:'0'}}>
          <h1 className="hello">Hello!</h1>
          <p className="intro">{`I'm Yassi - a full-stack web developer.`}</p>
          <p className="intro">With every line of code, I strive to make the web a beautiful place.</p>
          <p className="intro">Learn more about what I do</p>
        </div>
      </div>
    );
  }
}

export default Intro;
