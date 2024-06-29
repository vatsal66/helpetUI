import { useState, useRef, useEffect } from 'react';

const useScrollAnimation = (delayMargin = 160) => {
  const [animated, setAnimated] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const topPosition = componentRef.current?.getBoundingClientRect().top;

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      if (topPosition + delayMargin < scrollPosition) {
        setAnimated(true);
      } else {
        setAnimated(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [delayMargin]);

  return [componentRef, animated];
};

export default useScrollAnimation;
