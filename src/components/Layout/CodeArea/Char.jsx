import React from "react";

const Char = ({ children, color = "#666" }) => {
  return <span style={{ color: color }}>{children}</span>;
};

export default Char;
