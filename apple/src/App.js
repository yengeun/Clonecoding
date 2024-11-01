import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Main4 from './components/Main4';
import Main5 from './components/Main5';
import Main6 from './components/Main6';
import Main7 from './components/Main7';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import HeaderShopping from './components/HeaderShopping';
import Order from './components/Order'; 
import Connection from './components/Connection';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Main page Route */}
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Header />
                        <Main1 />
                        <Main2 />
                        <Main3 />
                        <Main4 />
                        <Main5 />
                        <Main6 />
                        <Main7 />
                        <Footer />
                        <Footer2 />
                    </>
                } />
                
            
                <Route path="/HeaderShopping" element={<HeaderShopping />} />
                <Route path="/Connection" element={<Connection />} />
                <Route path="/Order" element={<Order />} />
            </Routes>
        </Router>
    );
}

export default App;
