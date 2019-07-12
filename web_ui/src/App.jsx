import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import HeaderContainer from './container/HeaderContainer.jsx'
import Title from './components/Title.jsx'
import Content from './components/Content.jsx'

export default function App() {
  const theme = useTheme();
  // 이거 어쩔때 rendering 할까?
  const xsMatches = useMediaQuery(theme.breakpoints.down('xs'));
  const mdMatches = useMediaQuery(theme.breakpoints.down('md'));

  const width = xsMatches ? 'sm' : 'lg';

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={width}>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <div>
          <HeaderContainer
            xsMatches={xsMatches}
            mdMatches={mdMatches}
          />
          <Content />
        </div>
      </Container>
    </React.Fragment>
  );
}
