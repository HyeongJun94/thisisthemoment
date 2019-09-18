import React, { useState, useEffect } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';
import global from './modules/global';

import HeaderContainer from './container/HeaderContainer.jsx'
import ContentContainer from './container/ContentContainer.jsx';
import BrandStoryContainer from './container/BrandStoryContainer.jsx';
import FooterContainer from './container/FooterContainer';
import ReservationContainer from './container/ReservationContainer';
import ServiceContainer from './container/ServiceContainer';
import CustomizeContainer from './container/CustomizeContainer';
import FAQContainer from './container/FAQContainer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: '0 auto 0 auto',
    backgroundColor: 'white',
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

  const [menu, setMenu] = useState(global.Main);
  // const [menu, setMenu] = useState(global.BrandStory);
  // const [menu, setMenu] = useState(global.Reservation);
  // const [menu, setMenu] = useState(global.Service);
  // const [menu, setMenu] = useState(global.Customize);
  // const [menu, setMenu] = useState(global.FAQ);
  const [body, setBody] = useState(<ContentContainer mediaAndroid={mediaAndroid} mediaPC={mediaPC} />)

  const onChangeMenu = (e) => {
    e.preventDefault();
    setMenu(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (menu == global.BrandStory) {
      setBody(<BrandStoryContainer mediaAndroid={mediaAndroid} mediaTablet={mediaTablet} mediaPC={mediaPC} />);
    } else if (menu == global.Reservation) {
      setBody(<ReservationContainer mediaAndroid={mediaAndroid} mediaTablet={mediaTablet} mediaPC={mediaPC} />);
    } else if (menu == global.Main) {
      setBody(<ContentContainer mediaAndroid={mediaAndroid} mediaTablet={mediaTablet} mediaPC={mediaPC} />);
    } else if (menu == global.Service) {
      setBody(<ServiceContainer mediaAndroid={mediaAndroid} mediaTablet={mediaTablet} mediaPC={mediaPC} />);
    } else if (menu == global.Customize) {
      setBody(<CustomizeContainer mediaAndroid={mediaAndroid} mediaTablet={mediaTablet} mediaPC={mediaPC} />);
    } else if (menu == global.FAQ) {
      setBody(<FAQContainer mediaAndroid={mediaAndroid} mediaTablet={mediaTablet} mediaPC={mediaPC} />);
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
