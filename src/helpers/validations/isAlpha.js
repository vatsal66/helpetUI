const isAlpha = (string, min = 3, max) => {
  if (string.length < min || string.length > max) {
    return false;
  }

  const regEx = /^([A-Za-z ])*$/
  return regEx.test(string);
};

export default isAlpha;
