import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import global from '../modules/global';


import FooterLogoPC from '../static/images/PC/Footer/footerLogo.png';
import FooterLogoAndroid from '../static/images/Android/Footer/footerLogo.png';

const useStyles = makeStyles(theme => ({
  root: {
    
    maxWidth: '1280px',
    margin: '0 auto 0 auto',
    '& *': {
      // border: '1px solid black',
      margin: '0',
      padding: '0',
      fontSize: 0,
    },
    [theme.breakpoints.up(global.PCMinWidth)]: {
      borderTop: '5px solid #707070',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      borderTop: '3px solid #707070',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      borderTop: '2px solid #707070',
    },
  },
  footer: {
    display: 'grid',

    [theme.breakpoints.up(global.PCMinWidth)]: {
      gridTemplateColumns: '15.7% 21% auto',
      marginLeft: '60px',
      marginTop: '32px',
      marginBottom: '32px',
      gridColumnGap: '60px',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      gridTemplateColumns: '15.7% 30% auto',
      marginLeft: '24px',
      marginTop: '24px',
      marginBottom: '24px',
      gridColumnGap: '24px',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      // gridGap: '50px',
      gridTemplateColumns: '15.7% 30% auto',
      marginLeft: '16px',
      marginTop: '8px',
      marginBottom: '8px',
      gridColumnGap: '8px',
    },
  
    '& div:nth-child(1)': {
      margin: 'auto',
      
    },
    '& img': {
      display: 'block',
      margin: 'auto',
      width: '100%',
    },
    '& div:nth-child(2)': {
      [theme.breakpoints.up(global.TabletMinWidth)]: {
        // margin: '32px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        // margin: '8px',
      },
    },
    '& p': {
      fontFamily: 'Noto Sans KR',
      color: '#707070',
      fontWeight: '300',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        fontSize: '14px',
        letterSpacing: '-0.56px',
        lineHeight: '1.79',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        fontSize: '12px',
        letterSpacing: '-0.48px',
        lineHeight: '1.75',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        fontSize: '7px',
        letterSpacing: '-0.14px',
        lineHeight: '1.57',
      },
      
    },
    '& div:nth-child(3)': {
      // width: '40%',
      // border: '1px solid black',
      
      [theme.breakpoints.up(global.TabletMinWidth)]: {
        // margin: '32px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        // margin: '8px',
      },
    },
  },
}));

function DrawFooter(classes, media) {
  return (
    <div className={classes.footer}>
      <div>
        <img
          src={media === global.ANDROID ? FooterLogoAndroid : FooterLogoPC}
          alt=""
        />
      </div>
      <div>
        <p>상호명  :  지금 이 순간</p>
        <p>사업자등록번호  :  540-36-00375</p>
        <p>대표자  :  이동현 주상욱 이정석</p>
        <p>주소  :  서울특별시 노원구 동일로 174길 27,201</p>
      </div>
      <div>
        <p>고객문의전화  :  02-6315-0503</p>
        <p>Work  :  10:00 - 18:00</p>
        <p>Lunch  :  12:00 - 13:00</p>
        <p>CopyrightⓒTHISISTHEMOMENT</p>
      </div>
    </div>
  );
}

function DrawAndroid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {DrawFooter(classes, global.ANDROID)}
    </div>
    
  );
}

function DrawPC() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {DrawFooter(classes, global.PC)}
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
