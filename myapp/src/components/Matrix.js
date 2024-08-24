import React, { useState } from 'react';

const Matrix = () => {
  const [boxes, setBoxes] = useState(Array(9).fill('white'));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (boxes[index] !== 'white') return;

    const newBoxes = [...boxes];
    newBoxes[index] = 'green';
    setBoxes(newBoxes);
    setClickOrder([...clickOrder, index]);

    if (clickOrder.length === 8) {
      const finalBoxes = [...newBoxes];
      clickOrder.forEach((i, idx) => {
        setTimeout(() => {
          finalBoxes[i] = 'orange';
          setBoxes([...finalBoxes]);
        }, 100 * (idx + 1));
      });
      setTimeout(() => {
        finalBoxes[index] = 'orange';
        setBoxes([...finalBoxes]);
      }, 100 * 9);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-48 mx-auto my-10">
      {boxes.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={`w-16 h-16 ${color === 'white' ? 'bg-white' : color === 'green' ? 'bg-green-500' : 'bg-orange-500'} border border-gray-500 cursor-pointer`}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
