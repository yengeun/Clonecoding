import React from 'react';
import '../assets/HeaderShopping.scss'; // Import your SCSS file for styling

const HeaderShopping = () => {
  return (
    <div className="header-shopping-container">
      <div className="header-shopping-content">
        <img 
          src="https://contactretail.apple.com/dist/static/imgs/defaultAgentImages/retina/BlueCARInterstitial/Specialist-CAR-Header-636x370.png" 
          alt="Support" 
          className="support-image"
        />
        <h1>도움이 필요하신가요?</h1>
        <div className="section">
            <h4>가지고 있는 제품에 대한 지원이 필요합니다.</h4>
            <p>갖고 계신 Apple 제품 또는 이용 중인 Apple<br />서비스와 관련하여 도움이 필요하신가요?</p>
            <button className="button-group">Apple 지원 방문하기</button>
        </div>
        <hr/>
        <div className="section">
            <h4>주문 관련 도움이 필요합니다.</h4>
            <p>주문 처리 상태를 확인하거나 주문을 변경하고<br />싶으신가요?</p>
            <button className="button-group">주문 찾기</button>
        </div>
        <hr />
        <div className="section">
            <h4>제품 구입에 대한 도움이 필요합니다.</h4>
            <p>Apple 제품에 관한 자세한 정보나 제품 구입과<br/>관련한 도움이 필요하신가요?</p>
            <button className="button-group">스페셜리스트에게 문의</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderShopping;
