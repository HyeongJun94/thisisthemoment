import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import global from '../modules/global';

// images
import BannerPC from '../static/images/PC/Main/mainBanner.png';
import BannerTablet from '../static/images/Tablet/Main/mainBanner.png';
import BannerAndroid from '../static/images/Android/Main/mainBanner.png';
import BannerLogo from '../static/images/PC/Main/bannerlogo.png';
import ShinyoungPC from '../static/images/PC/Main/shinyoung.png';
import ShinyoungTablet from '../static/images/Tablet/Main/shinyoung.png';
import ShinyoungAndroid from '../static/images/Android/Main/shinyoung.png';
import MiddleBannerPC from '../static/images/PC/Main/middleBanner.png';
import MiddleBannerPC2 from '../static/images/PC/Main/middleBanner2.png';
import MiddleBannerTablet from '../static/images/Tablet/Main/middleBanner.png';
import MiddleBannerAndroid from '../static/images/Android/Main/middleBanner.png';
import WeddingSnapPC from '../static/images/PC/Main/weddingsnap.png';
import WeddingSnapTablet from '../static/images/Tablet/Main/weddingsnap.png';
import WeddingSnapAndroid from '../static/images/Android/Main/weddingsnap.png';
import FinalBannerPC from '../static/images/PC/Main/finalBanner.png';
import FinalBannerTablet from '../static/images/Tablet/Main/finalBanner.png';
import FinalBannerAndroid from '../static/images/Android/Main/finalBanner.png';
import LastBannerPC from '../static/images/PC/Main/lastBanner.png';
import LastBannerTablet from '../static/images/Tablet/Main/lastBanner.png';
import LastBannerAndroid from '../static/images/Android/Main/lastBanner.png';


const gridSize = 600;

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto 0 auto',
    padding: 0,
    [theme.breakpoints.up(global.PCMinWidth)]: {
      maxWidth: '1280px',
    },
    '& *': {
      margin: 0,
      padding: 0,
    },
  },

  myroot: {

    backgroundColor: '#f7f7f7',

  },

  bannerImage: {
    display: 'block',
    margin: '0 auto 0 auto',
    width: '100%',
  },
  logo: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '0.5px solid #707070',
    '& img': {
      display: 'block',
      margin: '0 auto 0 auto',
    },
  },
  boldText: {
    fontWeight: 'bold',
  },
  wedding: {
    textAlign: 'center',
    fontFamily: 'Playfair Display SC',
    color: '#b4a570',
    // border: '1px solid black',
    [theme.breakpoints.up(global.PCMinWidth)]: {
      fontSize: '36px',
      marginTop: '56px',
      letterSpacing: '-1.44px',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      fontSize: '28px',
      marginTop: '40px',
      marginBottom: '40px',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      fontSize: '16px',
      // fontSize: '100px',
      marginTop: '20px',
      marginBottom: '12px',
    },
    '& div': {
      fontFamily: 'Noto Sans KR',
      // fontWeight: '100',
      color: '#707070',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        fontSize: '24px',
        letterSpacing: '-0.48px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        fontSize: '20px',
        letterSpacing: '-0.42px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        fontSize: '14px',
      },
    },
  },

  shinyong: {
    [theme.breakpoints.up(global.PCMinWidth)]: {
      marginTop: '56px',
      display: 'grid',
      gridTemplateColumns: '50% 50%',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      marginTop: '20px',
    },
    '& h1': {
      [theme.breakpoints.up(global.PCMinWidth)]: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#707070',
        textAlign: 'left',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#707070',
        textAlign: 'center',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        visibility: 'hidden',
        lineHeight: 0,
      },
    },

    '& div': {
      // border: '10px solid black',
      margin: 'auto',
      [theme.breakpoints.down(global.PCMinWidth)]: {
        textAlign: 'center',
        marginTop: '8px',
      },
      '& img': {
        display: 'block',
        width: '90%',
        margin: 'auto',
      },
      '& div': {
        textAlign: 'center',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          marginTop: '8px',
          marginBottom: '8px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          marginTop: '40px',
          marginBottom: '8px',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          marginTop: '4px',
          marginBottom: '4px',
        },
        '& p': {
          fontFamily: 'Noto Sans KR',
          color: '#707070',
          [theme.breakpoints.up(global.PCMinWidth)]: {
            fontSize: '16px',
          },
          [theme.breakpoints.down(global.PCMinWidth)]: {
            fontSize: '18px',
            textAlign: 'center',
            lineHeight: '1.8',
            letterSpacing: '-0.36px',
          },
          [theme.breakpoints.down(global.TabletMinWidth)]: {
            fontSize: '12px',
            textAlign: 'center',
            lineHeight: '1.8',
            letterSpacing: '-0.36px',
          },
        },
      },

      '& a': {
        display: 'block',
        textDecoration: 'none',
        border: '1px solid #707070',
        backgroundColor: 'transparent',
        color: '#707070',
        margin: 'auto',
        textAlign: 'center',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          marginTop: '16px',
          marginBottom: '40px',
          width: '183px',
          lineHeight: 2,
          // padding: '8px',
          borderRadius: '20px',
          fontSize: '16px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          marginTop: '8px',
          marginBottom: '24px',
          lineHeight: 2,
          width: '148px',
          borderRadius: '30px',
          fontSize: '14px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          marginTop: '4px',
          marginBottom: '8px',
          lineHeight: 2,
          width: '102px',
          borderRadius: '30px',
          fontSize: '10px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      '& a2': {
        display: 'block',
        textDecoration: 'none',
        border: '1px solid #707070',
        backgroundColor: 'transparent',
        color: '#707070',
        margin: 'auto',
        textAlign: 'center',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          marginTop: '16px',
          marginBottom: '40px',
          width: '226px',
          lineHeight: 2,
          // padding: '8px',
          borderRadius: '20px',
          fontSize: '16px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          marginTop: '8px',
          marginBottom: '24px',
          lineHeight: 2,
          width: '186px',
          borderRadius: '30px',
          fontSize: '14px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          marginTop: '4px',
          marginBottom: '8px',
          lineHeight: 2,
          width: '135px',
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
    margin: 'auto',
    // border: '10px solid black',
    // marginTop: '0px',
    [theme.breakpoints.up(global.PCMinWidth)]: {
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      width: '73.3%',
    },
  },

  middleBanner: {
    display: 'grid',
    backgroundColor: '#9E9E9E',
    maxWidth: '100%',
    // border: '1px solid black',
    [theme.breakpoints.up(global.PCMinWidth)]: {
      marginTop: '56px',
      gridTemplateColumns: '66.7% auto',
      // gridTemplateColumns: 'auto auto',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      marginTop: '24px',
      gridTemplateRows: 'auto auto',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      marginTop: '16px',
      gridTemplateRows: 'auto auto',
    },

    '& img': {
      display: 'block',
      width: '100%',
      // height: '100%',
      // border: '1px solid black',
    },

    '& div': {
      // border: '1px solid black',
      margin: 'auto',
      // border: '1px solid black',
      '& div': {
        // fontFamily: 'NotoSansCJKkr',
        // border: '1px solid black',
        fontFamily: 'Noto Sans KR',
        color: '#707070',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          // marginTop: '31px',
          // marginBottom: '31px',
          // margint: 
          fontSize: '16px',
          lineHeight: '0.60',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          marginTop: '16px',
          marginBottom: '16px',
          // marginBottom: '24px',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          marginTop: '8px',
          marginBottom: '8px',
        },
        '& h': {
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#ffffff',
          fontFamily: 'Noto Sans KR',
          [theme.breakpoints.up(global.PCMinWidth)]: {
            fontSize: '36px',
            marginTop: '16px',
            marginBottom: '16px',
            letterSpacing: '-0.42px',
          },
          [theme.breakpoints.down(global.PCMinWidth)]: {
            fontSize: '24px',
            marginBottom: '14px',
          },
          [theme.breakpoints.down(global.TabletMinWidth)]: {
            fontSize: '14px',
            marginBottom: '4px',
          },
        },

        '& p': {
          fontFamily: 'Noto Sans KR',
          color: '#ffffff',
          textAlign: 'center',
          [theme.breakpoints.up(global.PCMinWidth)]: {
            fontSize: '21px',
            lineHeight: '0.6',
            letterSpacing: '-0.42px',
          },
          [theme.breakpoints.down(global.PCMinWidth)]: {
            fontSize: '16px',
            lineHeight: '1.78',
            letterSpacing: '-0.36px',
          },
          [theme.breakpoints.down(global.TabletMinWidth)]: {
            fontSize: '10px',
            lineHeight: '1.8',
            letterSpacing: '-0.36px',
          },
        },

        '& b': {
          display: 'block',
          fontFamily: 'Noto Sans KR',
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: 'bold',
          [theme.breakpoints.up(global.PCMinWidth)]: {
            fontSize: '21px',
            letterSpacing: '-0.42px',
          },
          [theme.breakpoints.down(global.PCMinWidth)]: {
            fontSize: '12px',
          },
        },
      },

      '& button': {
        display: 'block',
        border: '1px solid #707070',
        backgroundColor: 'transparent',
        color: '#707070',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          padding: '8px',
          borderRadius: '20px',
          fontSize: '14px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
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
    marginTop: '0px',
    '& div': {
      backgroundColor: '#424242',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: '0.5px solid #b4a570',
      width: '0px',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        height: '80px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        height: '52px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        height: '36px',
      },
    },
    '& p': {
      textAlign: 'center',
      fontFamily: 'Playfair Display SC',
      color: '#b4a570',
      writingMode: 'vertical-lr',
      marginLeft: 'auto',
      marginRight: 'auto',
      // transform: 'rotate(90deg)',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        marginTop: '8px',
        fontSize: '36px',
        letterSpacing: '-1.44px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        marginTop: '8px',
        fontSize: '24px',
        letterSpacing: '-0.96px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        marginTop: '8px',
        fontSize: '16px',
        letterSpacing: '-0.64px',
      },
    },
  },
  weddingSnap: {
    [theme.breakpoints.up(global.PCMinWidth)]: {
      marginTop: '64px',
      marginLeft: '110px',
      marginRight: '110px',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      marginTop: '40px',
      marginLeft: '110px',
      marginRight: '110px',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      marginTop: '12px',
      marginLeft: '24px',
      marginRight: '24px',
    },

    '& img': {
      width: '100%',
    },

    '& div': {
      textAlign: 'center',
      color: '#707070',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        marginTop: '64px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        marginTop: '40px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        marginTop: '12px',
      },
      '& h1': {
        fontFamily: 'Playfair Display SC',
        margin: 'auto',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          borderBottom: '1px solid black',
          fontSize: '16px',
          width: '121px',
          paddingBottom: '4px',
          letterSpacing: '-0.72px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          borderBottom: '1px solid black',
          fontSize: '16px',
          width: '121px',
          paddingBottom: '4px',
          letterSpacing: '-0.72px',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          borderBottom: '0.5px solid black',
          fontSize: '10px',
          width: '72px',
          paddingBottom: '0px',
          letterSpacing: '-0.72px',
        },
      },
      '& h2': {
        fontFamily: 'Noto Sans KR',
        fontWeight: 'bold',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          marginTop: '8px',
          marginBottom: '8px',
          fontSize: '24px',
          letterSpacing: '-0.36px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          marginTop: '4px',
          marginBottom: '4px',
          fontSize: '21px',
          letterSpacing: '-0.36px',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          marginTop: '4px',
          marginBottom: '4px',
          fontSize: '14px',
        },
      },
      '& p': {
        fontFamily: 'Noto Sans KR',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          fontSize: '21px',
          letterSpacing: '-0.36px',
          lineHeight: '1.78',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          fontSize: '18px',
          letterSpacing: '-0.36px',
          lineHeight: '1.78',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          fontSize: '12px',
        },
      },
    },
  },
  finalBanner: {
    display: 'grid',
    
    // border: '1px solid black',
    [theme.breakpoints.up(global.PCMinWidth)]: {
      gridTemplateColumns: '50% 50%',
      marginTop: '64px',
      backgroundColor: '#f7f7f7',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      gridTemplateAreas: ' "item1" "item2"',
      gridTemplateRows: '1fr auto',
      marginTop: '12px',
      backgroundColor: 'white',
    },

    '& div:nth-child(1)': {
      // textAlign: 'center',
      color: '#707070',
      // border: '10px solid black',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        margin: 'auto',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        textAlign: 'center',
        margin: '0 auto 0 auto',
        marginTop: '16px',
        marginBottom: '28px',
        gridArea: 'item2',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        textAlign: 'center',
        margin: '0 auto 0 auto',
        marginTop: '0px',
        marginBottom: '12px',
        gridArea: 'item2',
      },
      '& h1': {
        fontFamily: 'Playfair Display',
        
        [theme.breakpoints.up(global.PCMinWidth)]: {
          fontSize: '16px',
          borderBottom: '1px solid black',
          width: '112px',
          letterSpacing: '-0.72px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          margin: 'auto',
          fontSize: '16px',
          borderBottom: '1px solid black',
          width: '112px',
          letterSpacing: '-0.72px',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          fontSize: '10px',
          borderBottom: '0.5px solid black',
          width: '70px',
          letterSpacing: '-0.72px',
        },
      },
      '& h2': {
        fontFamily: 'Noto Sans KR',
        fontWeight: 'bold',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          marginTop: '8px',
          marginBottom: '8px',
          fontSize: '24px',
          letterSpacing: '-0.36px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          marginTop: '4px',
          marginBottom: '8px',
          fontSize: '21px',
          letterSpacing: '-0.36px',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          marginTop: '4px',
          marginBottom: '4px',
          fontSize: '14px',
          letterSpacing: '-0.36px',
        },
      },
      '& p': {
        fontFamily: 'Noto Sans KR',
        // border: '10px solid black',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          fontSize: '20px',
          letterSpacing: '-0.36px',
          lineHeight: '1.76',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          fontSize: '14px',
          letterSpacing: '-0.36px',
          lineHeight: '1.76',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          fontSize: '12px',
          letterSpacing: '-0.36px',
          lineHeight: '1.75',
        },
      },
    },

    '& div:nth-child(2)': {
      margin: '24px',
      width: '100%',
      // border: '10px solid black',
      [theme.breakpoints.up(global.PCMinWidth)]: {

      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        // gridArea: 'item1',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        // gridArea: 'item1',
        // margin: '0px 8px 0px 8px',
        margin: '0px',
        padding: '8px',
      },
      '& img': {
        // border: '1px solid black',
        display: 'block',
        width: '100%',
      },
    },
  },

  finalBannerImg: {
    display: 'block',
    width: '100%',
    margin: 'auto',
    // border: '10px solid black',
    [theme.breakpoints.up(global.PCMinWidth)]: {
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      width: '73.3%',
    },
  },

  weddingHall: {
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
    backgroundColor: '#b4a570',
    zIndex: '-2',
    // border: '10px solid black',
    [theme.breakpoints.up(global.PCMinWidth)]: {
      paddingBottom: '24px',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      paddingBottom: '16px',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      paddingBottom: '8px',
    },
    '& div:nth-child(1)': {
      fontFamily: 'Noto Sans KR',
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        fontSize: '24px',
        marginTop: '24px',
        marginBottom: '24px',
        letterSpacing: '-0.36px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        fontSize: '20px',
        margin: '16px',
        letterSpacing: '-0.36px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        fontSize: '10px',
        margin: '4px',
        letterSpacing: '-0.36px',
      },
    },
    '& div:nth-child(2)': {
      display: 'grid',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        gridTemplateColumns: '50% 50%',
      },

      [theme.breakpoints.up(gridSize)]: {
        gridTemplateColumns: '50% 50%',
      },
      [theme.breakpoints.down(gridSize)]: {
        gridTemplateRows: 'auto auto',
      },

      '& line': {
        // display: 'flex',
        position: 'absolute',
        width: '100%',
        height: 0,
        border: '0.5px solid #ffffff',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          marginTop: '40px',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          marginTop: '20px',
        },
      },
      '& line2': {
        position: 'absolute',
        width: 0,
        height: 0,
        [theme.breakpoints.down(gridSize)]: {
          width: '100%',
          height: 0,
          border: '0.5px solid #ffffff',
          marginTop: '60px',
        },
      },

      '& button': {
        position: 'relative',
        zIndex: '1',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        fontFamily: 'Noto Sans KR',
        fontWeight: '300',
        color: '#707070',
        border: 'none',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          width: '80px',
          height: '80px',
          fontSize: '14px',
          letterSpacing: '-0.36px',
          marginLeft: theme.spacing(3),
          marginRight: theme.spacing(3),
          // gridTemplateColumns: '50% 50%',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          width: '40px',
          height: '40px',
          fontSize: '10px',
          letterSpacing: '-0.36px',
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          // gridTemplateRows: 'auto auto',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          width: '40px',
          height: '40px',
          fontSize: '8px',
          letterSpacing: '-0.36px',
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          // gridTemplateRows: 'auto auto',
        },
      },

      '& div1': {
        [theme.breakpoints.up(gridSize)]: {
          marginLeft: 'auto',
        },
        [theme.breakpoints.down(gridSize)]: {
          margin: 'auto',
        },
      },
      '& div2': {
        [theme.breakpoints.up(gridSize)]: {
          marginRight: 'auto',
        },
        [theme.breakpoints.down(gridSize)]: {
          margin: 'auto',
          marginTop: '8px',
        },
      },
    },
    '& div:nth-child(3)': {
      fontFamily: 'Noto Sans KR',
      color: '#ffffff',
      textAlign: 'center',
      // border: '10px solid black',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        fontSize: '16px',
        margin: '16px',
        letterSpacing: '-0.36px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        fontSize: '14px',
        margin: '16px',
        letterSpacing: '-0.36px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        fontSize: '8px',
        margin: '4px',
        letterSpacing: '-0.36px',
      },
    },
  },
  lastBanner: {
    margin: 0,
    '& img': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
    },
  },
  kakao: {
    textAlign: 'center',
    [theme.breakpoints.up(global.PCMinWidth)]: {
      margin: '120px',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      margin: '40px',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      margin: '16px',
    },
    '& p': {
      fontFamily: 'Noto Sans KR',
      fontWeight: 'bold',
      color: '#707070',
      textAlign: 'center',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        fontSize: '24px',
        letterSpacing: '-0.36px',
        lineHeight: '1.54',
        marginBottom: '24px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        fontSize: '21px',
        letterSpacing: '-0.36px',
        lineHeight: '1.54',
        marginBottom: '16px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        fontSize: '14px',
        letterSpacing: '-0.36px',
        lineHeight: '1.54',
        marginBottom: '8px',
      },
    },
    '& a': {
      textDecoration: 'none',
      backgroundColor: 'transparent',
      border: '1px solid #707070',
      borderRadius: '30px',
      color: '#707070',
      [theme.breakpoints.up(global.PCMinWidth)]: {
        lineHeight: '2',
        padding: '8px',
        fontSize: '16px',
        letterSpacing: '-0.36px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        lineHeight: '3',
        padding: '4px',
        fontSize: '14px',
        letterSpacing: '-0.36px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        lineHeight: '3',
        padding: '5px',
        fontSize: '10px',
        letterSpacing: '-0.36px',
      },
    },
  },

  bannerBox: {
    // display: 'flex',
    // position: 'absolute',
    position: 'absolute',
    fontSize: '100px',
    top: '14.6%',
    right: '50px',
    width: '110px',
    lineHeight: '1.1',
    textAlign: 'center',
    border: '1px solid black',
  },

  bannerBox2: {
    position: 'absolute',
    fontSize: '50px',
    top: '14.6%',
    right: '90px',
    width: '110px',
    lineHeight: '1.1',
    textAlign: 'center',
    writingMode: 'vertical-lr',
    border: '1px solid black',
  },

  bannerLogo: {
    position: 'absolute',
    width: '15.6%',
    top: '20%',
  },
}));

function DrawKakao(classes) {
  return (
    <div className={classes.kakao}>
      <p>
        예약문의는 카톡 플러스친구로 문의주시면
        <br />
        친절하게 상담 도와드리겠습니다.
      </p>
      <a href="https://pf.kakao.com/_xmXvWC/chat">1:1 카카오톡 상담 시작하기</a>
    </div>
  );
}
function DrawLastBannerPC(classes) {
  return (
    <div className={classes.lastBanner}>
      <picure>
        <source srcSet={LastBannerPC} />
        <img
          src={LastBannerPC}
          alt=""
        />
      </picure>
    </div>
  );
}

function DrawLastBannerAndroid(classes) {
  return (
    <div className={classes.lastBanner}>
      <picure>
        <source media="(max-width: 720px)" srcSet={LastBannerAndroid} />
        <source media="(min-width: 720px)" srcSet={LastBannerTablet} />
        <img
          src={LastBannerAndroid}
          alt=""
        />
      </picure>
    </div>
  );
}

function DrawLastBanner(classes, media) {
  return (
    <div>
      {media === global.ANDROID ? DrawLastBannerAndroid(classes) : DrawLastBannerPC(classes) }
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

  if (media === global.ANDROID) {
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
        {/* <div>
          &lt;클릭해서 웨딩홀 확인하기&gt;
        </div> */}
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
      {/* <div>
        &lt;클릭해서 웨딩홀 확인하기&gt;
      </div> */}
    </div>
  );
}

function DrawFinalBanner(classes, media) {
  if (media == global.ANDROID) {
    return (
      <div className={classes.finalBanner}>
        <div>
          <h1>PHOTO-BOOTH</h1>
          <h2>무제한으로 드리는 포토부스</h2>
          <p>하객들은 친구들과 함께 다양한 포즈로 </p>
          <p>사진을 찍고 추억을 남기고 싶어 합니다.</p>
          <p> &apos;지금 이 순간&apos;은 결혼식에 온 모든 하객분들이</p>
          <p>기념사진을 가져갈 수 있도록</p>
          <p>사진을 즉석에서 무제한으로 인화해드립니다.</p>
        </div>
        <div>
          <picture>
            <source media="(max-width: 720px)" srcSet={FinalBannerAndroid} />
            <source media="(min-width: 720px)" srcSet={FinalBannerTablet} />
            <img
              className={classes.finalBannerImg}
              src={FinalBannerAndroid}
              alt=""
            />
          </picture>
        </div>
      </div>
    );
  } else if (media == global.TABLET) {
    return (
      <div className={classes.finalBanner}>
        <div>
          <h1>PHOTO-BOOTH</h1>
          <h2>무제한으로 드리는 포토부스</h2>
          <p>하객들은 친구들과 함께 다양한 포즈로 사진을 찍고 추억을 남기고 싶어 합니다.</p>
          <p>&apos;지금 이 순간&apos;은 결혼식에 온 모든 하객분들이</p>
          <p>기념사진을 가져갈 수 있도록 사진을 즉석에서 무제한으로 인화해드립니다.</p>
        </div>
        <div>
          <picture>
            <source srcSet={FinalBannerTablet} />
            <img
              className={classes.finalBannerImg}
              src={FinalBannerTablet}
              alt=""
            />
          </picture>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.finalBanner}>
      <div>
        <h1>PHOTO-BOOTH</h1>
        <h2>무제한으로 드리는 포토부스</h2>
        <p>하객들은 친구들과 함께 다양한 포즈로 사진을 찍고</p>
        <p>추억을 남기고 싶어 합니다. &apos;지금 이 순간&apos;은 결혼식</p>
        <p>에 온 모든 하객분들이 기념사진을 가져갈 수 있도록</p>
        <p>사진을 즉석에서 무제한으로 인화해드립니다.</p>
      </div>
      <div>
        <picture>
          <source srcSet={FinalBannerPC} />
          <img
            className={classes.finalBannerImg}
            src={FinalBannerPC}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
}

function DrawWeddingSnap(classes, media) {
  if (media === global.ANDROID) {
    return (
      <div className={classes.weddingSnap}>
        <picture>
          <source media="(max-width: 720px)" srcSet={WeddingSnapAndroid} />
          <source media="(min-width: 720px)" srcSet={WeddingSnapTablet} />
          <img
            src={WeddingSnapAndroid}
            alt=""
          />
        </picture>
        <div>
          <h1>PHOTOGRAPHER</h1>
          <h2>사진작가가 진행하는 포토부스</h2>
          <p>저희는 타 포토부스와 다르게</p>
          <p>사진 작가 출신의 대표가 포토부스를 운영합니다.</p>
          <p>포토부스를 운영하는 시간 동안, 대표가 직접 웨딩 스냅을 촬영하고</p>
          <p>지금이순간 디자이너의 보정 후 스냅 사진으로 선물해드려요.</p>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.weddingSnap}>
      <picture>
        <source srcSet={WeddingSnapPC} />
        <img
          src={WeddingSnapPC}
          alt=""
        />
      </picture>
      <div>
        <h1>PHOTOGRAPHER</h1>
        <h2>사진작가가 진행하는 포토부스</h2>
        <p>저희는 타 포토부스와 다르게 사진 작가 출신의 대표가 포토부스를 운영합니다.</p>
        <p>포토부스를 운영하는 시간 동안, 대표가 직접 웨딩 스냅을 촬영하고</p>
        <p>지금이순간 디자이너가 보정 후 스냅 사진으로 선물해드려요.</p>
      </div>
    </div>
  );
}

function DrawSnap(classes) {
  return (
    <div className={classes.snap}>
      <div />
      <p>WEDDING SNAP</p>
    </div>
  );
}


function DrawMiddleBanner(classes, media) {
  function DrawMiddleBannerPC() {
    return (
      <div className={classes.middleBanner}>
        <div>
          <picture>
            <source media="(min-width: 1600px)" srcSet={MiddleBannerPC2} />
            <source srcSet={MiddleBannerPC} />
            <img
              src={MiddleBannerPC}
              alt=""
            />
          </picture>
        </div>
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
      </div>
    );
  }
  function DrawMiddleBannerTablet() {
    return (
      <div className={classes.middleBanner}>
        <div>
          <picture>
            <source media="(max-width: 720px)" srcSet={MiddleBannerAndroid} />
            <source media="(min-width: 720px)" srcSet={MiddleBannerTablet} />
            <img
              src={MiddleBannerAndroid}
              alt=""
            />
          </picture>
        </div>
        <div>
          <div>
            <h>어떻게 하면</h>
            <p>일생에 단 한 번뿐인 결혼식의 행복한 신랑, 신부 그리고 소중한 걸음 해주신 하객분들까지</p>
            <p>모두가 즐거운 결혼식을 만들 수 있을까요? &quot;하객들이 결혼식을 기억하는 것.&quot; </p>
            <p>저희는 하객들의 마음속에 여러분을 남깁니다.</p>
          </div>
        </div>
      </div>
    );
  }


  function DrawMiddleBannerAndroid() {
    return (
      <div className={classes.middleBanner}>
        <div>
          <picture>
            <source media="(max-width: 720px)" srcSet={MiddleBannerAndroid} />
            <source media="(min-width: 720px)" srcSet={MiddleBannerTablet} />
            <img
              src={MiddleBannerAndroid}
              alt=""
            />
          </picture>
        </div>
        <div>
          <div>
            <h>어떻게 하면</h>
            <p>일생에 단 한 번뿐인 결혼식의 행복한 신랑, 신부 그리고 소중한 걸음 해주신 하객분들까지</p>
            <p>모두가 즐거운 결혼식을 만들 수 있을까요? &quot;하객들이 결혼식을 기억하는 것.&quot; </p>
            <p>저희는 하객들의 마음속에 여러분을 남깁니다.</p>
          </div>
        </div>
      </div>
    );
  }

  // const [body, setBody] = useState(DrawMiddleBannerAndroid());
  let body = DrawMiddleBannerAndroid();
  if (media === global.PC) {
    body = DrawMiddleBannerPC();
  } else if (media === global.TABLET) {
    body = DrawMiddleBannerTablet();
  } else {
    body = DrawMiddleBannerAndroid();
  }
  return (
    <div>
      {body}
    </div>
  );
}

function DraswShinyoungInfo(classes) {
  return (
    <div>
      <div>
        <p><strong className={classes.boldText}>&apos;지금이순간&apos;</strong> 포토부스는 연예인이 애용하는 포토부스입니다.</p>
      </div>
      <a href="https://www.instagram.com/p/BqCgH2cnXib/">사용한 연예인 보러가기</a>
      <div>
        <p>또한, 사회적 공신력이 있는 소설 크라우드 펀딩 플랫폼</p>
        <p>'와디즈'에서 크라우드 펀딩을 성공하였습니다.</p>
        <p>이를 통하여, 저희는 우수함과 신뢰를 고객님들께 검증 받았습니다.</p>
      </div>
      <a2 href="https://www.wadiz.kr/web/campaign/detail/29385">와디즈 크라우드 펀딩 보러가기</a2>
    </div>
  );
}

function DrawShinyoungAndroid(classes) {
  return (
    <div className={classes.shinyong}>
      <picture>
        <source media="(max-width: 720px)" srcSet={ShinyoungAndroid} />
        <source media="(min-width: 720px)" srcSet={ShinyoungTablet} />
        <img
          className={classes.shinyoungImg}
          src={ShinyoungAndroid}
          alt=""
        />
      </picture>
      {DraswShinyoungInfo(classes)}
    </div>
  );
}

function DrawShinyoungPC(classes) {
  return (
    <div className={classes.shinyong}>
      <div>
        <picture>
          <source srcSet={ShinyoungPC} />
          <img
            src={ShinyoungPC}
            alt=""
          />
        </picture>
      </div>
      {DraswShinyoungInfo(classes)}
    </div>
  );
}

function DrawShinyoung(classes, media) {
  if (media === global.ANDROID) {
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

function DrawBannerAndroid(classes) {
  return (
    <picture>
      <source media="(max-width: 720px)" srcSet={BannerAndroid} />
      <source media="(min-width: 720px)" srcSet={BannerTablet} />
      <img
        className={classes.bannerImage}
        src={BannerAndroid}
        alt=""
      />
    </picture>
  );
}

function DrawBannerPC(classes) {
  return (
    <>
      <picture>
        <source srcSet={BannerPC} />
        <img
          className={classes.bannerImage}
          src={BannerPC}
          alt=""
        />
      </picture>
      <div className={classes.bannerBox}>
        웨<br />딩<br />포<br />토<br />부<br />스
      </div>
      <div className={classes.bannerBox2}>
        THISISTHEMOMENT
      </div>
      <picture>
        <source srcSet={BannerLogo} />
        <img
          className={classes.bannerLogo}
          src={BannerLogo}
          alt=""
        />
      </picture>
    </>
  );
}

function DrawBanner(classes, media) {
  return (
    <div>
      { media === global.ANDROID ? DrawBannerAndroid(classes) : DrawBannerPC(classes) }
    </div>
  );
}

const Content = ({
  android, tablet, pc,
}) => {
  const classes = useStyles();

  function DrawAndroid() {
    return (
      <div className={classes.root}>
        {DrawBanner(classes, global.ANDROID)}
        {DrawWedding(classes)}
        {DrawShinyoung(classes, global.ANDROID)}
        {DrawMiddleBanner(classes, global.ANDROID)}
        {DrawSnap(classes)}
        {DrawWeddingSnap(classes, global.ANDROID)}
        {DrawFinalBanner(classes, global.ANDROID)}
        {DrawWeddingHall(classes, global.ANDROID)}
        {DrawLastBanner(classes, global.ANDROID)}
        {DrawKakao(classes)}
      </div>
    );
  }
  function DrawTablet() {
    return (
      <div className={classes.root}>
        {DrawBanner(classes, global.ANDROID)}
        {DrawWedding(classes)}
        {DrawShinyoung(classes, global.ANDROID)}
        {DrawMiddleBanner(classes, global.TABLET)}
        {DrawSnap(classes)}
        {DrawWeddingSnap(classes, global.TABLET)}
        {DrawFinalBanner(classes, global.TABLET)}
        {DrawWeddingHall(classes, global.ANDROID)}
        {DrawLastBanner(classes, global.ANDROID)}
        {DrawKakao(classes)}
      </div>
    );
  }
  function DrawPC() {
    return (
      <div>
        <div>
          {DrawBanner(classes, global.PC)}
        </div>
        <div className={classes.root}>
          {DrawWedding(classes)}
          {DrawShinyoung(classes, global.PC)}
        </div>
        <div>
          {DrawMiddleBanner(classes, global.PC)}
        </div>
        <div className={classes.root}>
          {DrawSnap(classes)}
          {DrawWeddingSnap(classes, global.PC)}
        </div>
        <div className={classes.myroot}>
          <div className={classes.root}>
            {DrawFinalBanner(classes, global.PC)}
          </div>
        </div>
        <div>
          {DrawWeddingHall(classes, global.PC)}
          {DrawLastBanner(classes, global.PC)}
        </div>
        <div className={classes.root}>
          {DrawKakao(classes)}
        </div>
      </div>
    );
  }  

  const [body, setBody] = useState(DrawPC());

  useEffect(() => {
    if (android === true) {
      setBody(DrawAndroid());
    } else if (tablet === true) {
      setBody(DrawTablet());
    } else {
      setBody(DrawPC());
    }
  }, [android, tablet, pc]);

  return (
    <div>
      {body}
    </div>
  );
};

Content.propTypes = {
  android: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired,
  pc: PropTypes.bool.isRequired,
};

export default Content;
