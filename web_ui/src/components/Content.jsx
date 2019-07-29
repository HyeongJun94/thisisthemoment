import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ShinyoungPC from '../static/images/PC/shinyoung.png';
import ShinyoungAndroid from '../static/images/Android/shinyoung.png';
import MiddleBannerPC from '../static/images/PC/middleBanner.png';
import MiddleBannerPC2X from '../static/images/PC/middleBanner@2x.png';
import MiddleBannerAndroid from '../static/images/Android/middleBanner.png';
import WeddingSnapPC from '../static/images/PC/weddingsnap.png';
import WeddingSnapAndroid from '../static/images/Android/weddingsnap.png';
import FinalBannerPC from '../static/images/PC/finalBanner.png';
import FinalBannerAndroid from '../static/images/Android/finalBanner.png';
import LastBannerPC from '../static/images/PC/lastBanner.png';
import LastBannerAndroid from '../static/images/Android/lastBanner.png';


const ANDROID = 1;
const PC = 0;
const mediaSize = 700;

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto 0 auto',
    padding: 0,
    maxWidth: '1280px',
    // border: '10px solid black',
    '& *': {
      // border: '1px solid black',
      margin: 0,
      padding: 0,
      // fontSize: 10,
    },
  },
  boldText: {
    fontWeight: 'bold',
  },
  wedding: {
    textAlign: 'center',
    fontFamily: 'Playfair Display',
    color: '#b4a570',
    [theme.breakpoints.up(mediaSize)]: {
      fontSize: '30px',
      marginTop: '56px',
    },
    [theme.breakpoints.down(mediaSize)]: {
      fontSize: '14px',
      marginTop: '20px',
    },
    '& div': {
      fontFamily: 'NotoSansCJKkr',
      color: '#707070',
      [theme.breakpoints.up(mediaSize)]: {
        fontSize: '20px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        fontSize: '12px',
      },
    },
  },

  shinyong: {
    [theme.breakpoints.up(mediaSize)]: {
      marginTop: '56px',
      display: 'grid',
      gridTemplateColumns: '50% 50%',
    },
    [theme.breakpoints.down(mediaSize)]: {
      marginTop: '20px',
    },

    '& div': {
      // border: '10px solid black',
      margin: 'auto',
      '& img': {
        width: '100%',
      },
      '& div': {
        [theme.breakpoints.up(mediaSize)]: {
          marginTop: '8px',
          marginBottom: '8px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          marginTop: '4px',
          marginBottom: '4px',
        },
        '& p': {
          fontFamily: 'NotoSansCJKkr',
          color: '#707070',
          [theme.breakpoints.up(mediaSize)]: {
            fontSize: '16px',
          },
          [theme.breakpoints.down(mediaSize)]: {
            fontSize: '12px',
            textAlign: 'center',
          },
        },
      },

      '& a': {
        // display: 'block',
        textDecoration: 'none',
        border: '1px solid #707070',
        backgroundColor: 'transparent',
        color: '#707070',
        [theme.breakpoints.up(mediaSize)]: {
          padding: '8px',
          borderRadius: '20px',
          fontSize: '14px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          padding: '4px',
          borderRadius: '30px',
          fontSize: '10px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
  },

  shinyoungImg: {
    display: 'block',
    width: '100%',
    [theme.breakpoints.up(mediaSize)]: {
    },
    [theme.breakpoints.down(mediaSize)]: {
    },
  },

  middleBanner: {
    display: 'grid',
    backgroundColor: '#707070',
    maxWidth: '1920px',
    // border: '1px solid black',
    [theme.breakpoints.up(mediaSize)]: {
      marginTop: '56px',
      gridTemplateColumns: '62.5% 37.5%',
      // gridTemplateColumns: 'auto auto',
    },
    [theme.breakpoints.down(mediaSize)]: {
      marginTop: '16px',
      gridTemplateRows: 'auto auto',
    },

    '& img': {
      width: '100%',
    },

    '& div': {
      // border: '10px solid black',
      margin: 'auto',
      '& div': {
        fontFamily: 'NotoSansCJKkr',
        color: '#707070',
        [theme.breakpoints.up(mediaSize)]: {
          fontSize: '16px',
          lineHeight: '0.60',
        },
        [theme.breakpoints.down(mediaSize)]: {
          fontSize: '12px',
        },
        '& h': {
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#ffffff',
          fontFamily: 'NotoSansKR',
          [theme.breakpoints.up(mediaSize)]: {
            fontSize: '26px',
          },
          [theme.breakpoints.down(mediaSize)]: {
            fontSize: '14px',
          },
        },

        '& p': {
          fontFamily: 'NotoSansCJKkr',
          color: '#ffffff',
          textAlign: 'center',
          [theme.breakpoints.up(mediaSize)]: {
            fontSize: '16px',
          },
          [theme.breakpoints.down(mediaSize)]: {
            fontSize: '12px',
          },
        },

        '& b': {
          display: 'block',
          fontFamily: 'NotoSansCJKkr',
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: 'bold',
          [theme.breakpoints.up(mediaSize)]: {
            fontSize: '16px',
          },
          [theme.breakpoints.down(mediaSize)]: {
            fontSize: '12px',
          },
        },
      },

      '& button': {
        display: 'block',
        border: '1px solid #707070',
        backgroundColor: 'transparent',
        color: '#707070',
        [theme.breakpoints.up(mediaSize)]: {
          padding: '8px',
          borderRadius: '20px',
          fontSize: '14px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          padding: '4px',
          borderRadius: '30px',
          fontSize: '10px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    },
  },

  snap: {
    [theme.breakpoints.up(mediaSize)]: {
      marginTop: '40px',
    },
    [theme.breakpoints.down(mediaSize)]: {
      marginTop: '12px',
    },
    '& div': {
      backgroundColor: '#ffffff',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '0.5px solid #b4a570',
      width: '0px',
      [theme.breakpoints.up(mediaSize)]: {
        height: '100px',
        
      },
      [theme.breakpoints.down(mediaSize)]: {
        height: '50px',
      },
    },
    '& p': {
      textAlign: 'center',
      fontFamily: 'Playfair Display',
      color: '#b4a570',
      writingMode: 'vertical-lr',
      marginLeft: 'auto',
      marginRight: 'auto',
      // transform: 'rotate(90deg)',
      [theme.breakpoints.up(mediaSize)]: {
        marginTop: '8px',
        fontSize: '30px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        marginTop: '8px',
        fontSize: '12px',
      },
    },
  },
  weddingSnap: {
    [theme.breakpoints.up(mediaSize)]: {
      marginTop: '32px',
    },
    [theme.breakpoints.down(mediaSize)]: {
      marginTop: '16px',
    },

    '& img': {
      width: '100%',
    },

    '& div': {
      textAlign: 'center',
      color: '#707070',
      [theme.breakpoints.up(mediaSize)]: {
        marginTop: '64px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        marginTop: '12px',
      },
      '& h1': {
        fontFamily: 'Playfair Display',
        textDecoration: 'underline',
        [theme.breakpoints.up(mediaSize)]: {
          fontSize: '16px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          fontSize: '10px',
        },
      },
      '& h2': {
        fontFamily: 'NotoSansCJKkr',
        fontWeight: 'bold',
        [theme.breakpoints.up(mediaSize)]: {
          marginTop: '8px',
          marginBottom: '8px',
          fontSize: '24px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          marginTop: '4px',
          marginBottom: '4px',
          fontSize: '14px',
        },
      },
      '& p': {
        fontFamily: 'NotoSansCJKkr',
        [theme.breakpoints.up(mediaSize)]: {
          fontSize: '16px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          fontSize: '12px',
        },
      },
    },
  },
  finalBanner: {
    display: 'grid',
    [theme.breakpoints.up(mediaSize)]: {
      gridTemplateColumns: '50% 50%',
      marginTop: '64px',
    },
    [theme.breakpoints.down(mediaSize)]: {
      gridTemplateAreas: ' "item1" "item2"',
      gridTemplateRows: '1fr auto',
      marginTop: '12px',
    },
    '& div:nth-child(1)': {
      // textAlign: 'center',
      color: '#707070',
      // border: '10px solid black',
      [theme.breakpoints.up(mediaSize)]: {
        margin: 'auto',
      },
      [theme.breakpoints.down(mediaSize)]: {
        textAlign: 'center',
        margin: '0 auto 0 auto',
        marginTop: '12px',
        gridArea: 'item2',
      },
      '& h1': {
        fontFamily: 'Playfair Display',
        textDecoration: 'underline',
        [theme.breakpoints.up(mediaSize)]: {
          fontSize: '16px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          fontSize: '10px',
        },
      },
      '& h2': {
        fontFamily: 'NotoSansCJKkr',
        fontWeight: 'bold',
        [theme.breakpoints.up(mediaSize)]: {
          marginTop: '8px',
          marginBottom: '16px',
          fontSize: '24px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          marginTop: '4px',
          marginBottom: '8px',
          fontSize: '14px',
        },
      },
      '& p': {
        fontFamily: 'NotoSansCJKkr',
        [theme.breakpoints.up(mediaSize)]: {
          fontSize: '16px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          fontSize: '12px',
        },
      },
    },

    '& div:nth-child(2)': {
      margin: 'auto',
      [theme.breakpoints.up(mediaSize)]: {

      },
      [theme.breakpoints.down(mediaSize)]: {
        // gridArea: 'item1',
      },
    },
  },
  weddingHall: {
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
    backgroundColor: '#b4a570',
    zIndex: '-2',
    [theme.breakpoints.up(mediaSize)]: {

    },
    [theme.breakpoints.down(mediaSize)]: {
    },
    '& div:nth-child(1)': {
      fontFamily: 'NotoSansCJKkr',
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      [theme.breakpoints.up(mediaSize)]: {
        fontSize: '20px',
        marginTop: '24px',
        marginBottom: '24px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        fontSize: '10px',
        margin: '8px',
      },
    },
    '& div:nth-child(2)': {
      display: 'grid',
      [theme.breakpoints.up(mediaSize)]: {
        gridTemplateColumns: '50% 50%',
      },
      [theme.breakpoints.down(mediaSize)]: {
        gridTemplateRows: 'auto auto',
      },
      '& line': {
        // display: 'flex',
        position: 'absolute',
        width: '1280px',
        height: 0,
        border: '0.5px solid #ffffff',
        [theme.breakpoints.up(mediaSize)]: {
          marginTop: '40px',
        },
        [theme.breakpoints.down(mediaSize)]: {
          marginTop: '20px',
        },
      },
      '& line2': {
        width: 0,
        height: 0,
        [theme.breakpoints.down(mediaSize)]: {
          position: 'absolute',
          width: '100%',
          height: 0,
          border: '1px solid #ffffff',
          marginTop: '60px',
        },
      },

      '& button': {
        position: 'relative',
        zIndex: '1',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        fontFamily: 'NotoSansCJKkr',
        fontWeight: '300',
        color: '#707070',
        border: 'none',
        [theme.breakpoints.up(mediaSize)]: {
          width: '80px',
          height: '80px',
          fontSize: '14px',
          marginLeft: theme.spacing(3),
          marginRight: theme.spacing(3),
          // gridTemplateColumns: '50% 50%',
        },
        [theme.breakpoints.down(mediaSize)]: {
          width: '40px',
          height: '40px',
          fontSize: '8px',
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          // gridTemplateRows: 'auto auto',
        },
      },

      '& div1': {
        [theme.breakpoints.up(mediaSize)]: {
          marginLeft: 'auto',
        },
        [theme.breakpoints.down(mediaSize)]: {
          margin: 'auto',
        },
      },
      '& div2': {
        [theme.breakpoints.up(mediaSize)]: {
          marginRight: 'auto',
        },
        [theme.breakpoints.down(mediaSize)]: {
          margin: 'auto',
        },
      },
    },
    '& div:nth-child(3)': {
      fontFamily: 'NotoSansCJKkr',
      color: '#ffffff',
      textAlign: 'center',
      [theme.breakpoints.up(mediaSize)]: {
        fontSize: '16px',
        margin: '8px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        fontSize: '8px',
        margin: '4px',
      },
    },
  },
  lastBanner: {
    '& img': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
    },
  },
  kakao: {
    textAlign: 'center',
    [theme.breakpoints.up(mediaSize)]: {
      margin: '80px',
    },
    [theme.breakpoints.down(mediaSize)]: {
      margin: '24px',
    },
    '& p': {
      fontFamily: 'NotoSansCJkkr',
      fontWeight: 'bold',
      color: '#707070',
      textAlign: 'center',
      [theme.breakpoints.up(mediaSize)]: {
        fontSize: '20px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        fontSize: '12px',
      },
    },
    '& a': {
      textDecoration: 'none',
      backgroundColor: 'transparent',
      border: '1px solid #707070',
      borderRadius: '30px',
      color: '#707070',
      [theme.breakpoints.up(mediaSize)]: {
        lineHeight: '2',
        padding: '8px',
        fontSize: '16px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        padding: '4px',
        fontSize: '10px',
      },
    },
  },
}));

function DrawKakao(classes) {
  return (
    <div className={classes.kakao}>
      <p>예약문의는 톡 플러스친구로 문의주시면</p>
      <p>친절하게 상담 도와드리겠습니다.</p>
      <a href="https://pf.kakao.com/_xmXvWC/chat">1:1 카카오톡 상담 시작하기</a>
    </div>
  );
}

function DrawLastBanner(classes, media) {
  return (
    <div className={classes.lastBanner}>
      <img
        src={media === ANDROID ? LastBannerAndroid : LastBannerPC}
        alt=""
      />
    </div>
  );
}

function DrawWeddingHall(classes, media) {
  const weddingHallLeft = [
    { name: '강남구' },
    { name: '서초구' },
    { name: '송파구' },
    { name: '영등포구' },
    { name: '중구' },
    { name: '용산구' },
  ];

  const weddingHallRight = [
    { name: '서대문구' },
    { name: '구로구' },
    { name: '종로구' },
    { name: '성동구' },
    { name: '관악구' },
    { name: '동대문구' },
  ];

  if (media === ANDROID) {
    return (
      <div className={classes.weddingHall}>
        <div>
          진행한 웨딩홀
        </div>
        <div>
          <line />
          <line2 />
          <div1>
            {weddingHallLeft.map(weddingHall => (
              <button>{weddingHall.name}</button>
            ))}
          </div1>
          <div2>
            {weddingHallRight.map(weddingHall => (
              <button>{weddingHall.name}</button>
            ))}
          </div2>
        </div>
        <div>
          &lt;클릭해서 웨딩홀 확인하기&gt;
        </div>
      </div>
    );
  }

  return (
    <div className={classes.weddingHall}>
      <div>
        진행한 웨딩홀
      </div>
      <div>
        <line />
        <div1>
          {weddingHallLeft.map(weddingHall => (
            <button>{weddingHall.name}</button>
          ))}
        </div1>
        <div2>
          {weddingHallRight.map(weddingHall => (
            <button>{weddingHall.name}</button>
          ))}
        </div2>
      </div>
      <div>
        &lt;클릭해서 웨딩홀 확인하기&gt;
      </div>
    </div>
  );
}

function DrawFinalBanner(classes, media) {
  if (media === ANDROID) {
    return (
      <div className={classes.finalBanner}>
        <div>
          <h1>PHOTO-BOOTH</h1>
          <h2>무제한으로 드리는 포토부스</h2>
          <p>하객들은 친구들과 함께 다양한 포즈로 </p>
          <p>사진을 찍고 추억을 남기고 싶어 합니다.</p>
          <p> &apos;지금 이순간&apos;은 결혼식에 온 모든 하객분들이</p>
          <p>기념사진을 가져갈 수 있도록</p>
          <p>사진을 즉석에서 무제한으로 인화해드립니다.</p>
        </div>
        <div>
          <img
            src={FinalBannerAndroid}
            alt=""
          />
        </div>
      </div>
    );
  }
  return (
    <div className={classes.finalBanner}>
      <div>
        <h1>PHOTO-BOOTH</h1>
        <h2>무제한으로 드리는 포토부스</h2>
        <p>하객들은 친구들과 함께 다양한 포즈로 사진을 찍고 추억을남</p>
        <p>기고 싶어 합니다. &apos;지금 이순간&apos;은 결혼식에 온 모든 하객분들</p>
        <p>이 기념사진을 가져갈 수 있도록 사진을 즉석에서 무제한으로</p>
        <p>인화해드립니다.</p>
      </div>
      <div>
        <img
          src={FinalBannerPC}
          alt=""
        />
      </div>
    </div>
  );
}

function DrawWeddingSnap(classes, media) {
  
  if (media === ANDROID) {
    return (
      <div className={classes.weddingSnap}>
        <img
          src={WeddingSnapAndroid}
          alt=""
        />
        <div>
          <h1>PHOTOGRAPHER</h1>
          <h2>사진작가가 진행하는 포토부스</h2>
          <p>저희는 타 포토부스와 다르게 사진 작가</p>
          <p>출신의 대표가 포토부스를 운영합니다.</p>
          <p>포토부스 러닝타임 동안 대표가 직접 웨딩 스냅을 촬영하고</p>
          <p>지금이순간 디자이너의 리터칭 작업이 끝난 후</p>
          <p>본식 스냅을 선물해드리고 있습니다.</p>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.weddingSnap}>
      <img
        src={WeddingSnapPC}
        alt=""
      />
      <div>
        <h1>PHOTOGRAPHER</h1>
        <h2>사진작가가 진행하는 포토부스</h2>
        <p>저희는 타 포토부스와 다르게 사진 작가 출신의 대표가 포토부스를 운영합니다.</p>
        <p>포토부스 러닝타임 동안 대표가 직접 웨딩 스냅을 촬영하고</p>
        <p>지금이순간 디자이너의 리터칭 작업이 끝난 후 본식 스냅을 선물해드리고 있습니다.</p>
      </div>
    </div>
  );
}

function DrawSnap(classes) {
  return (
    <div className={classes.snap}>
      <div />
      <p>WEDDINGSNAP</p>
    </div>
  );
}

function DrawMiddleBannerPC(classes) {
  return (
    <div>
      <div>
        <h>어떻게 하면</h>
        <br />
        <p>일생에 단 한 번뿐인 결혼식의 행복한 신랑, 신부</p>
        <p>그리고 소중한 걸음 해주신 하객분들까지</p>
        <p>모두가 즐거운 결혼식을 만들 수 있을까요?</p>
        <br />
        <b>&quot;하객들이 결혼식을 기억하는 것.&quot;</b>
        <br />
        <p>저희는 하객들의 마음속에</p>
        <p>여러분을 남깁니다.</p>
      </div>
    </div>
  );
}

function DrawMiddleBannerAndroid(classes) {
  return (
    <div>
      <div>
        <h>어떻게 하면</h>
        <p>일생에 단 한 번뿐인 결혼식의 행복한 신랑, 신부</p>
        <p>그리고 소중한 걸음 해주신 하객분들까지</p>
        <p>모두가 즐거운 결혼식을 만들 수 있을까요?</p>
        <b>&quot;하객들이 결혼식을 기억하는 것.&quot;</b>
        <p>저희는 하객들의 마음속에</p>
        <p>여러분을 남깁니다.</p>
      </div>
    </div>
  );
}

function DrawMiddleBanner(classes, media) {
  return (
    <div className={classes.middleBanner}>
      <div>
        <img
          src={media === ANDROID ? MiddleBannerAndroid : MiddleBannerPC}
          alt=""
          // srcSet={`${MiddleBannerPC2X} 1280w`}
          srcSet={media ===ANDROID ? MiddleBannerAndroid : `${MiddleBannerPC2X} 1280w`} 
        />
      </div>
      {media === ANDROID ? DrawMiddleBannerAndroid(classes) : DrawMiddleBannerPC(classes)}
    </div>
  );
}

function DraswShinyoungInfo(classes) {
  return (
    <div>
      <div>
        <p>지금이순간 포토부스는 연예인이 애용하는 포토부스입니다.</p>
      </div>
      <a href="https://www.instagram.com/p/BqCgH2cnXib/"> 사용한 연예인 보러가기</a>
      <div>
        <p>또한, 사회적 공신력이 있는 소설 크라우드 펀딩 플랫폼</p>
        <p>'와디즈'에서 크라우드 펀딩을 성공하였습니다.</p>
        <p>이를 통하여, 저희는 우수함과 신뢰를 고객님들께 검증 받았습니다.</p>
      </div>
      <a href="https://www.wadiz.kr/web/campaign/detail/29385">와디즈 크라우드 펀딩 보러가기</a>
    </div>
  );
}

function DrawShinyoungAndroid(classes) {
  return (
    <div className={classes.shinyong}>
      <img
        className={classes.shinyoungImg}
        src={ShinyoungAndroid}
        alt=""
      />
      {DraswShinyoungInfo(classes)}
    </div>
  );
}

function DrawShinyoungPC(classes) {
  return (
    <div className={classes.shinyong}>
      <div>
        <img
          src={ShinyoungPC}
          alt=""
        />
      </div>
      {DraswShinyoungInfo(classes)}
    </div>
  );
}

function DrawShinyoung(classes, media) {
  if (media === ANDROID) {
    return DrawShinyoungAndroid(classes);
  }

  return DrawShinyoungPC(classes);
}

function DrawWedding(classes) {
  return (
    <div className={classes.wedding}>
      WEDDING PHOTO-BOOTH
      <div>셀럽도 찾는 포토부스</div>
    </div>
  );
}

function DrawAndroid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {DrawWedding(classes)}
      {DrawShinyoung(classes, ANDROID)}
      {DrawMiddleBanner(classes, ANDROID)}
      {DrawSnap(classes)}
      {DrawWeddingSnap(classes, ANDROID)}
      {DrawFinalBanner(classes, ANDROID)}
      {DrawWeddingHall(classes, ANDROID)}
      {DrawLastBanner(classes, ANDROID)}
      {DrawKakao(classes)}
    </div>
  );
}

function DrawPC() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {DrawWedding(classes)}
        {DrawShinyoung(classes, PC)}
      </div>
      <div>
        {DrawMiddleBanner(classes, PC)}
      </div>
      <div className={classes.root}>
        {DrawSnap(classes)}
        {DrawWeddingSnap(classes, PC)}
        {DrawFinalBanner(classes, PC)}
      </div>
      <div>
        {DrawWeddingHall(classes, PC)}
        {DrawLastBanner(classes, PC)}
      </div>
      <div className={classes.root}>
        {DrawKakao(classes)}
      </div>
    </div>
  );
}

const Content = ({ android }) => {

  return (
    <div>
      {android ? DrawAndroid() : DrawPC()}
    </div>
  );
};

export default Content;