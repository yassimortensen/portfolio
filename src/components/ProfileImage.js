import React, { Component } from 'react';
import profileImage from './images/profile-image.JPG'

class ProfileImage extends Component {

  constructor(){
    super();

    this.state = {
      image: null
    }
  }

  componentDidMount(){
    this.setState({
      image: profileImage
    })
  }

  render(){
    return (
      <img alt="" src={this.state.image} className="img-circle" style={{display:'inline-block'}}/>
    )
  }
}


export default ProfileImage
