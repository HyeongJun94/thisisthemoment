import React, { useState, useEffect } from 'react';
import BrandStory from '../components/BrandStory';

const BransStoryContainer = ({ mediaAndroid, mediaPC }) => {
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
      <BrandStory android={android} />
    </div>
  );
};
export default BransStoryContainer;
