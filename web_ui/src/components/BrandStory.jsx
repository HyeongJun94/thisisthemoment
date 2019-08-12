import React from 'react';

import global from '../modules/global';

//images
import MainBannerPC from '../static/images/PC/BrandStory/mainBanner.png';
import MainBannerPC2X from '../static/images/PC/BrandStory/mainBanner@2x.png';
import MainBannerAndroid from '../static/images/Android/BrandStory/mainBanner.png';
import MainBannerAndroid2X from '../static/images/Android/BrandStory/mainBanner@2x.png';
import Right1PC from '../static/images/PC/BrandStory/right-1.png';
import Right1Android from '../static/images/Android/BrandStory/right-1.png';
import Right1Android2X from '../static/images/Android/BrandStory/right-1@2x.png';
import Right2Android from '../static/images/Android/BrandStory/right-2.png';
import Right2Android2X from '../static/images/Android/BrandStory/right-2@2x.png';
import Right3Android from '../static/images/Android/BrandStory/right-3.png';
import Right3Android2X from '../static/images/Android/BrandStory/right-3@2x.png';
import LogoPC from '../static/images/PC/BrandStory/logo.png';
import LogoPC2X from '../static/images/PC/BrandStory/logo@2x.png';
import LogoAndroid from '../static/images/Android/BrandStory/logo.png';
import LogoAndroid2X from '../static/images/Android/BrandStory/logo@2x.png';
import FinalBannerPC from '../static/images/PC/BrandStory/finalBanner.png';
import FinalBannerPC2X from '../static/images/PC/BrandStory/finalBanner@2x.png';
import FinalBannerAndroid from '../static/images/Android/BrandStory/finalBanner.png';
import FinalBannerAndroid2x from '../static/images/Android/BrandStory/finalBanner@2x.png';

//css
import '../css/BrandStory.css';

const finalContentAndroid = () => (
  <div className="finalContent">
    <h1>
      지금이순간 웨딩 포토부스
    </h1>
    <h2>
      식빵
      신랑 신부님의 소중한 결혼식은 하객들과 함께 즐길 수 있는 날입니다.
      <br />
      신랑 신부님의 결혼식은 인생에 단 한번뿐인 특별한 날입니다.
      <br />
      포토부스에서 하객들과 사진을 찍고 포토 방명록에 
      <br />
      메시지를 남겨 그날을 기념합니다.
      <br />
      <br />
      예약문의는 카카오톡 플러스친구로 문의주시면
      <br />
      친절하게 상담 도와드리겠습니다.
    </h2>
    <a href="https://pf.kakao.com/_xmXvWC/chat">1:1 카카오톡 상담 시작하기</a>
  </div>
);

const finalContentPC = () => (
  <div className="finalContent">
    <h1>
      지금이순간 웨딩 포토부스
    </h1>
    <h2>
      신랑 신부님의 소중한 결혼식은 하객들과 함께 즐길 수 있는 날입니다.
      <br />
      신랑 신부님의 결혼식은 인생에 단 한번뿐인 특별한 날입니다.
      <br />
      포토부스에서 하객들과 사진을 찍고 포토 방명록에 메시지를 남겨 그날을 기념합니다.
      <br />
      <br />
      예약문의는 카카오톡 플러스친구로 문의주시면
      <br />
      친절하게 상담 도와드리겠습니다.
      <br />

    </h2>
    <a href="https://pf.kakao.com/_xmXvWC/chat">1:1 카카오톡 상담 시작하기</a>
  </div>
);

function DrawFinalInfo(media) {
  return (
    <div>
      {media === global.ANDROID ? finalContentAndroid() : finalContentPC()}
    </div>
  );
}

function DrawFinalBanner() {
  return (
    <picture>
      <source media="(max-width: 360px)" srcSet={FinalBannerAndroid} />
      <source media="(max-width: 720px)" srcSet={FinalBannerAndroid2x} />
      <source media="(max-width: 1280px)" srcSet={FinalBannerPC} />
      <source media="(min-width: 1280px)" srcSet={FinalBannerPC2X} />
      <img
        className="finalImage"
        src={FinalBannerAndroid}
        alt=""
      />
    </picture>
  );
}

function DrawLogo() {
  return (
    <div className="logo">
      <picture>
        <source media="(max-width: 360px)" srcSet={LogoAndroid} />
        <source media="(max-width: 720px)" srcSet={LogoAndroid2X} />
        <source media="(max-width: 1280px)" srcSet={LogoPC} />
        <source media="(min-width: 1280px)" srcSet={LogoPC2X} />
        <img
          className="logoImage"
          src={LogoAndroid}
          alt=""
        />
      </picture>
      <h1>WEDDING PHOTO-BOOTH</h1>
    </div>
  );
}

function DrawSolution() {
  return (
    <div className="solution">
      <div className="title">
        <h1>SOLUTION</h1>
        <h2>저희는 이렇게 생각해보았습니다.</h2>
      </div>
      <div className="leftItem1">
        <div className="solutionContent">
          <h1>01</h1>
          <h2>하객분들의 지금이순간을 담아 드립니다.</h2>
          <h3>하객분들이 세 컷의 사진을 찍으며 신랑신부님과 기쁨을 나눕니다.</h3>
        </div>
      </div>
      <div className="rightItem1">
        <picture>
          <source media="(max-width: 360px)" srcSet={Right1Android} />
          <source media="(max-width: 720px)" srcSet={Right1Android2X} />
          <source media="(max-width: 1280px)" srcSet={Right1PC} />
          <img
            className="solutionImage"
            src={Right1PC}
            alt=""
          />
        </picture>
      </div>
      <div className="leftItem2">
        <div className="solutionContent">
          <h1>02</h1>
          <h2>하객분들이 직접 신랑 신부님의 영원을 축복합니다.</h2>
          <h3>
          하객분들이 신랑 신부님에게 사진 한 장과
          <br />
          정성스레 쓰인 축하의 메시지를 남깁니다.
          </h3>
        </div>
      </div>
      <div className="rightItem2">
        <picture>
          <source media="(max-width: 360px)" srcSet={Right2Android} />
          <source media="(max-width: 720px)" srcSet={Right2Android2X} />
          <source media="(max-width: 1280px)" srcSet={Right1PC} />
          <img
            className="solutionImage"
            src={Right1PC}
            alt=""
          />
        </picture>
      </div>
      <div className="leftItem3">
        <div className="solutionContent">
          <h1>03</h1>
          <h2>하객분들의 순간들을 담은 책자를 신랑 신부님에게 선물해드립니다.</h2>
          <h3>
          신랑 신부님이 앞으로 함께하여
          언제든지 꺼내서 볼 수 있는 포토방명록을 드립니다.
          </h3>
        </div>
      </div>
      <div className="rightItem3">
        <picture>
          <source media="(max-width: 360px)" srcSet={Right3Android} />
          <source media="(max-width: 720px)" srcSet={Right3Android2X} />
          <source media="(max-width: 1280px)" srcSet={Right1PC} />
          <img
            className="solutionImage"
            src={Right1PC}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
}

function DrawMainBannerAndroid() {
  return (
    <picture>
      <source media="(max-width: 360px)" srcSet={MainBannerAndroid} />
      <source media="(min-width: 360px)" srcSet={MainBannerAndroid2X} />
      <img
        className="bannerImage"
        src={MainBannerAndroid}
        alt=""
      />
    </picture>
  );
}

const contentAndroid = () => (
  <h3>
  하객들이 신부님의 결혼식을 기억할 수 있을까요?
  <br />
  결혼식은 정말 쉴새 없이 흘러가는 &apos;순간&apos;입니다.
  <br />
  하객들은 이 순간에 휩쓸려 정신이 없습니다.
  <br />
  하객들은 신부님께 축하를 전하고 싶고 순간을 간직하고 싶지만,
  <br />
  평범한 방법으로는 불가능하죠.
  <br />
  이런 문제를 어떻게 해결할 수 있을까요?
  </h3>
);

const contentPC = () => (
  <h3>
  하객들이 신부님의 결혼식을 기억할 수 있을까요? 결혼식은 정말 쉴새 없이 흘러가는 &apos;순간&apos;입니다.
  <br />
  하객들은 이 순간에 휩쓸려 정신이 없습니다. 하객들은 신부님께 축하를 전하고 싶고
  <br />
  순간을 간직하고 싶지만, 평범한 방법으로는 불가능하죠.
  <br />
  이런 문제를 어떻게 해결할 수 있을까요?
  </h3>
);

function DrawInfo(media) {
  return (
    <div className="info">
      <line />
      <h1>BRAND STORY</h1>
      <h2>결혼식을 기억하지 못하는 하객들과 슬픈 신부님들을 위하여</h2>
      {media === global.ANDROID ? contentAndroid() : contentPC() }
      <line2 />
    </div>
  );
}

function DrawMainBannerPC() {
  return (
    <picture>
      <source media="max-width: 1280px" srcSet={MainBannerPC} />
      <source media="min-width: 1280px" srcSet={MainBannerPC2X} />
      <img
        className="bannerImage"
        src={MainBannerPC}
        alt=""
      />
    </picture>
  );
}

function DrawMainBanner(media) {
  return (
    <div>
      {media === global.ANDROID ? DrawMainBannerAndroid() : DrawMainBannerPC()}
    </div>
  );
}

function DrawPC() {
  return (
    <div className="topRoot">
      {DrawMainBanner(global.PC)}
      <div className="root">
        {DrawInfo(global.PC)}
      </div>
      {DrawSolution()}
      {DrawLogo()}
      {DrawFinalBanner()}
      <div className="root">
        {DrawFinalInfo(global.PC)}
      </div>
    </div>
  );
}

function DrawAndroid() {
  return (
    <div className="root">
      {DrawMainBanner(global.ANDROID)}
      {DrawInfo(global.ANDROID)}
      {DrawSolution()}
      {DrawLogo()}
      {DrawFinalBanner()}
      {DrawFinalInfo(global.ANDROID)}
    </div>
  );
}

const BrandStory = ({ android }) => {
  return (
    <div>
      {android ? DrawAndroid() : DrawPC()}
    </div>
  );
};

export default BrandStory;
