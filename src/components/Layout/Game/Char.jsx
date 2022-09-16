import React from "react";

const Char = ({ children, isCorrect = false }) => {
  return <span style={{ color: isCorrect ? "#fff" : "#777" }}>{children}</span>;
};

export default Char;
