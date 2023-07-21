import React from 'react';

const useKeyDown = (code) => {
  const [isPressed, setIsPressed] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === code) {
        setIsPressed(true);
      } else {
        setIsPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [code]);

  return isPressed;
};

export default useKeyDown;
