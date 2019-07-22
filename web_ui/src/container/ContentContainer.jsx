import React, { useState, useEffect } from 'react';
import Content from '../components/Content';

const ContentContainer = ({ mediaAndroid, mediaPC }) => {
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
      <Content android={android} />
    </div>
  );
};
export default ContentContainer;
