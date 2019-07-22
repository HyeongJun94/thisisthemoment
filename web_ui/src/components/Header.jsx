import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import BannerPC from '../static/images/PC/banner.png';
import BannerAndroid from '../static/images/Android/banner.png';
import LogoAndroid from '../static/images/Android/logo.jpg';

const ANDROID = 1;
const PC = 0;

const mediaSize = '360';

const useStyles = makeStyles(theme => ({
  root: {
    '& *' : {
      // border: '1px solid black',
      margin: '0px',
      padding: '0px',
      fontSize: 0,
    },
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    [theme.breakpoints.up(mediaSize)]: {
      marginTop: 10 * theme.spacing(2),
      fontSize: '28px',
      fontWeight: 'bold',
      lineHeight: 1.43,
      letterSpacing: '-1.4px',
      color: '#ffffff',
    },
    [theme.breakpoints.down(mediaSize)]: {
      margin: '104px 0 0 0',
      borderBottom: '10px solid #707070',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 2.86,
      letterSpacing: -0.42,
      color: '#707070',
    },
  },
  toolBar: {
    margin: '0 auto 0 auto',
    fontSize: '10px',
    maxWidth: '1280px',
    // [theme.breakpoints.up('1280')]: {
    //   width: '1280px',
    // },
    // [theme.breakpoints.down('1280')]: {
    //   width: '100%',
    // },
    '& div': {
      [theme.breakpoints.up(mediaSize)]: {
        marginLeft: 10 * theme.spacing(2),
        width: '1280px',
      },
      [theme.breakpoints.down(mediaSize)]: {
        marginLeft: theme.spacing(1) * 3,
        width: '100%',
      },
      '& button': {
        backgroundColor: 'transparent',
        fontFamily: 'NotoSans',
        border: 'none',
        [theme.breakpoints.up(mediaSize)]: {
          marginRight: 2 * theme.spacing(2),
          fontSize: '20px',
          color: '#ffffff',
          fontWeight: 'bold',
        },
        [theme.breakpoints.down(mediaSize)]: {
          marginRight: 3 * theme.spacing(1),
          fontSize: '14px',
          color: '#707070',
          fontWeight: '300',
        },
      },
    },
  },
  bannerImage: {
    display: 'block',
    margin: '0 auto 0 auto',
    width: '100%',
    // maxWidth: '1280px',
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
}));

function DrawBanner(classes, media) {
  return (
    <img
      className={classes.bannerImage}
      src={media === ANDROID ? BannerAndroid : BannerPC}
      alt=""
    />
  );
}

function DrawAndroid() {
  const classes = useStyles();
  const sections = [
    { name: 'MAIN' },
    { name: 'BRAND STORY' },
    { name: 'RESERVATION' },
  ];

  return (
    <div className={classes.root}>
      <Toolbar className={classes.logo}>
        <img
          src={LogoAndroid}
          alt="lgo"
        />
      </Toolbar>
    
      <Toolbar className={classes.toolBar}>
        <div>
          {sections.map(section => (
            <button>{section.name}</button>
          ))}
        </div>
      </Toolbar>
      {DrawBanner(classes, ANDROID)}
    </div>
  );
}

function DrawPC() {
  const classes = useStyles();
  const sections = [
    { name: 'MAIN' },
    { name: 'BRAND STORY' },
    { name: 'RESERVATION' },
    { name: '+' },
  ];

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolBar}>
          <div>
            {sections.map(section => (
              <button>{section.name}</button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      {DrawBanner(classes, PC)}
    </div>
  );
}
const Header = ({ android }) => {
  return (
    <div>
      {android ? DrawAndroid() : DrawPC()}
    </div>
  );
};

export default Header;
