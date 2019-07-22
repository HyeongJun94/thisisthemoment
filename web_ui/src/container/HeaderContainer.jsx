import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const HeaderContainer = ({ mediaAndroid, mediaPC }) => {
  const [android, setAndroid] = useState(false);
  useEffect(() => {
    if (mediaAndroid) {
      setAndroid(true);
    } else {
      setAndroid(false);
    }
  });

  return (
    <div>
      <Header android={android} />
    </div>
  );
};
export default HeaderContainer;
