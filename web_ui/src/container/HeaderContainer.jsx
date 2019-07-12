import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const HeaderContainer = ({ xsMatches, mdMatches }) => {
  const [android, setAndroid] = useState(false);
  useEffect(() => {
    if (xsMatches) {
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
