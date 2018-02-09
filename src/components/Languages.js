import React, { Component } from 'react';
import '../App.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact } from '@fortawesome/fontawesome-free-brands'
import { faGem } from '@fortawesome/fontawesome-free-regular'
import { faCode, faChevronUp, faChevronDown } from '@fortawesome/fontawesome-free-solid'

class Languages extends Component {

  constructor(){
    super()

    this.state = {
      expand: false
    }
  }

  handleExpand = (event) => {
    event.preventDefault()
    this.setState(prevState => {
      return {expand: !prevState.expand}
    })
  }

  render() {
    let info;

    if (this.state.expand === true){
      info = (
        <div>
          <div className="language-grid">
              <ul>
                <li>Ruby</li>
                <li>Rails</li>
                <li>ActiveRecord</li>
                <li>SQL</li>
                <li>Postgres</li>
                <li>JSON</li>
                <li>Git</li>
                <li>Nokogiri</li>
              </ul>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Chart.js</li>
                <li>LazyLoad</li>
              </ul>
              <ul>
                <li>HTML</li>
                <li>Custom CSS</li>
                <li>Masonry Layout</li>
                <li>CSS Grid</li>
              </ul>
          </div>
        <FontAwesomeIcon icon={faChevronUp} className="language-icon arrow" onClick={this.handleExpand}/>
        </div>
      )
    } else {
      info = <FontAwesomeIcon icon={faChevronDown} className="language-icon arrow" onClick={this.handleExpand}/>
    }

    return (
      <div style={{backgroundColor: '#f5e3e7', padding:'1%', verticalAlign:'top'}}>
        <div className="language-grid">
          <div className='language'>
            <p className="language-text">backend</p>
            <FontAwesomeIcon icon={faGem} className="language-icon" /><br/>
            <p className="language-text">Ruby on Rails</p>
          </div>
          <div className='language'>
            <p className="language-text">frontend</p>
            <div className="javascript-icons">
              <div></div>
              <FontAwesomeIcon icon={faJsSquare} className="javascript-icon grid-icon" style={{padding:'1%'}}/>
              <FontAwesomeIcon icon={faReact} className="javascript-icon grid-icon" style={{padding:'1%'}}/><br/>
              <div></div>
            </div>
            <p className="language-text">Javascript with <br/> React and Redux</p>
          </div>
          <div className='language'>
            <p className="language-text">styling</p>
            <FontAwesomeIcon icon={faCode} className="language-icon"/><br/>
            <p className="language-text">HTML with <br/> Custom CSS</p>
          </div>
        </div>
        {info}
      </div>
    );
  }
}

export default Languages;
