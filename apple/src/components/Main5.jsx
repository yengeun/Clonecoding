import React, { useState, useRef } from 'react';
import '../assets/Main1.scss';

const Main5 = () => {
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
    <div className="main5">
      <h2><span>생생하게 들리는 차이.</span>풍부한 고품질 사운드를 원한다면 필연적인 선택.</h2>
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
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-applemusic-202110?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1633644705000" alt="a1" />
            <div className="card-info2">
              <h3>Apple Music 3개월 무료 이용<br/>혜택.</h3>
              <p>해당 Apple 기기 구입 시 혜택 제공.<sup>+</sup></p>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724041669458" alt="a2" />
            <div className="card-info4">
              <p>무료 각인</p>
              <h3>AirPods Pro 2</h3>
              <span>₩349,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1682361480894" alt="a3" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1682985972906" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1682361466573" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLJ3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693952267374" />
            </div>
            <div className="card-info4">
              <h3>Beats Studio Buds + 진정한 무선<br/>노이즈 캔슬링 이어버드 - 투명</h3>
              <span>₩229,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1725502639798" alt="airpod4" />
            <div className="card-info4">
              <p>무료 각인</p>
              <h3>AirPds 4 액티브 노이즈 캔슬링 모델</h3>
              <span>₩269,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724927451276" alt="a5" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-blue_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724046212237" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-purple_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724047056470" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-midnight_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724047056495" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-starlight_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724047423112" />
              <img src= "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-orange_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724047056468" />
              
            </div>
            <div className="card-info4">
              <p>무료 각인</p>
              <h3>AirPds Max - 미드나이트</h3>
              <span>₩769,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MAX24?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1727302305596" alt="a6" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MAX24_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1727302297479" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MAX44_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1727302297479" />
            </div>
            <div className="card-info4">
              <p>NEW</p>
              <h3>Beats Pill - 킴 카다시안 스페셜 에디션<br/>- 라이트 그레이</h3>
              <span>₩219,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW33?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1712255584823" alt="a7" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MW443_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1716251399673" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW43_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1712255582735" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW33_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1712255582736" />
            </div>
            <div className="card-info4">
              <p>NEW</p>
              <h3>Beats Solo 4 - 온이어 wireless<br/>헤드폰 - 클라우드 핑크</h3>
              <span>₩269,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWQW3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1716251412396" alt="a8" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MW443_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1716251399673" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWQW3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1716251399672" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MW463_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1716251399673" />
            </div>
            <div className="card-info4">
              <p>NEW</p>
              <h3>Beats Pill - 무선 Bluetooth®<br/>스피커 - 볼드 레드</h3>
              <span>₩219,000</span>
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

export default Main5;
