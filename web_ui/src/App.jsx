import React, { useState, useEffect } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';
import global from './modules/global';

import HeaderContainer from './container/HeaderContainer.jsx'
import ContentContainer from './container/ContentContainer.jsx';
import BrandStoryContainer from './container/BrandStoryContainer.jsx';
import FooterContainer from './container/FooterContainer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: '0 auto 0 auto',
    [theme.breakpoints.up(global.TabletMinWidth)]: {
      maxWidth: '100%',
    },
  },
}));

export default function App() {
  const theme = useTheme();
  // 이거 어쩔때 rendering 할까?
  const mediaAndroid = useMediaQuery(theme.breakpoints.up(global.AndroidMinWidth));
  const mediaTablet = useMediaQuery(theme.breakpoints.up(global.TabletMinWidth));
  const mediaPC = useMediaQuery(theme.breakpoints.up(global.PCMinWidth));
  const classes = useStyles();

  // const [menu, setMenu] = useState(global.Main);
  const [menu, setMenu] = useState(global.BrandStory);
  const [body, setBody] = useState(<ContentContainer mediaAndroid={mediaAndroid} mediaPC={mediaPC} />)

  const onChangeMenu = (e) => {
    e.preventDefault();
    setMenu(e.target.value);
  };

  useEffect(() => {
    if (menu == global.BrandStory) {
      setBody(<BrandStoryContainer mediaAndroid={mediaAndroid} mediaTablet={mediaTablet} mediaPC={mediaPC} />);
    } else if (menu == global.Reservation) {
      console.log ("Reservation");
    } else {
      setBody(<ContentContainer mediaAndroid={mediaAndroid} mediaTablet={mediaTablet} mediaPC={mediaPC} />);
    }
  }, [menu, mediaAndroid, mediaTablet, mediaPC]);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <HeaderContainer
          mediaAndroid={mediaAndroid}
          mediaTablet={mediaTablet}
          mediaPC={mediaPC}
          onChangeMenu={onChangeMenu}
        />
        {body}
        <FooterContainer
          mediaAndroid={mediaAndroid}
          mediaPC={mediaPC}
        />
      </div>
    </React.Fragment>
  );
}
