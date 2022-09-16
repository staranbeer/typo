const calculateSpeed = (right, wrong, duration) => {
  let totalWords = (right + wrong) / 5;
  let speed = (totalWords / duration) * 60;
  return speed.toFixed(2);
};

export default calculateSpeed;
