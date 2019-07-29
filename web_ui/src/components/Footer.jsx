import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FooterLogoPC from '../static/images/PC/footerLogo.png';
import FooterLogoAndroid from '../static/images/Android/footerLogo.png';

const ANDROID = 1;
const PC = 0;
const mediaSize = '360';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: '6px solid #707070',
    maxWidth: '1280px',
    margin: '0 auto 0 auto',
    '& *': {
      // border: '1px solid black',
      margin: '0',
      padding: '0',
      fontSize: 0,
    },
  },
  footer: {
    display: 'grid',
    gridTemplateColumns: '27.5% auto',
    '& div:nth-child(1)': {
      margin: 'auto',
      // border: '10px solid black',
    },
    '& img': {
      display: 'block',
      margin: 'auto',
      width: '100%',
    },
    '& div': {
      // border: '10px solid black',
      [theme.breakpoints.up(mediaSize)]: {
        margin: '32px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        margin: '8px',
      },
    },
    '& p': {
      fontFamily: 'NotoSansCJKkr',
      color: '#707070',
      fontWeight: '300',
      [theme.breakpoints.up(mediaSize)]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        fontSize: '6px',
      },
    },
  },
}));

function DrawFooter(classes, media) {
  return (
    <div className={classes.footer}>
      <div>
        <img
          src={media === ANDROID ? FooterLogoAndroid : FooterLogoPC}
          alt=""
        />
      </div>
      <div>
        <p>상호명 : 지금 이 순간</p>
        <p>대표자 : 이동현 주상욱 이정석</p>
        <p>주소:서울특별시 노원구 동일로 174길 27,201사업자등록번호:540-36-00375</p>
        <p>고객문의전화:02-6315-0503 Work:10:00-18:00 Lunch:12:00-13:00</p>
        <p>CopyrightⓒTHISISTHEMOMENT</p>
      </div>
    </div>
  );
}

function DrawAndroid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {DrawFooter(classes, ANDROID)}
    </div>
    
  );
}

function DrawPC() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {DrawFooter(classes, PC)}
    </div>
  );
}

const Footer = ({ android }) => {
  return (
    <div>
      {android ? DrawAndroid() : DrawPC()}
    </div>
  );
};

export default Footer;
