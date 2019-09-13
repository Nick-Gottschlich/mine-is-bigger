import { useEffect, useState } from 'react';
import mineIsBigger from './index';

const useBiggestZIndex = () => {
  const [zIndex, setZIndex] = useState(mineIsBigger());

  // NEVER LET ANYONE BE BIGGER
  useEffect(() => {
    const timer = setInterval(() => {
      setZIndex(mineIsBigger());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return zIndex;
};

export default useBiggestZIndex;
