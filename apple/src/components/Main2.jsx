import React from 'react';
import '../assets/Main1.scss';

const Main1 = () => {
  return (
    <div className="main1">
      <h2><span>도움의 손길.</span> 언제든, 당신에게 맞는 방식으로.</h2>
      <div className="cards-container">
        <div className="card">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-16-pro?wid=400&hei=260&fmt=jpeg&qlt=90&.v=1701194050273" alt="iPhone 16 Pro" />
          <div className="card-info">
            <h3>iPhone 16 Pro</h3>
            <p>궁극의 iPhone.</p>
            <span>₩1,550,000부터</span>
          </div>
        </div>
        <div className="card">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-series-10?wid=400&hei=260&fmt=jpeg&qlt=90&.v=1701194050273" alt="Apple Watch Series 10" />
          <div className="card-info">
            <h3>Apple Watch Series 10</h3>
            <p>얇아진 두께. 더 커진 존재감.</p>
            <span>₩599,000부터</span>
          </div>
        </div>
        <div className="card">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-16?wid=400&hei=260&fmt=jpeg&qlt=90&.v=1701194050273" alt="iPhone 16" />
          <div className="card-info">
            <h3>iPhone 16</h3>
            <p>막강한 성능.</p>
            <span>₩1,250,000부터</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
