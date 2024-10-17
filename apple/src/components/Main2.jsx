import React, { useState, useRef } from 'react';
import '../assets/Main2.scss';

const Main2 = () => {
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
    <div className="main2">
      <h2><span>도움의 손길.</span>언제든, 당신에게 맞는 방식으로.</h2>
      <div className="cards-wrapper">
        {scrollIndex > 0 && (
          <button className="arrowl" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
            </svg>
          </button>
        )}
        <div className="cards-container" ref={cardsRef}>
          <div className="card2">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821" alt="1" />
            <div className="card-info2">
              <span>APPLE 스페셜리스트</span>
              <h3>스페셜리스트와 함께하는 일대일 쇼핑.<br></br>온라인에서도 매장에서도.</h3>
            </div>
          </div>
          <div className="card2">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145" alt="2" />
            <div className="card-info2">
              <span>TODAY AT APPLE</span>
              <h3>Apple Store의 무료 세션에 참여해<br></br>보세요.</h3>
              <p>최신 기능과 더불어 Apple 기기를 더욱 심도 있게 활용하는 법을<br></br>알아보세요.</p>
            </div>
          </div>
          <div className="card2">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-personal-setup-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1727714996748" alt="3" />
            <div className="card-info2">
              <span>일대일 가이드</span>
              <h3>새로 산 기기와 더 친숙해지고 싶다면?<br></br>개인 맞춤 설정 세션에 참여해보세요.</h3>
              <p>설정 및 데이터 전송 방법부터 최신 기능 사용법까지 온라인 세션에서<br></br>배워보세요.</p>
            </div>
          </div>
          <div className="card2">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375544000" alt="4" />
            <div className="card-info2">
              <h3>Genius Bar에서 직접 전문가의 도움을<br></br>받을 수 있습니다.</h3>
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

export default Main2;
