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
import SlideImgPC1 from '../static/images/PC/Service/slideImg1.png';
import SlideImgPC2 from '../static/images/PC/Service/slideImg2.png';
import SlideImgPC3 from '../static/images/PC/Service/slideImg3.png';
import SlideImgTablet1 from '../static/images/Tablet/Service/slideImg1.png';
import SlideImgTablet2 from '../static/images/Tablet/Service/slideImg2.png';
import SlideImgTablet3 from '../static/images/Tablet/Service/slideImg3.png';
import SlideImgAndroid1 from '../static/images/Android/Service/slideImg1.png';
import SlideImgAndroid2 from '../static/images/Android/Service/slideImg2.png';
import SlideImgAndroid3 from '../static/images/Android/Service/slideImg3.png';
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
        <div>
          <h1>지금 이 순간 MOMENT 스냅이란?</h1>
          <h2>
            포토부스 운영시간 동안 신부 대기실, 본식 초반
            {/* <br /> */}
            <line className="tmp" />
            신랑 신부님 위주로 <line className="tmp3" /> 촬영되는 <line className="tmp2" />스냅입니다. 식을
            {/* <br /> */}
            <line className="tmp" />
            기준일로 2주 후,10~12장을 예쁘게 보정<line className="tmp3" />하여 이 
            <line className="tmp" />
            메일로 송부<line className="tmp2" />드립니다.
          </h2>
          <h3>
            (※원본사진은 제공이 불가하여 보정본은 식을 기준일로 30일 안으로 재용청이 가능
            <br />
            합니다. 30일 후에는 고객님의 개인정보 보호를 위해 영구 삭제됩니다.)
          </h3>
        </div>
      </div>
      <div className="left-item2">
        <div>
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

const DrawProduct = ({ media }) => {
  const sections = [
    {
      name: '웨딩포토부스',
      className: 'item1',
      srcImg: 'item1',
    },
    {
      name: '포토방명록',
      className: 'item2',
      srcImg: 'item2',
    },
    {
      name: '백그라운드',
      className: 'item3',
      srcImg: 'item3',
    },
    {
      name: '가랜드',
      className: 'item4',
      srcImg: 'item4',
    },
    {
      name: '포토테이블',
      className: 'item5',
      srcImg: 'item5',
    },
    {
      name: '포토템플릿',
      className: 'item6',
      srcImg: 'item6',
    },
    {
      name: '테이블 액자',
      className: 'item7',
      srcImg: 'item7',
    },
    {
      name: '프롭스',
      className: 'item8',
      srcImg: 'item8',
    },
    {
      name: 'OPP 봉투',
      className: 'item9',
      srcImg: 'item9',
    },
    {
      name: '웨딩 부케',
      className: 'item10',
      srcImg: 'item10',
    },
    {
      name: '스튜디오 조명',
      className: 'item11',
      srcImg: 'item11',
    },
    {
      name: '진행 인원 2명',
      className: 'item12',
      srcImg: 'item12',
    },
  ];

  return (
    <div className="product">
      <h1>PRODUCT</h1>
      <h2>웨딩 포토부스 기본 제공 사항</h2>
      <div className="product-container">
        {sections.map(section => (
          <div className={section.className}>
            <picture>
              <img
                className="mainBannerImage"
                src={require(`../static/images/${media}/Service/${section.srcImg}.png`)}
                // src={require(`../static/images/PC/Service/item1.png`)}
                // src={require(`../static/images/${media}/Service/item1.png`)}
                // src={require(`../static/images/PC/Service/${section.srcImg}.png`)}
                alt=""
              />
            </picture>
            <h1>{section.name}</h1>
          </div>
        ))}
      </div>

    </div>
  );
}

const ServiceInfo = () => (
  <div className="my-info">
    <h1>SERVICE</h1>
    <h2>웨딩 포토부스 서비스 진행은 어떻게 되나요?</h2>
  </div>
);
function DrawSlideShowAndroid() {
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
    <div className="slide-container-service3">
      <Slide {...properties}>
        <div className="each-slide-service3">
          <div style={{'backgroundImage': `url(${SlideImgAndroid1})`}}>
            <span>
              <h1>01</h1>
              <h2>하객분들의 지금이순간을 담아드립니다.</h2>
              <h3>하객분들이 세 컷의 사진을 찍으며 신랑신부님과 기쁨을 나눕니다.</h3>
            </span>
          </div>
        </div>
        <div className="each-slide-service3">
          <div style={{'backgroundImage': `url(${SlideImgAndroid2})`}}>
            <span>
              <h1>02</h1>
              <h2>하객분들이 직접 신랑 신부님의 영원을 축복합니다.</h2>
              <h3>
                하객분들이 신랑 신부님에게 사진 한 장과
                <br />
                정성스레 쓰인 축하의 메시지를 남깁니다.
              </h3>
            </span>
          </div>
        </div>
        <div className="each-slide-service3">
          <div style={{'backgroundImage': `url(${SlideImgAndroid3})`}}>
            <span>
              <h1>03</h1>
              <h2>
                하객분들의 순간들을 담은 책자를 신랑 신부님에게
                {/* <br/> */}
                선물해드립니다.
              </h2>
              <h3>
                신랑 신부님이 앞으로 함께하며
                {/* <br /> */}
                언제든지 꺼내서 볼 수 있는 포토방명록을 드립니다.
              </h3>
            </span>
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

function DrawSlideShowTablet() {
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
    <div className="slide-container-service2">
      <Slide {...properties}>
        <div className="each-slide-service2">
          <div style={{'backgroundImage': `url(${SlideImgTablet1})`}}>
            <span>
              <h1>01</h1>
              <h2>하객분들의 지금이순간을 담아드립니다.</h2>
              <h3>하객분들이 세 컷의 사진을 찍으며 신랑신부님과 기쁨을 나눕니다.</h3>
            </span>
          </div>
        </div>
        <div className="each-slide-service2">
          <div style={{'backgroundImage': `url(${SlideImgTablet2})`}}>
            <span>
              <h1>02</h1>
              <h2>하객분들이 직접 신랑 신부님의 영원을 축복합니다.</h2>
              <h3>
                하객분들이 신랑 신부님에게 사진 한 장과
                {/* <br /> */}
                정성스레 쓰인 축하의 메시지를 남깁니다.
              </h3>
            </span>
          </div>
        </div>
        <div className="each-slide-service2">
          <div style={{'backgroundImage': `url(${SlideImgTablet3})`}}>
            <span>
              <h1>03</h1>
              <h2>
                하객분들의 순간들을 담은 책자를 신랑 신부님에게
                {/* <br/> */}
                선물해드립니다.
              </h2>
              <h3>
                신랑 신부님이 앞으로 함께하며
                {/* <br /> */}
                언제든지 꺼내서 볼 수 있는 포토방명록을 드립니다.
              </h3>
            </span>
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


function DrawSlideShowPC() {
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
    <div className="slide-container-service">
      <Slide {...properties}>
        <div className="each-slide-service">
          <div style={{'backgroundImage': `url(${SlideImgPC1})`}}>
            <span>
              <h1>01</h1>
              <h2>하객분들의 지금이순간을 담아드립니다.</h2>
              <h3>하객분들이 세 컷의 사진을 찍으며 신랑신부님과 기쁨을 나눕니다.</h3>
            </span>
          </div>
        </div>
        <div className="each-slide-service">
          <div style={{'backgroundImage': `url(${SlideImgPC2})`}}>
            <span>
              <h1>02</h1>
              <h2>하객분들이 직접 신랑 신부님의 영원을 축복합니다.</h2>
              <h3>
                하객분들이 신랑 신부님에게 사진 한 장과
                <br />
                정성스레 쓰인 축하의 메시지를 남깁니다.
              </h3>
            </span>
          </div>
        </div>
        <div className="each-slide-service">
          <div style={{'backgroundImage': `url(${SlideImgPC3})`}}>
            <span>
              <h1>03</h1>
              <h2>
                하객분들의 순간들을 담은 책자를 신랑 신부님에게
                <br/>
                선물해드립니다.
              </h2>
              <h3>
                신랑 신부님이 앞으로 함께하며
                <br />
                언제든지 꺼내서 볼 수 있는 포토방명록을 드립니다.
              </h3>
            </span>
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
        {DrawSlideShowPC()}
        <DrawProduct media="PC" />
        {DrawService()}
        <div className="empty" />
      </div>
    </div>
  );
}

function DrawTablet() {
  return (
    <div className="rootWidth">
      {DrawMainBanner()}
      {DrawSlideShowTablet()}
      <DrawProduct media="Tablet" />
      {DrawService()}
    </div>
  );
}

function DrawAndroid() {
  return (
    <div className="rootWidth">
      {DrawMainBanner()}
      {DrawSlideShowAndroid()}
      <DrawProduct media="Android" />
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
      console.log('Draw Tablet');
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
