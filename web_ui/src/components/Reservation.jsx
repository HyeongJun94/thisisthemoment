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
import MidImgPC2 from '../static/images/PC/Reservation/midImg2.png';
import MidImgPC3 from '../static/images/PC/Reservation/midImg3.png';
import MidImgPC4 from '../static/images/PC/Reservation/midImg4.png';
import MidImgTablet1 from '../static/images/Tablet/Reservation/midImg1.png';
import MidImgTablet2 from '../static/images/Tablet/Reservation/midImg2.png';
import MidImgTablet3 from '../static/images/Tablet/Reservation/midImg3.png';
import MidImgTablet4 from '../static/images/Tablet/Reservation/midImg4.png';
import MidImgAndroid1 from '../static/images/Android/Reservation/midImg1.png';
import MidImgAndroid2 from '../static/images/Android/Reservation/midImg2.png';
import MidImgAndroid3 from '../static/images/Android/Reservation/midImg3.png';
import MidImgAndroid4 from '../static/images/Android/Reservation/midImg4.png';
import InstagramIcon from '../static/images/PC/Main/Instagram.png';
import PhoneIcon from '../static/images/PC/Main/Phone.png';

const DrawContact = () => (
  <div className="contact">
    <h1>CONTACT</h1>
    <h2>지금이순간 웨딩 포토부스</h2>
    <line />
    <div>
      <a href="https://www.instagram.com/themoment_photobooth/">
        <img
          className="icon"
          src={InstagramIcon}
          alt=""
        />
      </a>
      <a href="tel:02-6315-0503">
        <img
          className="icon"
          src={PhoneIcon}
          alt=""
        />
      </a>
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
      console.log(`[Android]slide transition from ${oldIndex} to ${newIndex}`);
    }
  };

  const Slideshow = () => (
    <div className="slide-container3">
      <Slide {...properties}>
        <div className="each-slide3">
          <div style={{'backgroundImage': `url(${MidImgAndroid1})`}}>
            <span>
              <h1>지금이순간 예약 문의</h1>
              <h2>
                카카오톡에 &apos;지금이순간 플러스친구&apos;로 문의해주시면
                <br />
                빠르고 친절하게 안내해드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide3">
          <div style={{'backgroundImage': `url(${MidImgAndroid2})`}}>
            <span>
              <h1>신청서 송부 및 비용 안내</h1>
              <h2>지금이순간에서 송부 드리는 신청서 및 입금 부탁드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide3">
          <div style={{'backgroundImage': `url(${MidImgAndroid3})`}}>
            <span>
              <h1>커스터 마이징하기</h1>
              <h2>백그라운드와 템플릿을 원하시는 디자인으로 선택해주세요.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide3">
          <div style={{'backgroundImage': `url(${MidImgAndroid4})`}}>
            <span>
              <h1>지금이순간과 추억 만들기</h1>
              <h2>신랑신부님과 하객들의 소중한 기억을 추억으로 담아드리겠습니다.</h2>
            </span>
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
        <div className="each-slide2">
          <div style={{'backgroundImage': `url(${MidImgTablet1})`}}>
            <span>
              <h1>지금이순간 예약 문의</h1>
              <h2>카카오톡에 &apos;지금이순간 플러스친구&apos;로 문의해주시면 빠르고 친절하게 안내해드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide2">
          <div style={{'backgroundImage': `url(${MidImgTablet2})`}}>
            <span>
              <h1>신청서 송부 및 비용 안내</h1>
              <h2>지금이순간에서 송부 드리는 신청서 및 입금 부탁드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide2">
          <div style={{'backgroundImage': `url(${MidImgTablet3})`}}>
            <span>
              <h1>커스터 마이징하기</h1>
              <h2>백그라운드와 템플릿을 원하시는 디자인으로 선택해주세요.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide2">
          <div style={{'backgroundImage': `url(${MidImgTablet4})`}}>
            <span>
              <h1>지금이순간과 추억 만들기</h1>
              <h2>신랑신부님과 하객들의 소중한 기억을 추억으로 담아드리겠습니다.</h2>
            </span>
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
          <div style={{'backgroundImage': `url(${MidImgPC2})`}}>
            <span>
              <h1>신청서 송부 및 비용 안내</h1>
              <h2>지금이순간에서 송부 드리는 신청서 및 입금 부탁드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC3})`}}>
            <span>
              <h1>커스터 마이징하기</h1>
              <h2>백그라운드와 템플릿을 원하시는 디자인으로 선택해주세요.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${MidImgPC4})`}}>
            <span>
              <h1>지금이순간과 추억 만들기</h1>
              <h2>신랑신부님과 하객들의 소중한 기억을 추억으로 담아드리겠습니다.</h2>
            </span>
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
  <div className="info2">
    <h1>RESERVATION</h1>
    <h2>포토부스 예약하기</h2>
    <line1 />
    <h3>
      신부님과 직접 1:1로 상담을 통하여 예약을 도와드립니다.
      <br />
      카카오톡 플러스친구로 지역/날짜/시간/웨딩홀 송부해주시면 보다 빠른 상담이 가능합니다.
    </h3>
    <a href="https://pf.kakao.com/_xmXvWC/chat">1:1 카카오톡 상담 시작하기</a>
  </div>
);

const DrawInfoAndroid = () => (
  <div className="info2">
    <h1>RESERVATION</h1>
    <h2>포토부스 예약하기</h2>
    <line1 />
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
      {/* {DrawCorePC()} */}
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
