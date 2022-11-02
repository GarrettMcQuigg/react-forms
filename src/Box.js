import React, { useState } from "react";
import "./Box.css";

const Box = ({
  id,
  backgroundColor = "grey",
  height = 50,
  width = 50,
  handleRemove,
}) => {
  const deleteBox = () => handleRemove(id);
  return (
    <div className="box-container">
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor,
        }}
      >
        <button onClick={deleteBox}>X</button>
      </div>
    </div>
  );
};

export default Box;
