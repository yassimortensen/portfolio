import React, { Component } from 'react';
import profileImage from './images/profile-image.JPG'

class ProfileImage extends Component {

  constructor(){
    super();

    this.state = {
      image: null,
      className: null
    }
  }

  componentDidMount(){
    this.setState({
      image: profileImage,
      className: "img-circle"
    })
  }

  render(){

    let className;

    if (this.state.image){
      className = "img-circle"
    } else {
      className = null
    }

    return (
      <img alt="" src={this.state.image} className={className} style={{display:'inline-block'}}/>
    )
  }
}


export default ProfileImage
