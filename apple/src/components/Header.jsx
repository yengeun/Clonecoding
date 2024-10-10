import React from 'react';
import '../assets/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="top-section">
        <h1>
          <span>스토어.</span> 좋아하는 Apple 제품을<br />
          구입하는 가장 좋은 방법.
        </h1>
        <div className="right-side">
          <div className="support-box">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202309_AV1?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050273" alt="Support" />
            <div className="text">
                <p>쇼핑 지원이 필요하다면?</p>
                <a href="#">스페셜리스트에게 문의하세요</a>
            </div>
          </div>
          <div className="store-box">
            <span className="apple-icon"></span> 
            <div className="text">
                <p>Apple Store를 방문하세요</p>
                <a href="#">가까운 매장 찾기</a>
            </div>
          </div>
        </div>
      </div>
   
    
       <div className="products-wrapper">
        <div className="product">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666" alt="Mac" />
          <p>Mac</p>
        </div>
        <div className="product">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723857138230" alt="iPhone" />
          <p>iPhone</p>
        </div>
        <div className="product">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875" alt="iPad" />
          <p>iPad</p>
        </div>
        <div className="product">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838" alt="Apple Watch" />
          <p>Apple Watch</p>
        </div>
        <div className="product">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822" alt="AirPods" />
          <p>AirPods</p>
        </div>
        <div className="product">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" alt="AirTag" />
          <p>AirTag</p>
        </div>
        <div className="product">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" alt="Apple TV 4K" />
          <p>Apple TV 4K</p>
        </div>
        <div className="product">
          <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174" alt="액세서리" />
          <p>액세서리</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
