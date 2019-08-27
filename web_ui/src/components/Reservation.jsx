import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import global from '../modules/global';

import { Slide } from 'react-slideshow-image';
// import Carousel from 'react-bootstrap/Carousel';

//css
import '../css/Reservation.css';

//imagaes
import MainBannerPC from '../static/images/PC/Reservation/mainBanner.png';
import MainBannerTablet from '../static/images/Tablet/Reservation/mainBanner.png';
import MainBannerAndroid from '../static/images/Android/Reservation/mainBanner.png';
import MidImgPC1 from '../static/images/PC/Reservation/midImg1.png';
// import MidImgAndroid1 from '../static/images/Android/Reservation/midImg1.png';
// import MidImgTablet1 from '../static/images/Tablet/Reservation/midImg1.png';
import InstagramIcon from '../static/images/PC/Main/Instagram.png';
import PhoneIcon from '../static/images/PC/Main/Phone.png';

const DrawContact = () => (
  <div className="contact">
    <h1>CONTACT</h1>
    <h2>지금이순간 웨딩 포토부스</h2>
    <line />
    <div>
      <img
        className="icon"
        src={InstagramIcon}
        alt=""
      />
      <img
        className="icon"
        src={PhoneIcon}
        alt=""
      />
    </div>
  </div>
);
function DrawCoreAndroid() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    autoplay: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };

  const Slideshow = () => (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>
              <h1>지금이순간 예약 문의</h1>
              <h2>카카오톡에 &apos;지금이순간 플러스친구&apos;로 문의해주시면 빠르고 친절하게 안내해드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
  return (
    <div>
      {Slideshow()}
    </div>
  );
}
function DrawCoreTablet() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    autoplay: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };

  const Slideshow = () => (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>
              <h1>지금이순간 예약 문의</h1>
              <h2>카카오톡에 &apos;지금이순간 플러스친구&apos;로 문의해주시면 빠르고 친절하게 안내해드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
  return (
    <div>
      {Slideshow()}
    </div>
  );
}

function DrawCorePC() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    autoplay: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };

  const Slideshow = () => (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>
              <h1>지금이순간 예약 문의</h1>
              <h2>카카오톡에 &apos;지금이순간 플러스친구&apos;로 문의해주시면 빠르고 친절하게 안내해드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC1})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
  return (
    <div>
      {Slideshow()}
    </div>
  );
}

const DrawWedding = () => (
  <div className="wedding">
    <h1>WEDDING PHOTO-BOOTH</h1>
    <h2>지금이순간 포토부스를 만나는 방법</h2>
  </div>
);

const DrawInfoPC = () => (
  <div className="info">
    <h1>RESERVATION</h1>
    <h2>포토부스 예약하기</h2>
    <line />
    <h3>
      신부님과 직접 1:1로 상담을 통하여 예약을 도와드립니다.
      <br />
      카카오톡 플러스친구로 지역/날짜/시간/웨딩홀 송부해주시면 보다 빠른 상담이 가능합니다.
    </h3>
    <a href="https://pf.kakao.com/_xmXvWC/chat">1:1 카카오톡 상담 시작하기</a>
  </div>
);

const DrawInfoAndroid = () => (
  <div className="info">
    <h1>RESERVATION</h1>
    <h2>포토부스 예약하기</h2>
    <line />
    <h3>
      신부님과 직접 1:1로 상담을 통하여 예약을 도와드립니다.
      <br />
      카카오톡 플러스친구로 지역/날짜/시간/웨딩홀
      <br />
      송부해주시면 보다 빠른 상담이 가능합니다.
    </h3>
    <a href="https://pf.kakao.com/_xmXvWC/chat">1:1 카카오톡 상담 시작하기</a>
  </div>
)

function DrawInfo(media) {
  return (
    <div>
      { media === global.ANDROID ? DrawInfoAndroid() : DrawInfoPC() }
    </div>
  );
}

const DrawMainBanner = () => (
  <picture>
    <source media="(max-width: 720px)" srcSet={MainBannerAndroid} />
    <source media="(max-width: 1280px)" srcSet={MainBannerTablet} />
    <source media="(min-width: 1280px)" srcSet={MainBannerPC} />
    <img
      className="mainBannerImage"
      src={MainBannerAndroid}
      alt=""
    />
  </picture>
);

function DrawPC() {
  return (
    <div>
      {DrawMainBanner()}
      <div className="rootWidth">
        {DrawInfo(global.PC)}
        {DrawWedding()}
        {DrawCorePC()}
        {DrawContact()}
      </div>
    </div>
  );
}

function DrawTablet() {
  return (
    <div className="root">
      {DrawMainBanner()}
      {DrawInfo(global.TABLET)}
      {DrawWedding()}
      {DrawCoreTablet()}
      {DrawContact()}
    </div>
  );
}

function DrawAndroid() {
  return (
    <div className="root">
      {DrawMainBanner()}
      {DrawInfo(global.ANDROID)}
      {DrawWedding()}
      {DrawCoreAndroid()}
      {DrawContact()}
    </div>
  );
}

const Reservation = ({
  android, tablet, pc,
}) => {
  const [body, setBody] = useState(DrawPC());

  useEffect(() => {
    if (android === true) {
      console.log('Draw Android');
      setBody(DrawAndroid());
    } else if (tablet === true) {
      setBody(DrawTablet());
    } else {
      console.log('Draw PC');
      setBody(DrawPC());
    }
  }, [android, tablet, pc]);
  return (
    <div>
      {body}
    </div>
  );
};

Reservation.propTypes = {
  android: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired,
  pc: PropTypes.bool.isRequired,
};

export default Reservation;
