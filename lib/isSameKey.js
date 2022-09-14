const isSameKey = (pressedKey, currentKey) => {
  if (pressedKey === " " && currentKey === "_") {
    return true;
  }

  if (pressedKey === currentKey) {
    return true;
  }
  return false;
};

export default isSameKey;
