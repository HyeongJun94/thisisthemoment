import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import global from '../modules/global';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

// import BannerPC from '../static/images/PC/mainBanner.png';
// import BannerPC2X from '../static/images/PC/mainBanner@2x.png';
// import BannerAndroid from '../static/images/Android/mainBanner.png';
// import BannerAndroid2X from '../static/images/Android/mainBanner@2x.png';

import LogoAndroid from '../static/images/Android/Main/logo.png';
// import LogoAndroid2X from '../static/images/Android/Main/logo@2x.jpg';

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
    [theme.breakpoints.up(global.PCMinWidth)]: {
      // marginTop: 10 * theme.spacing(2),
      marginTop: '50px',
      fontSize: '28px',
      fontWeight: 'bold',
      lineHeight: 1.43,
      letterSpacing: '-1.4px',
      color: '#ffffff',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      margin: '104px 0 0 0',
      borderBottom: '10px solid #707070',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 2.86,
      letterSpacing: -0.42,
      color: '#707070',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
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
    [theme.breakpoints.down(global.PCMinWidth)]: {
      borderTop: '1px solid #707070',
    },
    [theme.breakpoints.down(global.PCMinWidth)]: {
      borderTop: '1px solid #707070',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      borderTop: '1px solid #707070',
    },
    '& div': {
      [theme.breakpoints.up(global.PCMinWidth)]: {
        marginLeft: 10 * theme.spacing(2),
        width: '1280px',
      },
      [theme.breakpoints.down(global.PCMinWidth)]: {
        marginLeft: theme.spacing(1) * 3,
        width: '100%',
      },
      '& button': {
        backgroundColor: 'transparent',
        fontFamily: 'Noto Sans',
        border: 'none',
        [theme.breakpoints.up(global.PCMinWidth)]: {
          marginRight: 2 * theme.spacing(2),
          fontSize: '20px',
          color: '#ffffff',
          fontWeight: 'bold',
        },
        [theme.breakpoints.down(global.PCMinWidth)]: {
          marginRight: 3 * theme.spacing(1),
          fontSize: '14px',
          color: '#707070',
          fontWeight: '900',
        },
      },
    },
  },
  logo: {
    width: '100%',
  },

  logoImg: {
    // border: '10px solid black',
    display: 'block',
    
    [theme.breakpoints.down(global.PCMinWidth)]: {
      width: '25.7%',
      margin: '24px auto 24px auto',
    },
    [theme.breakpoints.down(global.TabletMinWidth)]: {
      width: '23%',
      margin: '12px auto 12px auto',
      // height: '52px',
      // width: 'auto',
    },
  },

}));

const Header = ({
  android, tablet, pc, onChangeMenu,
}) => {
  const classes = useStyles();
  const sections = [
    { name: 'MAIN', value: global.Main },
    { name: 'BRAND STORY', value: global.BrandStory },
    { name: 'RESERVATION', value: global.Reservation },
    { name: 'SERVICE', value: global.Service },
    { name: 'CUSTOMIZING', value: global.Customize },
    { name: 'FAQ', value: global.FAQ },
  ];

  function DrawPC() {
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar className={classes.toolBar}>
            <div>
              {sections.map(section => (
                <button onClick={onChangeMenu} value={section.value}>{section.name}</button>
              ))}
            </div>
          </Toolbar>
        </AppBar>
        {/* {DrawBanner(classes, global.PC)} */}
      </div>
    );
  }

  function DrawTablet() {
    return (
      <div className={classes.root}>
        <Toolbar>
          <picture className={classes.logo}>
            {/* <source media="(max-width:360px)" srcSet={LogoAndroid} /> */}
            {/* <source media="(min-width:360px)" srcSet={LogoAndroid2X} /> */}
            <img
              className={classes.logoImg}
              src={LogoAndroid}
              alt="logo"
            />
          </picture>
        </Toolbar>
        <Toolbar className={classes.toolBar}>
          <div>
            {sections.map(section => (
              <button onClick={onChangeMenu} value={section.value}>{section.name}</button>
            ))}
          </div>
        </Toolbar>
        {/* {DrawBanner(classes, global.ANDROID)} */}
      </div>
    );
  }

  function DrawAndroid() {
    return (
      <div className={classes.root}>
        <Toolbar>
          <picture className={classes.logo}>
            {/* <source media="(max-width:360px)" srcSet={LogoAndroid} /> */}
            {/* <source media="(min-width:360px)" srcSet={LogoAndroid2X} /> */}
            <img
              className={classes.logoImg}
              src={LogoAndroid}
              alt="logo"
            />
          </picture>
        </Toolbar>
        <Toolbar className={classes.toolBar}>
          <div>
            {sections.map(section => (
              <button onClick={onChangeMenu} value={section.value}>{section.name}</button>
            ))}
          </div>
        </Toolbar>
        {/* {DrawBanner(classes, global.ANDROID)} */}
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

Header.propTypes = {
  android: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired,
  pc: PropTypes.bool.isRequired,
  onChangeMenu: PropTypes.func.isRequired,
};

export default Header;
