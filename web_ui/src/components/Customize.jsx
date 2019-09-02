import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import global from '../modules/global';
//css
import '../css/Customize.css';
//images
import MainBannerPC from '../static/images/PC/Customize/mainBanner.png';
import MainBannerAndroid from '../static/images/Android/Customize/mainBanner.png';
import MainBannerTablet from '../static/images/Tablet/Customize/mainBanner.png';

const PhotoTemplate = 0;
const Garland = 1;
const Background = 2;
const Invitation = 3;

const Drawgarland3 = () => (
  <div>
    <h3>
      신랑신부님의 웨딩 촬영에서  가장 많이 사용된 컨셉이 바로 킨포크 웨딩 컨셉입니다.
      <br />
      <br />
      바쁘고 정신없는 기존의 결혼식에 여유로움과 느긋함 그리고 품격을 하객분들에게 전달하세요!
    </h3>
  </div>
);

const Drawgarland2 = () => (
  <div>
    <h3>
      신랑신부님을 축복하러 온 하객들분들 사이사이에 수줍게 서서 이순간을 함께하는 블러싱 바인입니다.
      <br />
      <br />
      비록 지금은 다른 곳에 있지만 모든 순간을 하객분들과 함께 하고픈 마음을 전달하세요!
    </h3>
  </div>
);

const Drawgarland1 = () => (
  <div>
    <h3>
      영원한 아름다움, 변치 않는 사랑을 지닌 스토크 꽃이 두 팔 넓게 벌려 하객들을 반갑게 맞이해줍니다.
      <br />
      <br />
      신랑신부님의 영원한 사랑을 기원하는 하객분들을 두팔 벌려 맞이해주세요!
    </h3>
  </div>
);

function DrawGarandInfo(key) {
  let body = 'hello';
  
  if (key == 0) {
    body = Drawgarland1();
  } else if (key == 1) {
    body = Drawgarland2();
  } else if (key == 2) {
    body = Drawgarland3();
  } 
  return (
    <div className="myinfo">
      { body }
    </div>
  );
}

const DrawGarland = ({ media }) => {
  const sections = [
    {
      name: 'HUGGING STOKES',
      name_kor: '허깅 스토크',
      className: 'item1',
      srcImg: 'garland1',
      info: '0',
    },
    {
      name: 'BLUHSHING VINE',
      name_kor: '블러싱 바인',
      className: 'item2',
      srcImg: 'garland2',
      info: '1',
    },
    {
      name: 'KINFOLK LEAVES',
      name_kor: '킨포크립스',
      className: 'item3',
      srcImg: 'garland3',
      info: '2',
    },
  ];
  return (
    <div>
      <div className="wedding">
        <h1>GARLAND</h1>
        <h2>가렌드</h2>
      </div>
      <div className="grid-container">
        {sections.map(section => (
          <div className={section.className}>
            <picture>
              <img
                className="mainBannerImage"
                src={require(`../static/images/${media}/Customize/${section.srcImg}.png`)}
                alt={section.value}
              />
            </picture>
            <h1>{section.name}</h1>
            <h2>{section.name_kor}</h2>
            {DrawGarandInfo(`${section.info}`)}
            {/* hello */}
          </div>
        ))}
      </div>
    </div>
  );
};

const DrawInvitation = ({ media }) => {
  const sections = [
    {
      name: 'SNOWY PURE WHITE',
      name_kor: '스누위 퓨어 화이트',
      className: 'item1',
      srcImg: 'photoTemplate1',
      info: '0',
    },
    {
      name: 'ALL WELCOMING BLACK',
      name_kor: '올 웰커밍 블랙',
      className: 'item2',
      srcImg: 'photoTemplate2',
      info: '1',
    },
    {
      name: 'BLOOM BLOOM PINK',
      name_kor: '블룸블룸 블루',
      className: 'item3',
      srcImg: 'photoTemplate3',
      info: '2',
    },
  ];
  return (
    <div>
      <div className="wedding">
        <h1>PHOTO TEMPLATE</h1>
        <h2>포토템플릿</h2>
      </div>
      <div className="grid-container">
        {sections.map(section => (
          <div className={section.className}>
            <picture>
              <img
                className="mainBannerImage"
                src={require(`../static/images/${media}/Customize/${section.srcImg}.png`)}
                alt={section.value}
              />
            </picture>
            <h1>{section.name}</h1>
            <h2>{section.name_kor}</h2>
            {DrawBackgroundInfo(`${section.info}`)}
            {/* hello */}
          </div>
        ))}
      </div>
    </div>
  );
};

// const DrawPhtoTemplate = () => (
//   <div>
//     Photo Template
//   </div>
// );

const DrawPhtoTemplate = ({ media }) => {
  const sections = [
    {
      name: 'SNOWY PURE WHITE',
      name_kor: '스누위 퓨어 화이트',
      className: 'item1',
      srcImg: 'photoTemplate1',
      info: '0',
    },
    {
      name: 'ALL WELCOMING BLACK',
      name_kor: '올 웰커밍 블랙',
      className: 'item2',
      srcImg: 'photoTemplate2',
      info: '1',
    },
    {
      name: 'BLOOM BLOOM PINK',
      name_kor: '블룸블룸 블루',
      className: 'item3',
      srcImg: 'photoTemplate3',
      info: '2',
    },
  ];
  return (
    <div>
      <div className="wedding">
        <h1>PHOTO TEMPLATE</h1>
        <h2>포토템플릿</h2>
      </div>
      <div className="grid-container">
        {sections.map(section => (
          <div className={section.className}>
            <picture>
              <img
                className="mainBannerImage"
                src={require(`../static/images/${media}/Customize/${section.srcImg}.png`)}
                alt={section.value}
              />
            </picture>
            <h1>{section.name}</h1>
            <h2>{section.name_kor}</h2>
            {DrawBackgroundInfo(`${section.info}`)}
            {/* hello */}
          </div>
        ))}
      </div>
    </div>
  );
};

const weddingLace = () => (
  <div>
    <h3>
    예쁜 웨딩 드레스를 연상시키는 &apos;웨딩 레이스&apos; 입니다.
    <br/>
    <br/>
    드레스원단에 많이 사용 되는 화이트 망사 원단에 셔링을 풍성하게 잡아 아름다운 주름이 특징인 백그라운드입니다. 
    <br/>
    <br/>
    섬세한 셔링 하나하나에 정성스러운 마음을 담아 하객분들에게 특별한 선물을 드리고 싶습니다.
    <br/>
    <br/>
    아름답고 정성스러운 마음을 &apos;웨딩 레이스&apos;로 지금 이 순간을 담으세요.
    </h3>
  </div>
);

const skyBlue = () => (
  <div>
    <h3>
    바다에 비친 하늘을 담은 &apos;스카이블루&apos; 입니다.
    <br/>
    <br/>
    넓디 넓은 바다의 고요한 한가운데는 자신에게 비추어지는 풍경들을 파도로 부수지 않습니다. 그리고 이내 하늘을 자신의 품에 담습니다. 그런 바다에서 헤엄을 친다면 하늘을 나는 것과 같을 겁니다.
    <br/>
    <br/>
    신랑신부님의 영원에 비추어질 지금 이 순간들을 모두 담고 싶습니다. 지금 이 순간을 헤엄치는 하객분들이 영원에서 훨훨 나는 모습을 담고싶습니다.
    <br/>
    <br/>
    하늘을 품는 넓은 바다처럼 &apos;라메르 스카이블루&apos;로 지금 이 순간을 품으세요!
    </h3>
  </div>
);

const theMommentPink = () => (
  <div>
    <h3>
    붉으스레 피어올라 가까이 갈수록 멀어지고 잡으면 날아 가버릴 것만 같은 더모먼트 핑크 입니다. 마치 지금 이 '순간' 처럼 말입니다.
    <br/>
    <br/>
    금방이라도 날아갈 것만 같은 수줍은 더모먼트 핑크를 포토에 담듯이 결혼식 하객분들의 찰나의 순간들을 신랑신부님의 영원에 담고자 합니다.
    <br/>
    <br/>
    찰나이기에 영원히 아름다울 더모먼트 핑크처럼 '더모먼트 핑크'로 지금 이 순간을 담으세요!
    </h3>
  </div>
);

const pureWhite = () => (
  <div>
    <h3>
    지금 이순간의 꾸준한 스테디셀러 &apos;퓨어 화이트&apos;입니다.
    <br/>
    <br/>
    흰색하면 무엇이 떠오르시나요? 깨끗, 정직, 순수,숭고.
    {/* <br/> */}
    우유의 흰색, 달의 흰색, 조개껍질의 흰색, 드레스의 흰색.
    <br/>
    <br/>
    신랑신부님과 하객 모두의 봄꽃을 피우는 &apos;순간&apos;이 오길
    {/* <br/> */}
    바라며 &apos;화이트&apos;로 다정한 환영의 인사를 건넵니다.
    <br/>
    <br/>
    그 어떤 색이 섞여도 그대로 받아들이는 흰색처럼 그 누가 와
    {/* <br/> */}
    도 자연스레 어울릴 &apos;퓨어 화이트&apos;로 지금 이순간을 피우세요.  
    </h3>
  </div>
);


function DrawBackgroundInfo(key) {
  let body = 'hello';
  
  if (key == 0) {
    body = pureWhite();
  } else if (key == 1) {
    body = theMommentPink();
  } else if (key == 2) {
    body = skyBlue();
  } else if (key == 3) {
    body = weddingLace();
  };
  return (
    <div className="myinfo">
      { body }
    </div>
  );
}

const DrawBackground = ({ media }) => {
  const sections = [
    {
      name: 'PURE WHITE',
      name_kor: '퓨어 화이트',
      className: 'item1',
      srcImg: 'background1',
      info: '0',
    },
    {
      name: 'THEMOMENT PINK',
      name_kor: '더모먼트 링크',
      className: 'item2',
      srcImg: 'background2',
      info: '1',
    },
    {
      name: 'SKY BLUE',
      name_kor: '스카이블루',
      className: 'item3',
      srcImg: 'background3',
      info: '2',
    },
    {
      name: 'WEDDI LACE',
      name_kor: '웨딩 레이스',
      className: 'item4',
      srcImg: 'background4',
      info: '3',
    },
  ];
  return (
    <div>
      <div className="wedding">
        <h1>BACKGROUND</h1>
        <h2>백그라운드</h2>
      </div>
      <div className="grid-container">
        {sections.map(section => (
          <div className={section.className}>
            <picture>
              <img
                className="mainBannerImage"
                src={require(`../static/images/${media}/Customize/${section.srcImg}.png`)}
                alt={section.value}
              />
            </picture>
            <h1>{section.name}</h1>
            <h2>{section.name_kor}</h2>
            {DrawBackgroundInfo(`${section.info}`)}
            {/* hello */}
          </div>
        ))}
      </div>
    </div>
  );
};

const DrawSections = ({ info, media, onChangeInfo }) => {
  // console.log(media)
  const sections = [
    {
      name: 'PHOTO TEMPLATE',
      name_kor: '포토템플릿',
      className: 'item1',
      value: PhotoTemplate,
      srcImg: 'photoTemplate',
      // srcImg: 'mainBanner',
    },
    {
      name: 'GARLAND',
      name_kor: '가랜드',
      className: 'item2',
      value: Garland,
      srcImg: 'garland',
      // srcImg: 'mainBanner',
    },
    {
      name: 'BACKGROUND',
      name_kor: '백그라운드',
      className: 'item3',
      value: Background,
      srcImg: 'background1',
      // srcImg: 'mainBanner',
    },
    {
      name: 'INVITATION',
      name_kor: '청첩장',
      className: 'item4',
      value: Invitation,
      srcImg: 'photoTemplate',
      // srcImg: 'mainBanner',
    },
  ];
  return (
    <div className="tmp">
      <div className="wedding">
        <h1>CUSTOMIZING</h1>
        <h2>커스터마이징</h2>
      </div>
      <div className="grid-container">
        {sections.map(section => (
          <div className={section.className}>
            <picture>
              {/* <source media="(max-width: 720px)" srcSet={tmp} /> */}
              {/* <source media="(max-width: 1280px)" srcSet={tmp} /> */}
              {/* <source media="(min-width: 1280px)" srcSet={tmp} /> */}
              <img
                className="mainBannerImage"
                onClick={onChangeInfo}
                src={require(`../static/images/${media}/Customize/${section.srcImg}.png`)}
                // src={require(`../static/images/${media}/Customize/photoTemplate.png`)}
                alt={section.value}
              />
            </picture>
            <h1>{section.name}</h1>
            <h2>{section.name_kor}</h2>
          </div>
        ))}
      </div>
      {info}
    </div>
  );
};

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
    <div>
      {DrawMainBanner()}
      <div className="rootWidth">
        <DrawSections info={info} media="PC" onChangeInfo={onChangeInfo} />
      </div>
      <div className="empty" />
    </div>
  );
}

function DrawTablet(info, onChangeInfo) {
  return (
    <div className="root">
      {DrawMainBanner()}
      <DrawSections info={info} media="Android" onChangeInfo={onChangeInfo} />
      <div className="empty" />
    </div>
  );
}

function DrawAndroid(info, onChangeInfo) {
  return (
    <div className="root">
      {DrawMainBanner()}
      <DrawSections info={info} media="Tablet" onChangeInfo={onChangeInfo}/>
      <div className="empty" />
    </div>
  );
}

const Customize = ({
  android, tablet, pc,
}) => {
  const [body, setBody] = useState(DrawPC());
  const [media, setMedia] = useState("PC");
  const [info, setInfo] = useState(<DrawBackground media={media} />);

  const onChangeInfo = (e) => {
    e.preventDefault();

    if (e.target.alt == PhotoTemplate) {
      setInfo(<DrawPhtoTemplate media={media} />);
    } else if (e.target.alt == Garland) {
      setInfo(<DrawGarland media={media} />);
    } else if (e.target.alt == Background) {
      setInfo(<DrawBackground media={media} />);
    } else if (e.target.alt == Invitation) {
      setInfo(<DrawInvitation media={media} />);
    }
  };

  useEffect(() => {
    if (android === true) {
      console.log('Draw Android');
      setBody(DrawAndroid(info, onChangeInfo));
      setMedia("Android")
    } else if (tablet === true) {
      setBody(DrawTablet(info, onChangeInfo));
      setMedia("Tablet")
    } else {
      console.log('Draw PC');
      setBody(DrawPC(info, onChangeInfo));
      setMedia("PC")
    }
  }, [android, tablet, pc, info]);

  return (
    <div>
      {body}
    </div>
  );
};

Customize.propTypes = {
  android: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired,
  pc: PropTypes.bool.isRequired,
};

export default Customize;
