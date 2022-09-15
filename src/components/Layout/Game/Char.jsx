import React from "react";

const Char = ({ children, isCorrect = false }) => {
  return <span style={{ color: isCorrect ? "#fff" : "#333" }}>{children}</span>;
};

export default Char;
