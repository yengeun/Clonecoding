import React, { useState, useRef } from 'react';
import '../assets/Main1.scss';

const Main1 = () => {
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
    <div className="main1">
      <h2><span>최신 제품.</span> 따끈따끈한 신제품 이야기.</h2>
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
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1726165763242" alt="iPhone 16 Pro" />
            <div className="card-info">
              <h3>iPhone 16 Pro</h3>
              <p>궁극의 iPhone.</p>
              <span>₩1,550,000부터</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724095131742" alt="Apple Watch Series 10" />
            <div className="card-info2">
              <h3>Apple Watch Series 10</h3>
              <p>얇아진 두께. 더 커진 존재감.</p>
              <span>₩599,000부터</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-16-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725661572506" alt="iPhone 16" />
            <div className="card-info">
              <h3>iPhone 16</h3>
              <p>막강한 성능.</p>
              <span>₩1,250,000부터</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655434794" alt="Apple Watch Ultra 2" />
            <div className="card-info">
              <h3>Apple Watch Ultra 2</h3>
              <p>블랙으로 계속되는 전력 질주.</p>
              <span>₩1,149,000부터</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-airpods-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1722974321259" alt="AirPods 4" />
            <div className="card-info2">
              <h3>AirPods 4</h3>
              <p>아이콘의 귀환, 사운드의 진화.</p>
              <span>기본 모델 ₩199,000</span>
              <span>액티브 노이즈 캔슬링 모델 ₩269,000부터</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-airpods-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1722974321164" alt="AirPods Pro 2" />
            <div className="card-info">
              <h3>AirPods Pro 2</h3>
              <p>첨단 청각 건강 기능 탑재.</p>
              <span>₩349,000</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-airpods-max-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725895773753" alt="AirPods Max" />
            <div className="card-info2">
              <h3>AirPods Max</h3>
              <p>새로운 5가지 색상. 풍성한 사운드.</p>
              <span>₩769,000</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595" alt="MacBook Air" />
            <div className="card-info2">
              <h3>MacBook Air</h3>
              <p>어디서나 종횡무진할 수 있도록.</p>
              <span>₩1,390,000</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877" alt="iPad Air" />
            <div className="card-info2">
              <h3>iPad Air</h3>
              <p>새 바람이 불다.</p>
              <span>₩899,000부터</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-pro-202310?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1696964122967" alt="MacBook Pro" />
            <div className="card-info2">
              <h3>MacBook Pro</h3>
              <p>비교 불가 성능, 시선 강탈 매력.</p>
              <span>₩2,390,000부터</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816" alt="iPad Pro" />
            <div className="card-info">
              <h3>iPad Pro</h3>
              <p>불가능이란 얇다.</p>
              <span>₩1,499,000부터</span>
            </div>
          </div>
        </div>
        {scrollIndex < 11 && ( 
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

export default Main1;
