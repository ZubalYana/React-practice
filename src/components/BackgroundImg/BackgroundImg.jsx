import React from 'react';
import backgroundImg from '../../assets/backgroundImg.png';
import './BackgroundImg.css';
const MyComponent = () => {
  return (
    <div>
      <img src={backgroundImg} alt="Background" />
    </div>
  );
};

export default MyComponent;