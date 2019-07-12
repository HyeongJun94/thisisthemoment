import React from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import Container  from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Logo from '../static/images/Logo.png';
import TitleImgPC from '../static/images/TitleImgPC.png';
import TitleImgAndroid from '../static/images/TitleImgAndroid.png';
import Mustache from '../static/images/Mustache.png';
import Yubin from '../static/images/Yubin.png';


const ANDROID = 1;
const PC = 0;

// LogIn, Register 버튼 icon으로 바꾸면 좋을듯?

const useStyles = makeStyles(theme => ({
  appBar: {
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: 'transparent',
    // opacity: '0.5',
  },
  // 68 x 54 image
  toolbarTitle: {
    flex: 1,
  },
  grid: {
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: 68,
    },
  },
  button: {
    marginLeft: theme.spacing(1),
    fontFamily: 'Less',
    fontStyle: 'normal',
    fontStretch: 'normal',
    
    [theme.breakpoints.up('xs')]: {
      fontSize: 24,
      fontWeight: 'normal',
      lineHeight: 1.46,
      letterSpacing: 'normal',
      color: '#ffffff',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 2.86,
      letterSpacing: -0.42,
      color: '#707070',
    },
  },
  titleImage: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    [theme.breakpoints.down('xs')]: {

    },
  },
  weddingPhotoBooth: {
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontFamily: 'PlayfairDisplaySC',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    color: '#b4a570',
    lineHeight: 1.33,

    [theme.breakpoints.up('xs')]: {
      width: 716,
      height: 80,
      fontSize: 60,
      letterSpacing: -1.44,
      marginTop: 57,
    },
    [theme.breakpoints.down('xs')]: {
      width: 191,
      height: 21,
      fontSize: 16,
      letterSpacing: -0.38,
      marginTop: 16.5,
    },
  },
  celebrity: {
    fontFamily: 'MSugiJeong',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    textAlign: 'center',
    color: '#707070',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.21,

    [theme.breakpoints.up('xs')]: {
      width: 392,
      height: 40,
      fontSize: 40,
      letterSpacing: -0.8,
      marginTop: 16,
    },
    [theme.breakpoints.down('xs')]: {
      width: 138,
      height: 14,
      letterSpacing: -0.28,
      fontSize: 14,
      marginTop: 5,
    },
  },
  logo: {
    display: 'block',
    marginLeft: 'auto',
  },
  searchIcon: {
    color: '#222222',
    marginLeft: 'auto',
  },
  mustacheImg: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('xs')]: {

    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: 550,
      maxHeight: 505.5,
      objectFit: 'contain',
    },
  },
  gridMustache: {
    marginTop: 84,
  },
  mustacheInfo: {
    [theme.breakpoints.down('xs')]: {
    },
    [theme.breakpoints.up('xs')]: {
    }, 
  },
  mustacheInfoTitle: {
    fontFamily: 'NotoSansCJKkr',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    color: '#707070',

    [theme.breakpoints.down('xs')]: {
      

    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: 472,
      maxHeight: 59,
      fontSize: 29,
      lineHeight: 1.48,
      letterSpacing: -1.2,
    },
  },
  mustacheInfoContent: {
    fontFamily: 'NotoSansCJkkr',
    color: '#707070',
    [theme.breakpoints.down('xs')]: {
    },
    [theme.breakpoints.up('xs')]: {
      marginTop: 32,
      fontSize: 20,
      fontWeight: 'bold',
    },
  },
  mustacheInfoButton: {
    borderRadius: 30,
    border: 'solid 1px #707070',
    textAlign: 'center',
    fontFamily: 'NotoSansCJKkr',
    [theme.breakpoints.down('xs')]: {
    },
    [theme.breakpoints.up('xs')]: {
      marginTop: 16,
      width: 398,
      heigth: 62,
      fontSize: 24,
    },
  },
  yubin: {
    backgroundColor: 'rgba(0,0,0,0.38)',

    [theme.breakpoints.down('xs')]: {
    },
    [theme.breakpoints.up('xs')]: {
      marginTop: 156,
      maxWidth: 1280,
    }, 
  },

  yubinTitle: {
    fontFamily: 'NotoSansKR',
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 'spacing(2)',
    [theme.breakpoints.down('xs')]: {
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: 378,
      maxHeight: 119,
      fontSize: 70,
    }, 
  },  
  yubinInfo: {

  },
  yubinGrid: {
    
  },
}));

function DrawYubin(classes) {
  return (
    <Container className={classes.yubin}>
      <Grid container spacing={0}>
        <Grid item xs={6} alignContent="center" alignItems="center">
          <div className={classes.yubinTitle}>
            어떻게 하면
          </div>
          <div className={classes.yubinInfo}>
            일상에 단 한 번뿐인 결혼식의 행복한 <b>신랑, 신부</b> <br/>
            그리고 소중한 걸음 해주신 하객분들까지 <br/>
            모두가 즐거운 <b>결혼식을 만들 수 있을까요?</b>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img
            src={Yubin}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
      
    
  );
}

function DrawMustacheInfo(classes) {
  return (
    <div>
      <div className={classes.mustacheInfoTitle}>
        왜 지금 이 순간이어야할까요?
      </div>
      <div className={classes.mustacheInfoContent}>
        <strong>저희</strong> 지금 이 순간은 <strong>포토부스는 연예인이 애용하는 포토부스입니다.</strong>
      </div>
      <div>
        <Button className={classes.mustacheInfoButton} >
          사용한 연예인 보러가기
        </Button>
      </div>
    </div>
  );
}

function DrawMustachePC(classes) {
  return (
    <div>
      <Grid
        container
        className={classes.gridMustache}
        spacing={5}
      >
        <Grid item>
          <img
            className={classes.mustacheImg}
            src={Mustache}
            alt=""
          />
        </Grid>
        <Grid item>
          <div>
            {DrawMustacheInfo(classes)}
          </div>
          <div>

          </div>
        </Grid>
      </Grid>
    </div>
  );
}
function DrawMustacheAndroid(classes) {

}

function DrawContent(classes, media) {
  return (
    <div>
      <div className={classes.weddingPhotoBooth}>
        WEDDING PHOTO-BOOTH
      </div>
      <div className={classes.celebrity}>
        셀럽도 찾는 포토부스
      </div>
      <div>
        {(media === ANDROID) ? DrawMustacheAndroid(classes) : DrawMustachePC(classes)}
      </div>
      <div>
        {DrawYubin(classes)}
      </div>
    </div>
  );
}

function DrawTitleImage(classes, media) {
  return (
    <img
      className={classes.titleImage}
      src={media === ANDROID ? TitleImgAndroid : TitleImgPC}
      alt=""
    />
  );
}

function DrawAndroid() {
  const classes = useStyles();
  const sections = [
    { name: 'MAIN' },
    { name: 'BRAND STORY' },
  ];
  return (
    <div>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="#222222"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <img
            className={classes.logo}
            src={Logo}
            alt=""
          />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>

        </Toolbar>
      </AppBar>
      <Grid className={classes.grid}>
        {sections.map(section => (
          <Button className={classes.button}>{section.name}</Button>
        ))}
      </Grid>
      {DrawTitleImage(classes, ANDROID)}
      {DrawContent(classes, ANDROID)}
    </div>
  );
}

function DrawPC() {
  const classes = useStyles();
  const sections = [
    { name: 'MAIN' },
    { name: 'SERVICE' },
    { name: 'GALLARY' },
    { name: 'CUSTOMIZING' },
    { name: 'Q&A' },
    { name: 'REVIEW' },
    { name: 'RESERVATION' },
  ];

  return (
    <div>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <Grid className={classes.grid}>
            {sections.map(section => (
              <Button className={classes.button}>{section.name}</Button>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
      {DrawTitleImage(classes, PC)}
      {DrawContent(classes, PC)}
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
