import React from 'react';

const useWindowSize = (query) => {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = (e) => {
      setSize({
        width: e.target.innerWidth,
        height: e.target.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [query]);

  return {
    width: size.width,
    height: size.height,
  };
};

export default useWindowSize;
