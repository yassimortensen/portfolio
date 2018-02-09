import React, { Component } from 'react';
import '../App.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faMediumM } from '@fortawesome/fontawesome-free-brands'
import { faFileAlt, faCopyright } from '@fortawesome/fontawesome-free-regular'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a className="icon" href="https://www.linkedin.com/in/yassimortensen/">
          <FontAwesomeIcon icon={faLinkedin} style={{display:'inline-block', width:'10%'}}/>
        </a>
        <a className="icon" href="https://docs.google.com/presentation/d/1PqcB0LwDTbAtC4G-sAPRG8EJq7Zag_SToaOVDNSMugQ/edit?usp=sharing">
          <FontAwesomeIcon icon={faFileAlt} style={{display:'inline-block', width:'10%'}}/>
        </a>
        <a className="icon" href="https://github.com/yassimortensen">
          <FontAwesomeIcon icon={faGithubSquare} style={{display:'inline-block', width:'10%'}}/>
        </a>
        <a className="icon" href="https://medium.com/@yassimortensen">
          <FontAwesomeIcon icon={faMediumM} style={{display:'inline-block', width:'10%'}}/>
        </a>
        <p className="masthead">Handmade by me <FontAwesomeIcon icon={faCopyright}/> 2018</p>
      </div>
    );
  }
}

export default Footer;
