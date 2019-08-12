import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import global from '../modules/global';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

// import BannerPC from '../static/images/PC/mainBanner.png';
// import BannerPC2X from '../static/images/PC/mainBanner@2x.png';
// import BannerAndroid from '../static/images/Android/mainBanner.png';
// import BannerAndroid2X from '../static/images/Android/mainBanner@2x.png';

import LogoAndroid from '../static/images/Android/Main/logo.jpg';

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
    [theme.breakpoints.up(global.TabletMinWidth)]: {
      marginTop: 10 * theme.spacing(2),
      fontSize: '28px',
      fontWeight: 'bold',
      lineHeight: 1.43,
      letterSpacing: '-1.4px',
      color: '#ffffff',
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
    '& div': {
      [theme.breakpoints.up(global.TabletMinWidth)]: {
        marginLeft: 10 * theme.spacing(2),
        width: '1280px',
      },
      [theme.breakpoints.down(global.TabletMinWidth)]: {
        marginLeft: theme.spacing(1) * 3,
        width: '100%',
      },
      '& button': {
        backgroundColor: 'transparent',
        fontFamily: 'NotoSans',
        border: 'none',
        [theme.breakpoints.up(global.TabletMinWidth)]: {
          marginRight: 2 * theme.spacing(2),
          fontSize: '20px',
          color: '#ffffff',
          fontWeight: 'bold',
        },
        [theme.breakpoints.down(global.TabletMinWidth)]: {
          marginRight: 3 * theme.spacing(1),
          fontSize: '14px',
          color: '#707070',
          fontWeight: '300',
        },
      },
    },
  },
}));

const Header = ({ android, onChangeMenu }) => {
  const classes = useStyles();
  const sections = [
    { name: 'MAIN', value: global.Main },
    { name: 'BRAND STORY', value: global.BrandStory },
    { name: 'RESERVATION', value: global.Reservation },
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
  function DrawAndroid() {
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
              <button onClick={onChangeMenu} value={section.value}>{section.name}</button>
            ))}
          </div>
        </Toolbar>
        {/* {DrawBanner(classes, global.ANDROID)} */}
      </div>
    );
  }
  return (
    <div>
      {android ? DrawAndroid() : DrawPC()}
    </div>
  );
};

export default Header;
