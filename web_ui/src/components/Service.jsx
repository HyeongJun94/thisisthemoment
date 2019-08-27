import React, { useState, useEffect } from 'react';
import PropTypes, { func } from 'prop-types';

import global from '../modules/global';

import { Slide } from 'react-slideshow-image';

//css
import '../css/Service.css';

//imagaes
import MainBannerPC from '../static/images/PC/Service/mainBanner.png';
import MainBannerTablet from '../static/images/Tablet/Service/mainBanner.png';
import MainBannerAndroid from '../static/images/Android/Service/mainBanner.png';
import SlideImg1 from '../static/images/PC/Service/slideImg1.png';
import Item1 from '../static/images/PC/Service/item1.png';
import Left1PC from '../static/images/PC/Service/left1.png'
import Left1Tablet from '../static/images/Tablet/Service/left1.png'
import Left1Android from '../static/images/Android/Service/left1.png'
import Right2PC from '../static/images/PC/Service/right2.png'
import Right2Tablet from '../static/images/Tablet/Service/right2.png'
import Right2Android from '../static/images/Android/Service/right2.png'



const DrawService = () => (
  <div className="service">
    <h1>SERVICE</h1>
    <h2>웨딩 포토부스 서비스 진행은 어떻게 되나요?</h2>
    <div className="service-container">
      <div className="left-item1">
        <picture>
          <source media="(max-width: 720px)" srcSet={Left1Android} />
          <source media="(max-width: 1280px)" srcSet={Left1Tablet} />
          <source media="(min-width: 1280px)" srcSet={Left1PC} />
          <img
            className="mainBannerImage"
            src={Left1Android}
            alt=""
          />
        </picture>
      </div>
      <div className="right-item1">
        <h1>지금 이 순간 MOMENT 스냅이란?</h1>
        <h2>
          포토부스 운영시간 동안 신부 대기실, 본식 초반
          <br />
          신랑 신부님 위주로 촬영되는 스냅입니다. 식을
          <br />
          기준일로 2주 후,10~12장을 예쁘게 보정하여 이 ????
        </h2>
        <h3>
          (※원본사진은 제공이 불가하여 보정본은 식을 기준일로 30일 안으로 재용청이 가능
          <br />
          합니다. 30일 후에는 고객님의 개인정보 보호를 위해 영구 삭제됩니다.)
        </h3>
      </div>
      <div className="left-item2">
        <h1>지금이순간 MOMENT SNAP</h1>
        <h2>
          [제공 사항]
          <br />
          - 원본 200장이상 보정 10~12장
          <br />
          - 대표 1인 촬영
          <br />
          - 포토부스가 운영되는 시간(90분)동안
          <br />
          - 신랑, 신부님 촬영
        </h2>
        <a>MOMENT SNAP</a>
      </div>
      <div className="right-item2">
        <picture>
          <source media="(max-width: 720px)" srcSet={Right2Android} />
          <source media="(max-width: 1280px)" srcSet={Right2Tablet} />
          <source media="(min-width: 1280px)" srcSet={Right2PC} />
          <img
            className="mainBannerImage"
            src={Right2Android}
            alt=""
          />
        </picture>
      </div>
    </div>
  </div>
);

const DrawProduct = () => (
  <div className="product">
    <h1>PRODUCT</h1>
    <h2>웨딩 포토부스 기본 제공 사항</h2>
    <div className="product-container">
      <div className="item1">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>웨딩포토부스</h1>
      </div>
      <div className="item2">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>포토방명록</h1>
      </div>
      <div className="item3">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src={Item1}
            alt=""
          />
        </picture>
        <h1>백그라운드</h1>
      </div>
      <div className="item4">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>가렌드</h1>
      </div>
      <div className="item5">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>포토테이블</h1>
      </div>
      <div className="item6">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>포토템플릿</h1>
      </div>
      <div className="item7">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>테이블액자</h1>
      </div>
      <div className="item8">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>프롭스</h1>
      </div>
      <div className="item9">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>OPP봉투</h1>
      </div>
      <div className="item10">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>웨딩 부케</h1>
      </div>
      <div className="item11">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>스튜디오 조명</h1>
      </div>
      <div className="item12">
        <picture>
          <source media="(min-width: 1280px)" srcSet={Item1} />
          <img
            className="mainBannerImage"
            src= {Item1}
            alt=""
          />
        </picture>
        <h1>진행 인원 2명</h1>
      </div>
    </div>
  </div>
);

function DrawSlideShow() {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };

  const ServiceInfo = () => (
    <div className="info">
      <h1>SERVICE</h1>
      <h2>웨딩 포토부스 서비스 진행은 어떻게 되나요?</h2>
    </div>
  );

  const Slideshow = () => (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${SlideImg1})`}}>
            <span>
              <h1>지금이순간 예약 문의</h1>
              <h2>카카오톡에 &apos;지금이순간 플러스친구&apos;로 문의해주시면 빠르고 친절하게 안내해드립니다.</h2>
            </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${SlideImg1})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${SlideImg1})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
  return (
    <div>
      {ServiceInfo()}
      {Slideshow()}
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
        {DrawSlideShow()}
        {DrawProduct()}
        {DrawService()}
      </div>
    </div>
  );
}

function DrawTablet() {
  return (
    <div className="rootWidth">
      {DrawMainBanner()}
      {DrawSlideShow()}
      {DrawProduct()}
      {DrawService()}
    </div>
  );
}

function DrawAndroid() {
  return (
    <div className="rootWidth">
      {DrawMainBanner()}
      {DrawSlideShow()}
      {DrawProduct()}
      {DrawService()}
    </div>
  );
}

const Service = ({
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

Service.propTypes = {
  android: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired,
  pc: PropTypes.bool.isRequired,
};

export default Service;
