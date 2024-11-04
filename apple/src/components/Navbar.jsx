import React from 'react';
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import '../assets/Navbar.scss';
import '../assets/common.scss';

const Navbar = () => {
    return (
        <header className="nav">
            <div className="nav__inner">
                <div className="nav__logo">
                    <a href="#"><FaApple size={20} /></a>
                </div>
                <nav className="nav__menu">
                    <ul>
                        <li className="menu-item">
                            <a href="#">스토어</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column1">
                                        <h4>쇼핑하기</h4>
                                        <ul>
                                            <li>최신 제품 쇼핑하기</li>
                                            <li>MAC</li>
                                            <li>iPad</li>
                                            <li>iPhone</li>
                                            <li>Apple Watch</li>
                                            <li>액세서리</li>
                                        </ul>
                                        <h4>빠른 링크</h4>
                                        <ul>
                                            <li>매장 찾기</li>
                                            <li>주문 상태</li>
                                            <li>Apple Trade In</li>
                                            <li>할부 방식</li>
                                        </ul>
                                        <h4>특별 할인 쇼핑하기</h4>
                                        <ul>
                                            <li>인증 리퍼비쉬 제품</li>
                                            <li>교육</li>
                                            <li>비즈니스</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">MAC</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column2">
                                        <h3>MAC</h3>
                                        <ul>
                                            <li>전체보기</li>
                                            <li>백팩</li>
                                            <li>숄더 / 토트백</li>
                                            <li>메신저 / 크로스백</li>
                                            <li>슬링백 / 허쉘</li>
                                            <li>모자</li>
                                            <li>양말</li>
                                            <li>테니스</li>
                                            <li>기타</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">iPad</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column3">
                                        <h3>iPad</h3>
                                        <ul>
                                            <li>전체보기</li>
                                            <li>패키지</li>
                                            <li>와이어브라</li>
                                            <li>노와이어브라</li>
                                            <li>데일리브라탑</li>
                                            <li>스포츠브라탑</li>
                                            <li>팬티</li>
                                            <li>사각드로즈</li>
                                            <li>이지웨어</li>
                                            <li>파자마</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">iPhone</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column4">
                                        <h3>iPhone</h3>
                                        <ul>
                                            <li>테니스</li>
                                            <li>러닝/트레이닝</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">Watch</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column5">
                                        <h3>Watch</h3>
                                        <ul>
                                            <li>AirPods</li>
                                            <li>러닝/트레이닝</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">AirPods</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column6">
                                        <h3>AirPods</h3>
                                        <ul>
                                            <li>테니스</li>
                                            <li>러닝/트레이닝</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">TV 및 홈</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column7">
                                        <h3>TV 및 홈</h3>
                                        <ul>
                                            <li>테니스</li>
                                            <li>러닝/트레이닝</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">엔터테인먼트</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column8">
                                        <h3>엔터테인먼트</h3>
                                        <ul>
                                            <li>테니스</li>
                                            <li>러닝/트레이닝</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">액세서리</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column9">
                                        <h3>액세서리</h3>
                                        <ul>
                                            <li>테니스</li>
                                            <li>러닝/트레이닝</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="menu-item">
                            <a href="#">고객지원</a>
                            <div className="dropdown">
                                <div className="dropdown-menu">
                                    <div className="dropdown-column10">
                                        <h3>고객지원</h3>
                                        <ul>
                                            <li>테니스</li>
                                            <li>러닝/트레이닝</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="nav__icons">
                    <a href="#"><IoIosSearch size={20} /></a>
                    <a href="#"><IoBagOutline size={20} /></a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
