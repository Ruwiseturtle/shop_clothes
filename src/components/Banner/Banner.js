import React from 'react';
import "./Banner.css";
import closeImage from '../../assets/images/Close.png';

const Banner = () => {
  return (
    <div className="container-banner">
      <div className="banner">
        <div className="banner-text">
          Sign up and get 20% off to your first order. Sign Up Now
        </div>
        <div className="container-closeImage">
          <img className="closeImage" src={closeImage} alt="close" />
        </div>
      </div>
    </div>
  );
}

export default Banner
