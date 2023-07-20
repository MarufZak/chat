export const getFromLocalStorage = (name) => {
  let result = null;
  try {
    const localStorageValue = localStorage.getItem(name);
    if (localStorageValue) {
      result = JSON.parse(localStorageValue);
    }
  } catch (error) {
    alert(`Error occured. If you disabled cookies, please enable them...`);
  }

  return result;
};

export const setToLocalStorage = (name, value) => {
  try {
    localStorage.setItem(name, JSON.stringify(value));
  } catch (error) {
    alert(`Error occured. If you disabled cookies, please enable them...`);
  }
};
