import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

const FooterContainer = ({ mediaAndroid, mediaPC }) => {
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
      <Footer android={android} />
    </div>
  );
};
export default FooterContainer;
