import React from 'react';
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import '../assets/Navbar.scss';
import '../assets/common.scss';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <FaApple size={20} />
      </div>
      <nav className="navbar-menu">
        <ul>
          <li><a href="#">스토어</a></li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">AirPods</a></li>
          <li><a href="#">TV 및 홈</a></li>
          <li><a href="#">엔터테인먼트</a></li>
          <li><a href="#">액세서리</a></li>
          <li><a href="#">고객지원</a></li>
        </ul>
      </nav>
      <ul className="icon">
        <IoIosSearch size={20} />
        <IoBagOutline size={20} />
      </ul>
    </header>
  );
};

export default Navbar;
