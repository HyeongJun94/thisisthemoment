import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';

import HeaderContainer from './container/HeaderContainer.jsx'
import ContentContainer from './container/ContentContainer.jsx';
import FooterContainer from './container/FooterContainer';

const mediaSize = '360';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: '0 auto 0 auto',
    [theme.breakpoints.up(mediaSize)]: {
      maxWidth: '1920px',
    },
  },
}));

export default function App() {
  const theme = useTheme();
  // 이거 어쩔때 rendering 할까?
  const mediaAndroid = useMediaQuery(theme.breakpoints.down('700'));
  const mediaPC = useMediaQuery(theme.breakpoints.down('1280'));
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <HeaderContainer
          mediaAndroid={mediaAndroid}
          mediaPC={mediaPC}
        />
        <ContentContainer
          mediaAndroid={mediaAndroid}
          mediaPC={mediaPC}
        />
        <FooterContainer
          mediaAndroid={mediaAndroid}
          mediaPC={mediaPC}
        />
      </div>
    </React.Fragment>
  );
}
