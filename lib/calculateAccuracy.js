const calculateAccuracy = (correct, wrong) => {
  let totalChars = correct + wrong;
  let totalAccuracy;

  if (totalChars !== 0) {
    // accuracy = characters you typed correctly / total characters
    totalAccuracy = ((totalChars - wrong) / totalChars) * 100;
  } else {
    totalAccuracy = 0;
  }
  return totalAccuracy.toFixed(2);
};

export default calculateAccuracy;
