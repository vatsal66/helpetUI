import React, { useEffect, useState } from 'react';

import { MovingBike, InitialBike } from './styled';

const Bike = ({ setShowDog }) => {
  const [scrollY, setScrollY] = useState(0);
  const movingBikePosition =
    typeof window !== 'undefined' ? window.innerHeight / 2 - 99 : 0;

  useEffect(() => {
    const getScrollPosition = () => {
      window && setScrollY(window.scrollY);
    };

    window && window.addEventListener('scroll', getScrollPosition);
    return () =>
      window && window.removeEventListener('scroll', getScrollPosition);
  }, []);

  useEffect(() => {
    if (movingBikePosition + scrollY > 3130) {
      setShowDog(true);
    } else {
      setShowDog(false);
    }
  }, [scrollY, movingBikePosition, setShowDog]);

  return (
    <>
      <MovingBike
        active={
          movingBikePosition + scrollY > 990 &&
          movingBikePosition + scrollY < 3120
        }
      />
      <InitialBike active={movingBikePosition + scrollY <= 990} />
    </>
  );
};

export default Bike;
