import React from 'react';
import './ShopButton.css';

export default function ShopButton({ className }) {
  return (
    <div className={`shopButtonCon ${className}`}>
      <div className="shopButton">SHOP NOW</div>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
    </div>
  );
}
