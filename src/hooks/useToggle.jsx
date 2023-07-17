import React from 'react';

const useToggle = (initialValue = false) => {
  if (typeof initialValue !== 'boolean') {
    throw new Error(`Type of initialValue for useToggle must be boolean`);
  }
  const [value, setValue] = React.useState(initialValue);

  const handleToggle = React.useCallback(() => {
    setValue((prevValue) => {
      return !prevValue;
    });
  }, []);

  return [value, handleToggle];
};

export default useToggle;
