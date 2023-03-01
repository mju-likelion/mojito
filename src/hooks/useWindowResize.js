import { useEffect, useState } from 'react';

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({ width: null, height: null });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowSize, setWindowSize];
};

export default useWindowResize;
