import React, { useState, useRef } from 'react';
import '../assets/Main7.scss';


const Main7 = () => {
  const [scrollIndex, setScrollIndex] = useState(0); // Track the current scroll position
  const cardsRef = useRef(null); // Reference for the cards container
  const totalCards = 12; // Total number of cards

  // Define the card width (adjust based on your design)
  const cardWidth = 400; 

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      cardsRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollIndex < totalCards - 1) { // Adjust the number based on the total cards
      setScrollIndex(scrollIndex + 1);
      cardsRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="main7">
      <h2><span>특별 할인.</span>비즈니스, 학교 등을 위한 혜택.</h2>
      <div className="cards-wrapper">
        {scrollIndex > 0 && (
          <button className="arrowl" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
            </svg>
          </button>
        )}
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
        {scrollIndex < 14 && ( 
          <button className="arrowr" onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Main7;
