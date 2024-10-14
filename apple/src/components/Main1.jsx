import React, { useState, useRef } from 'react';
import '../assets/Main1.scss';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

const Main1 = () => {
  const [scrollIndex, setScrollIndex] = useState(0); // Track the current scroll position
  const cardsRef = useRef(null); // Reference for the cards container

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      cardsRef.current.scrollBy({ left: -400, behavior: 'smooth' }); // Adjust the scroll step size to match your card width
    }
  };

  const scrollRight = () => {
    if (scrollIndex < 12) { // Adjust the number based on how many cards can be scrolled
      setScrollIndex(scrollIndex + 1);
      cardsRef.current.scrollBy({ left: 400, behavior: 'smooth' }); // Scroll right by the card width
    }
  };

  return (
    <div className="main1">
      <h2><span>최신 제품.</span> 따끈따끈한 신제품 이야기.</h2>
      <div className="cards-wrapper">
        {scrollIndex > 0 && (
          <div className="arrow left-arrow" onClick={scrollLeft}>
            <IoIosArrowDropleftCircle />
          </div>
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
            <div className="card-info">
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
        {scrollIndex < 11 && ( // Adjust based on total scroll steps
          <div className="arrow right-arrow" onClick={scrollRight}>
            <IoIosArrowDroprightCircle />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main1;
