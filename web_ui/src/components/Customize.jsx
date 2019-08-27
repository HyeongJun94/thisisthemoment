import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import global from '../modules/global';
//css
import '../css/Customize.css';
//images
import MainBannerPC from '../static/images/PC/Customize/mainBanner.png';
import MainBannerAndroid from '../static/images/Android/Customize/mainBanner.png';
import MainBannerTablet from '../static/images/Tablet/Customize/mainBanner.png';
import tmp from '../static/images/Android/Customize/mainBanner.png';

const PhotoTemplate = 0;
const Garland = 1;
const Background = 2;
const Invitation = 3;

const DrawGarland = () => (
  <div>
    DrawGarland
  </div>
);

const pureWhite = () => (
  <div className="info">
    <h3>
    지금 이순간의 꾸준한 스테디셀러 &apos;퓨어 화이트&apos;입니다.
    <br/>
    <br/>
    흰색하면 무엇이 떠오르시나요? 깨끗, 정직, 순수,숭고.
    <br/>
    우유의 흰색, 달의 흰색, 조개껍질의 흰색, 드레스의 흰색.
    <br/>
    <br/>
    신랑신부님과 하객 모두의 봄꽃을 피우는 &apos;순간&apos;이 오길
    <br/>
    바라며 &apos;화이트&apos;로 다정한 환영의 인사를 건넵니다.
    <br/>
    <br/>
    그 어떤 색이 섞여도 그대로 받아들이는 흰색처럼 그 누
    <br/>
    가 와도 자연스레 어울릴 &apos;퓨어 화이트&apos;로 지금 이순간을
    <br/>
    피우세요.
    </h3>
  </div>
);


function DrawBackgroundInfo(key) {
  if (key == 0) {
    return (
      <div>
        {pureWhite()}
      </div>
    );
  } else if (key == 1) {
    return (
      <div>
        {pureWhite()}
      </div>
    ) 
  } else if (key == 2) {
    return (
      <div>
        {pureWhite()}
      </div>
    ) 
  } else if (key == 3) {
    return (
      <div>
        {pureWhite()}
      </div>
    ) 
  };
  
  return (
    <div>
      hello
    </div>
  );
}

const DrawBackground = ( { media }) => {
  const sections = [
    {
      name: 'PURE WHITE',
      name_kor: '퓨어 화이트',
      className: 'item1',
      srcImg: 'mainBanner',
      info: '0',
    },
    {
      name: 'THEMOMENT PINK',
      name_kor: '더모먼트 링크',
      className: 'item2',
      srcImg: 'mainBanner',
      info: '1',
    },
    {
      name: 'SKY BLUE',
      name_kor: '스카이블루',
      className: 'item3',
      srcImg: 'mainBanner',
      info: '2',
    },
    {
      name: 'PURE WHITE',
      name_kor: '퓨어 화이트',
      className: 'item4',
      srcImg: 'mainBanner',
      info: '3',
    },
  ];
  return (
    <div className="wedding">
      <h1>BACKGROUND</h1>
      <h2>백그라운드</h2>
      <div className="grid-container">
        {sections.map(section => (
          <div className={section.className}>
            <picture>
              {/* <source media="(max-width: 720px)" srcSet={tmp} /> */}
              {/* <source media="(max-width: 1280px)" srcSet={tmp} /> */}
              {/* <source media="(min-width: 1280px)" srcSet={tmp} /> */}
              <img
                className="mainBannerImage"
                src={require(`../static/images/${media}/Customize/${section.srcImg}.png`)}
                alt={section.value}
              />
            </picture>
            <h1>{section.name}</h1>
            <h2>{section.name_kor}</h2>
            {DrawBackgroundInfo(`${section.info}`)}
            {/* <DrawBackgroundInfo key={section.info} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

const DrawInvitation = () => (
  <div>
    DrawInvitation
  </div>
);

const DrawPhtoTemplate = () => (
  <div>
    Photo Template
  </div>
);

const DrawSections = ({ info, media, onChangeInfo }) => {
  const sections = [
    {
      name: 'PHOTO TEMPLATE',
      name_kor: '포토템플릿',
      className: 'item1',
      value: PhotoTemplate,
      srcImg: 'mainBanner',
    },
    {
      name: 'GARLAND',
      name_kor: '가랜드',
      className: 'item2',
      value: Garland,
      srcImg: 'mainBanner',
    },
    {
      name: 'BACKGROUND',
      name_kor: '백그라운드',
      className: 'item3',
      value: Background,
      srcImg: 'mainBanner',
    },
    {
      name: 'INVITATION',
      name_kor: '청첩장',
      className: 'item4',
      value: Invitation,
      srcImg: 'mainBanner',
    },
  ];
  return (
    <div className="wedding">
      <h1>CUSTOMIZING</h1>
      <h2>커스터마이징</h2>
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
    </div>
  );
}

function DrawTablet(info, onChangeInfo) {
  return (
    <div>
      {DrawMainBanner()}
      <DrawSections info={info} media="Android" onChangeInfo={onChangeInfo} />
    </div>
  );
}

function DrawAndroid(info, onChangeInfo) {
  return (
    <div >
      {DrawMainBanner()}
      <DrawSections info={info} media="Tablet" onChangeInfo={onChangeInfo}/>
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
