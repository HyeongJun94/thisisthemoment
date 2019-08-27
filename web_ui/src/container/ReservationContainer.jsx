import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Reservation from '../components/Reservation';

const ReservationContainer = ({
  mediaAndroid, mediaTablet, mediaPC,
}) => {
  const [android, setAndroid] = useState(false);
  const [tablet, setTablet] = useState(false);
  const [pc, setPC] = useState(false);

  useEffect(() => {
    if (mediaPC === true) {
      setAndroid(false);
      setTablet(false);
      setPC(true);
    } else if (mediaTablet === true) {
      setAndroid(false);
      setTablet(true);
      setPC(false);
    } else {
      setAndroid(true);
      setTablet(false);
      setPC(false);
    }
  }, [mediaAndroid, mediaTablet, mediaPC]);

  return (
    <div>
      <Reservation android={android} tablet={tablet} pc={pc} />
    </div>
  );
};

ReservationContainer.propTypes = {
  mediaAndroid: PropTypes.bool.isRequired,
  mediaTablet: PropTypes.bool.isRequired,
  mediaPC: PropTypes.bool.isRequired,
};

export default ReservationContainer;
