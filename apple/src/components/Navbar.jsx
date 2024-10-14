import React, { useState } from 'react';
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import '../assets/Navbar.scss';
import '../assets/common.scss';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar-menu">
        <ul>
          <li>
            <a href="#"><FaApple size={20} /></a>
          </li>
          <li 
            className="has-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">스토어</a>
            <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <div className="dropdown-column">
                <h4>쇼핑하기</h4>
                <ul>
                  <li><a href="#">최신 제품 쇼핑하기</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">iPad</a></li>
                  <li><a href="#">iPhone</a></li>
                  <li><a href="#">Apple Watch</a></li>
                  <li><a href="#">액세서리</a></li>
                </ul>
              </div>
              <div className="dropdown-column">
                <h4>빠른 링크</h4>
                <ul>
                  <li><a href="#">매장 찾기</a></li>
                  <li><a href="#">주문 상태</a></li>
                  <li><a href="#">Apple Trade In</a></li>
                  <li><a href="#">할부 방식</a></li>
                </ul>
              </div>
              <div className="dropdown-column">
                <h4>특별 할인 쇼핑하기</h4>
                <ul>
                  <li><a href="#">인증 리퍼비쉬 제품</a></li>
                  <li><a href="#">교육</a></li>
                  <li><a href="#">비즈니스</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">AirPods</a></li>
          <li><a href="#">TV 및 홈</a></li>
          <li><a href="#">엔터테인먼트</a></li>
          <li><a href="#">액세서리</a></li>
          <li><a href="#">고객지원</a></li>
          <li><a href="#"><IoIosSearch size={20} /></a></li>
          <li><a href="#"><IoBagOutline size={20} /></a></li>
        </ul>
      </nav>
      {/* 드롭다운 열렸을 때 배경 블러 처리 */}
      <div className={`overlay ${isDropdownOpen ? 'blur' : ''}`} />
    </header>
  );
};

export default Navbar;
