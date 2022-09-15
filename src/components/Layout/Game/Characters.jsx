import React from "react";
import { v4 as uuidv4 } from "uuid";
import Char from "./Char";

const Characters = ({ characters }) => {
  return (
    <>
      {characters.map((i) => (
        <Char key={uuidv4()} isCorrect={i.isCorrect}>
          {i.key}
        </Char>
      ))}
    </>
  );
};

export default Characters;
