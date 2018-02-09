import React, { Component } from 'react';
import '../App.css';
import AccountableGif from './AccountableGIF.gif';
import AccountableStill from './AccountableStill.png';
import BlushGif from './BlushGIF.gif';
import BlushStill from './BlushStill.png'
import gameOfDeThronesGif from './GOTGif.gif';
import gameOfDeThronesStill from './GOTStill.png';
import cuddlegramGif from './CuddlegramGIF(2).gif';
import cuddlegramStill from './CuddlegramStill.png'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGithubSquare, faYoutubeSquare } from '@fortawesome/fontawesome-free-brands'

class PersonalProjects extends Component {

  constructor(){
    super();

    this.state = {
      accountable: false,
      blush: false,
      gameOfDeThrones: false,
      cuddlegram: false
    }
  }

  handleMouseOver = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.id]: true
    })
  }

  handleMouseOut = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.id]: false
    })
  }

  render() {

    let accountable;
    let blush;
    let gameOfDeThrones;
    let cuddlegram;

    if (this.state.accountable === true){
      accountable = AccountableGif
    } else {
      accountable = AccountableStill
    }

    if (this.state.blush === true){
      blush = BlushGif
    } else {
      blush = BlushStill
    }

    if (this.state.gameOfDeThrones === true){
      gameOfDeThrones = gameOfDeThronesGif
    } else {
      gameOfDeThrones = gameOfDeThronesStill
    }

    if (this.state.cuddlegram === true){
      cuddlegram = cuddlegramGif
    } else {
      cuddlegram = cuddlegramStill
    }

    return (
      <div style={{fontFamily:'Roboto Slab', padding: '1%'}}>
        <p className="project-component-title">Personal Projects</p>
        <div className="w3-row">
          <div className="w3-half project" style={{padding:'2%'}}>
            <p className="project-title">Accountable</p>
            <a href="https://youtu.be/xQ-ZFvrMRQY">
              <img id='accountable' alt="" src={accountable} style={{width:'80%'}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              />
            </a><br />
            <a href="https://youtu.be/xQ-ZFvrMRQY">
              <FontAwesomeIcon icon={faYoutubeSquare} className="youtube"/>
            </a>
            <a href="https://github.com/yassimortensen/Accountable-frontend">
              <FontAwesomeIcon icon={faGithubSquare} className="github"/>
            </a>
            <p className="project-info">A personal goal setting tool that uses analytics to track your progress</p>
            <p className="project-tech">Technologies used:</p>
            <p className="project-tech">Ruby on Rails, ActiveRecord Serializer, ChartJS, Javascript, React, Redux, custom CSS</p>
          </div>
          <div className="w3-half project" style={{padding:'2%'}}>
            <p className="project-title">Blush</p>
            <a href="https://youtu.be/B_8TMYuMpu4">
              <img id='blush' alt="" src={blush} style={{width:'80%'}}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              />
            </a><br />
            <a href="https://youtu.be/B_8TMYuMpu4">
              <FontAwesomeIcon icon={faYoutubeSquare} className="youtube"/>
            </a>
            <a href="https://github.com/yassimortensen/Blush-a-pinterest-clone-frontend">
              <FontAwesomeIcon icon={faGithubSquare} className="github"/>
            </a>
            <p className="project-info">An image discovery and bookmarking site built in React and inspired by Pinterest</p>
            <p className="project-tech">Technologies used:</p>
            <p className="project-tech">Ruby on Rails, MVC pattern, third-party API calls, LazyLoad, Javascript, React, and CSS Masonry layout</p>
          </div>
          <div className="w3-row">
            <div className="w3-half project" style={{padding:'2%'}}>
              <p className="project-title">Cuddlegram</p>
              <a href="https://youtu.be/NdiGr94h7Wk">
                <img id='cuddlegram' alt="" src={cuddlegram} style={{width:'80%'}}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                />
              </a><br />
              <a href="https://youtu.be/NdiGr94h7Wk">
                <FontAwesomeIcon icon={faYoutubeSquare} className="youtube"/>
              </a>
              <a href="https://github.com/yassimortensen/Cuddlegram">
                <FontAwesomeIcon icon={faGithubSquare} className="github"/>
              </a>
              <p className="project-info">A social media site for finding adorable pet instagram accounts to follow and enjoy</p>
              <p className="project-tech">Technologies used:</p>
              <p className="project-tech">Ruby onRails, Git, Git branches, Nokogiri, and Bootstrap </p>
            </div>
            <div className="w3-half project" style={{padding:'2%'}}>
              <p className="project-title">Game of DeThrones</p>
              <a href="https://youtu.be/0tVM2GQPXJc">
                <img id='gameOfDeThrones' alt="" src={gameOfDeThrones} style={{width:'80%'}}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                />
              </a><br />
              <a href="https://youtu.be/0tVM2GQPXJc">
                <FontAwesomeIcon icon={faYoutubeSquare} className="youtube"/>
              </a>
              <a href="https://github.com/yassimortensen/mod-3-project-frontend">
                <FontAwesomeIcon icon={faGithubSquare} className="github"/>
              </a>
              <p className="project-info">A Game of Thrones parody game where the user can choose their own adventure</p>
              <p className="project-tech">Technologies used:</p>
              <p className="project-tech">Vanilla Javascript, Git, Git branches, Nokogiri, Bootstrap, CSS animations</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
