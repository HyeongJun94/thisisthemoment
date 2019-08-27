import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import global from '../modules/global';

//css
import '../css/FAQ.css';

//images
import MainBannerPC from '../static/images/PC/FAQ/mainBanner.png';
import MainBannerAndroid from '../static/images/Android/FAQ/mainBanner.png';
import MainBannerTablet from '../static/images/Tablet/FAQ/mainBanner.png';


function DrawInfo(key) {
  // let item1 = 0;

  // const onChage

  if (key == 0) {
    return (
      <div className="info-content">
        <div>
          <h1>Q 사람들이 많이 찍지 않을까봐 걱정됩니다.</h1>
          <button>+</button>
          {/* { item1 == 1 ? DrawList1() : DrawList1()} */}
        </div>
        <div>
          <h1>Q &lt;지금이순간&gt;웨딩 포토부스 서비스 포함사항이 어떻게 되나요?</h1>
          <button>+</button>
        </div>
        <div>
          <h1>Q &lt;지금이순간&gt;웨딩 포토부스 이용시간은 어떻게 되나요?</h1>
          <button>+</button>
        </div>
        <div>
          <h1>Q 어르신분들과 어린 아이도 사진을 많이 찍나요?</h1>
          <button>+</button>
        </div>
        <div>
          <h1>Q &lt;지금이순간&gt;웨딩 포톱스 서비스 신청은 어떻게 하나요?</h1>
          <button>+</button>
        </div>
      </div>
    );
  } else if (key == 1) {
    return (
      <div className="info-content">
        key 1
      </div>
    ) 
  } else if (key == 2) {
    return (
      <div className="info-content">
        key 2
      </div>
    ) 
  } else if (key == 3) {
    return (
      <div className="info-content">
        key 3
      </div>
    ) 
  };
  
  return (
    <div className="info-content">
      hello
    </div>
  );
}

const DrawSections = ({ info, onChangeInfo }) => {
  // const [key,setKey] = useState(0);
  const sections = [
    { name: '서비스 관련 질문', value: 0 },
    { name: '비용 및 결제 관련 질문', value: 1 },
    { name: '스냅 관련 질문', value: 2 },
    { name: '웨딩홀 관련 질문', value: 3 },
  ];

  return (
    <div className="info">
      {sections.map(section => (
        <button
          onClick={onChangeInfo}
          value={section.value}
          style={ `${section.value}` == info ? { fontWeight: 'bold' } : {fontWeight: 'normal'} }>
          {section.name}
        </button>
      ))}
      {DrawInfo(info)}
    </div>
  );
}

const DrawWedding = () => (
  <div className="wedding">
    <h1>FAQ</h1>
    <h2>자주 묻는 질문</h2>
  </div>
);

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

function DrawPC(info, onChangeInfo) {
  return (
    <div className="root">
      {DrawMainBanner()}
      <div className="rootWidth">
        {DrawWedding()}
        <DrawSections info={info} onChangeInfo={onChangeInfo} />
        {/* {DrawSections()} */}
      </div>
    </div>
  );
}

function DrawTablet(info, onChangeInfo) {
  return (
    <div className="root">
      {DrawMainBanner()}
      {DrawWedding()}
      <DrawSections info={info} onChangeInfo={onChangeInfo} />geInfo} />
    </div>
  );
}

function DrawAndroid(info, onChangeInfo) {
  return (
    <div className="root">
      {DrawMainBanner()}
      {DrawWedding()}
      <DrawSections info={info} onChangeInfo={onChangeInfo} />
    </div>
  );
}

const FAQ = ({
  android, tablet, pc,
}) => {
  const [body, setBody] = useState(DrawPC());
  const [info, setInfo] = useState(0);

  const onChangeInfo = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    // console.log(info);
    if (e.target.value == 0) {
      setInfo(0);
    } else if (e.target.value == 1) {
      setInfo(1);
    } else if (e.target.value == 2) {
      setInfo(2);
    } else if (e.target.value == 3) {
      setInfo(3);
    }
  };

  useEffect(() => {
    if (android === true) {
      console.log('Draw Android');
      setBody(DrawAndroid(info, onChangeInfo));
    } else if (tablet === true) {
      setBody(DrawTablet(info, onChangeInfo));
    } else {
      console.log('Draw PC');
      setBody(DrawPC(info, onChangeInfo));
    }
  }, [android, tablet, pc, info]);
  return (
    <div>
      {body}
    </div>
  );
};

FAQ.propTypes = {
  android: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired,
  pc: PropTypes.bool.isRequired,
};

export default FAQ;
