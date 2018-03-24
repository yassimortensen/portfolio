import React, { Component } from 'react';
import profileImage from './images/profile-image.JPG'

class ProfileImage extends Component {

  render(){

    return (
      <img alt="" src={profileImage} className="img-circle" style={{display:'inline-block'}}/>
    )
  }
}


export default ProfileImage
