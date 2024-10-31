import React from 'react';
import Navbar from './Navbar'; 
import '../assets/Order.scss'

const Order = () => {
    return (
        <div className="order-lookup">
            <Navbar />
            <h1>주문 찾기.</h1>
            <div className="order-lookup-content">
                <div className="login-section">
                    <h2>Apple ID로 로그인하세요.</h2>
                    <div className="input-group">
                        <input type="text" placeholder="이메일 또는 전화번호" />
                        <button>&#x2192;</button>
                    </div>
                    <div className="options">
                        <input type="checkbox" id="rememberId" />
                        <label htmlFor="rememberId">아이디 저장</label>
                    </div>
                    <a href="#">암호를 잊으셨습니까? ↗️ </a>
                </div>
                <div className="divider"> </div> {/* Vertical Divider */}
                <div className="order-number-section">
                    <h2>주문 번호로 조회하기.</h2>
                    <p>개별 주문 찾기.</p>
                    <div className="input-group">
                        <input type="text" placeholder="주문 번호" />
                        <input type="text" placeholder="이메일 주소" />
                    </div>
                    <button className="continue-btn">계속</button>
                    <a href="#">주문 번호 찾는 방법</a>
                </div>
            </div>
        </div>
    );
};

export default Order;
