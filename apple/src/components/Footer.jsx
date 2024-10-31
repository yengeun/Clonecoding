import React from 'react';
import '../assets/Footer.scss';

const Footer = () => {
  const openOrder = () => {
    window.open('/Order', '_blank');
  };

  return (
    <div className="Footer">
      <h2>빠른 링크</h2>
      <button onClick={openOrder}>주문상태 ↗</button>
      <button>쇼핑 도움말 ↗</button>
      <button>반품 ↗</button>
      <button>관심 목록 ↗</button>
    </div>
  );
};

export default Footer;
