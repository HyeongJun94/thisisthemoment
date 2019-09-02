import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import global from '../modules/global';

//css
import '../css/FAQ.css';

//images
import MainBannerPC from '../static/images/PC/FAQ/mainBanner.png';
import MainBannerAndroid from '../static/images/Android/FAQ/mainBanner.png';
import MainBannerTablet from '../static/images/Tablet/FAQ/mainBanner.png';

function Info1_1() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 걱정하지 마세요 :) 지금이순간 대표와 스태프가 직접 하객분들에게 스티커 사진을 찍고 메시지를 남길 수 있도록 안내해드립니다.
        </div>
      </Collapse>
    </>
  );
}

function Info1_2() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 포토티켓: 무제한으로 인화해드립니다
          <br />
          - 포토티켓 디자인 : 블랙,화이트,핑크 중 택 2 (2x6 inch)
          <br />
          - 포토 필터 : 컬러 / 흑백 / 중 택 1
          <br />
          - 포토 방명록 : 당일 완성되어 신혼여행때 바로 보실 수 있는 앨범
          <br />
          - 백그라운드 설치 : 커스터마이징
          <br />
          - 촬영용 조명 설치 : LED 30W(2구)
          <br />
          - DP 및 소품 : 드라이 플라워 / 캔들 / 액자 / 프롭스 / 테이블
          <br />
          - 하객전달용포장 : OPP투명봉투
          <br />
          - 웨딩 서브 스냅 : 그날의 분위기를 스냅사진으로 담아 편집 후 선물해드립니다.
          <br />
          - 이용시간 : 예식 시작 전 1시간 / 후 30분 (총 90분기본)
          <br />
          - STAFF 2인 지원
        </div>
      </Collapse>
    </>
  );
}

function Info1_3() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 하객분들이 제일 많은 시간 결혼식 60분 전부터 시작하여, 식후 30분까지 총 90분간 진행됩니다.
          <br />
          (웨딩홀과 고객님의 요청에 따라 변경 가능합니다. 변경을 원하시는 분은 문의주실때 말씀해주시면 감사드리겠습니다!)
        </div>
      </Collapse>
    </>
  );
}

function Info1_4() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 남녀노소 모두 즐겁고 부담없이 이용하실 수 있도록 지금이수간이 한분 한분 친절하게 안내드립니다.
        </div>
      </Collapse>
    </>
  );
}

function Info1_5() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. &lt;지금이순간&gt; 고객 상담 센터에 문의를 주시면, 빠른 상담을 통해 예약진행을 도와드립니다.
        </div>
      </Collapse>
    </>
  );
}

function Info2_1() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. - 짝궁 할인: 예식이 있는 친구분과 함께 예약하면 2분 모두 5만원 할인해드립니다.
          <br />
          - 후기 할인 : 저희가 지정해드리는 카페에 후기 남겨주시면 3만원 페이백 할인해드립니다.
          <br />
          (작성일을 기준으로 7일후 계좌로 지급됩니다!)
        </div>
      </Collapse>
    </>
  );
}

function Info2_2() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 현재 모든 결제는 계좌이체로 진행되고 있습니다.
          <br />
          현금 영수증 및 세금 계산서 발행이 가능하며, 발행 시 10%의 부가세가 포함됩니다.
        </div>
      </Collapse>
    </>
  );
}

function Info2_3() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 저희는 이용시간 연장 비용 외 다른 추가 비용은 일절 없습니다.
        </div>
      </Collapse>
    </>
  );
}

function Info3_1() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 본식 메인 스냅도 진행하고 있으며 문의 주시면 답변 드리겠습니다.
        </div>
      </Collapse>
    </>
  );
}

function Info3_2() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 원하시는 장수에 따라 견적을 안내 드리고 있습니다.
        </div>
      </Collapse>
    </>
  );
}

function Info4_1() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 청담 드레스 가든, 신도림 라마다 호텔, 수원 더 아리엘
        </div>
      </Collapse>
    </>
  );
}

function Info4_2() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 물론입니다. 전기가 확보 되어있는 곳이라면 설치가 가능합니다.
        </div>
      </Collapse>
    </>
  );
}

function Info4_3() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="light"
      >
        <p>+</p>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          A. 죄송합니다. 지방은 현재 서비스를 준비중입니다.
        </div>
      </Collapse>
    </>
  );
}

function DrawInfo(key) {
  if (key == 0) {
    return (
      <div className="info-content">
        <div>
          <h1>Q 사람들이 많이 찍지 않을까봐 걱정됩니다.</h1>
          {/* <button value="1" onClick={onToggleInfo}>+</button> */}
          <Info1_1 />
        </div>
        <div>
          <h1>Q &lt;지금이순간&gt;웨딩 포토부스 서비스 포함사항이 어떻게 되나요?</h1>
          <Info1_2 />
        </div>
        <div>
          <h1>Q &lt;지금이순간&gt;웨딩 포토부스 이용시간은 어떻게 되나요?</h1>
          <Info1_3 />
        </div>
        <div>
          <h1>Q 어르신분들과 어린 아이도 사진을 많이 찍나요?</h1>
          <Info1_4 />
        </div>
        <div>
          <h1>Q &lt;지금이순간&gt;웨딩 포톱스 서비스 신청은 어떻게 하나요?</h1>
          <Info1_5 />
        </div>
      </div>
    );
  } else if (key == 1) {
    return (
      <div className="info-content">
        <div>
          <h1>Q &lt;지금이순간&gt;할인은 어떤게 있나요?</h1>
          <Info2_1 />
        </div>
        <div>
          <h1>Q 결제는 어떻게 되나요?</h1>
          <Info2_2 />
        </div>
        <div>
          <h1>Q 다른 추가 비용이 있나요?</h1>
          <Info2_3 />
        </div>
      </div>
    ) 
  } else if (key == 2) {
    return (
      <div className="info-content">
        <div>
          <h1>Q 본식 메인 스냅도 촬영 하시나요?</h1>
          <Info3_1 />
        </div>
        <div>
          <h1>Q 스냅 사진을 추가로 진행할 수 있나요?</h1>
          <Info3_2 />
        </div>
      </div>
    ) 
  } else if (key == 3) {
    return (
      <div className="info-content">
        <div>
          <h1>Q &lt;지금이순간&gt;서비스가 진행 불가한 웨딩홀이 있나요?</h1>
          <Info4_1 />
        </div>
        <div>
          <h1>Q 야외 결혼식인데 설치가 가능할까요?</h1>
          <Info4_2 />
        </div>
        <div>
          <h1>Q 지방도 서비스가 가능한가요?</h1>
          <Info4_3 />
        </div>
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
      {/* {Example()} */}
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
      <DrawSections info={info} onChangeInfo={onChangeInfo} />
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
