import React, { useState, useRef } from 'react';
import '../assets/Main3.scss';
import { IoCardOutline } from "react-icons/io5";

const Main3 = () => {
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
    <div className="main3">
      <h2><span>남다른 Apple Store.</span>이곳에서 쇼핑해야 하는 더욱더 많은 이유.</h2>
      <div className="cards-wrapper">
        {scrollIndex > 0 && (
          <button className="arrowl" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
            </svg>
          </button>
        )}
        <div className="cards-container" ref={cardsRef}>
          <div className="card">
            <div className="card-info">
              <IoCardOutline color = "green" size = "50" style={{ backgroundColor: 'transparent' }}  />
              <h3>기분좋은 결제 옵션.</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <h3>Apple Watch Ultra 2</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <h3>Apple Watch Ultra 2</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <h3>Apple Watch Ultra 2</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <h3>Apple Watch Ultra 2</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <h3>Apple Watch Ultra 2</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <h3>Apple Watch Ultra 2</h3>
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

export default Main3;
