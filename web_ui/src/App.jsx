import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CssBaseline, makeStyles } from '@material-ui/core';

import HeaderContainer from './container/HeaderContainer.jsx'
import ContentContainer from './container/ContentContainer.jsx';
import FooterContainer from './container/FooterContainer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    // margin: '0 auto 0 auto',
    maxWidth: '1280px',
    margin: '0 auto 0 auto',
    border: '1px solid black',
  },
  tmp: {
    border: '10px solid black',
  },
}));

export default function App() {
  const theme = useTheme();
  // 이거 어쩔때 rendering 할까?
  const mediaAndroid = useMediaQuery(theme.breakpoints.down('700'));
  const mediaPC = useMediaQuery(theme.breakpoints.down('1280'));

  const width = mediaAndroid ? 'sm' : 'lg';

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container
        fixed={true}
        maxWidth={width}
        className={classes.root}
      >
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
      </Container> */}
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
