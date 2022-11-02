import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const add = (boxProp) => {
    setBoxes((boxes) => [...boxes, boxProp]);
  };
  const deleteBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const allBoxes = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={deleteBox}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm newBox={add} />
      {allBoxes}
    </div>
  );
};

export default BoxList;
