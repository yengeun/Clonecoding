import React, { useState, useRef } from 'react';
import '../assets/Main1.scss';

const Main4 = () => {
  const [scrollIndex, setScrollIndex] = useState(0); // Track the current scroll position
  const cardsRef = useRef(null); // Reference for the cards container
  const totalCards = 12; // Total number of cards

  // Define the card width (adjust based on your design)
  const cardWidth = 400; 

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      cardsRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollIndex < totalCards - 1) { // Adjust the number based on the total cards
      setScrollIndex(scrollIndex + 1);
      cardsRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="main4">
      <h2><span>액세서리.</span>즐겨 사용하는 기기들과 완벽하게 페어링되는 여러 가지 필수품.</h2>
      <div className="cards-wrapper">
        {scrollIndex > 0 && (
          <button className="arrowl" onClick={scrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
            </svg>
          </button>
        )}
        <div className="cards-container" ref={cardsRef}>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-accessories-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723822259651" alt="a1" />
            <div className="card-info2">
              <h3>새로움을 입다</h3>
              <p>당신의 최애 액세서리들. 이제 대담한 새 색상, 그리고<br />혁신적인 신기능과 함께. </p>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7E4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723930332796" alt="a2" />
            <div className="card-info4">
              <p>NEW</p>
              <h3>MagSafe형 iPhone 16 Pro 투명<br />케이스</h3>
              <span>₩69,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724186591572" alt="a3" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL73_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724298866568" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL83_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724298868354" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL53_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724298870467" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL33ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724298870486" />
              <img src= "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL63_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724298866591" />
            </div>
            <div className="card-info4">
              <p>NEW</p>
              <h3>46mm 플럼 스포츠 루프</h3>
              <span>₩65,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXKF3ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723919328571" alt="a4" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXKC3ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724284017035" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXKF3ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724284014784" />
            </div>
            <div className="card-info4">
              <p>NEW</p>
              <h3>49mm 블랙 티타늄 밀레니즈 루프 - M</h3>
              <span>₩285,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYY63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723236736369" alt="a5" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYY73_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690292925" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYY63_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690292473" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYY83_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690292633" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYY53_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690292380" />
              <img src= "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYY33_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690292977" />
              <img src= "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYY43_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690294993" />
            </div>
            <div className="card-info4">
              <p>NEW</p>
              <h3>MagSafe형 iPhone 16 실리콘<br/>케이스 - 울트라마린</h3>
              <span>₩69,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA6X4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723573541193" alt="a6" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA6Y4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690482379" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA6W4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690482358" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA6X4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690482434" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7A4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690482371" />
            </div>
            <div className="card-info4">
              <p>NEW</p>
              <h3>MagSafe형 iPhone 파인우븐<br/>카드지갑 - 딥 블루</h3>
              <span>₩85,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX6X3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724257154789" alt="a7" />
            <div className="card-info4">
              <p>NEW</p>
              <h3>MagSafe 충전기(1m)</h3>
              <span>₩65,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MC2V4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1727989775810" alt="a8" />
            <div className = "colorstack">
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MC2Q4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1727443177575" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MC2V4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1727443177576" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1682985972906" />
              <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW33_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1712255582736" />
            </div>
            <div className="card-info4">
              <p>NEW</p>
              <h3>iPad mini(A17 Pro 모델)용 Smart<br/>Folio - 세이지</h3>
              <span>₩89,000</span>
            </div>
          </div>
          <div className="card4">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713841707336" alt="a9" />
            <div className="card-info4">
              <p>무료 각인</p>
              <h3>Apple Pencil Pro</h3>
              <span>₩195,000</span>
            </div>
          </div>
          <div className="card">
            <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-accessories-explore-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728266907826"/>
            <div className="card-info2">
              <h3>모든 액세서리를 살펴보세요.</h3>
            </div>
          </div>
        </div>
        {scrollIndex < 14 && ( 
          <button className="arrowr" onClick={scrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
              <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Main4;
