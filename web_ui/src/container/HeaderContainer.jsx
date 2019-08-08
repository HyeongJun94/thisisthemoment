import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const HeaderContainer = ({ mediaAndroid, mediaPC, onChangeMenu }) => {
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
      <Header android={android} onChangeMenu={onChangeMenu} />
    </div>
  );
};
export default HeaderContainer;
