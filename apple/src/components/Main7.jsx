import React, { useState, useRef } from 'react';
import '../assets/Main7.scss';


const Main7 = () => {
  const cardsRef = useRef(null); 
  return (
    <div className="main7">
      <h2><span>특별 할인.</span>비즈니스, 학교 등을 위한 혜택.</h2>
      <div className="cards-wrapper">
        
        
        
        <div className="cards-container" ref={cardsRef}>
          <div className="card7">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202406?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1716334899885" alt="iPhone 16 Pro" />
            <div className="card-info2">
              <p>교육</p>
              <h3>교육 할인가로 새로운 iPad 또는<br/>Mac을 더 부담 없이.<sup>3</sup></h3>
            </div>
          </div>
          <div className="card7">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-business-202409_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1724793636533" alt="Apple Watch Series 10" />
            <div className="card-info">
              <span>비즈니스</span>
              <h3>대기업부터 중소기업까지<br/>Apple이 함께합니다.<sup>3</sup></h3>
            </div>
          </div>
          <div className="card7">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-refurb-202408_GEO_KR?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1722037990131" alt="iPhone 16" />
            <div className="card-info2">
              <span>인증 리퍼비쉬 제품</span>
              <h3>1년 보증이 제공되는 리퍼비쉬<br/>Apple 제품을 쇼핑하세요.</h3>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Main7;
