import React, { useState } from 'react';
import "./Banner.css";
import closeImage from '../../assets/images/Close.png';

const Banner = () => {
  const [visible, setVisible] = useState(true);

  const handClose = () => {
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="container-banner">
      <div className="banner">
        <div className="banner-text">
          Sign up and get 20% off to your first order. Sign Up Now
        </div>
        <div className="container-closeImage" onClick={handClose}>
          <img className="closeImage" src={closeImage} alt="close" />
        </div>
      </div>
    </div>
  );
}

export default Banner
