import Button from '@mui/material/Button';
import React, { useState } from 'react';
export function Task1(props) {
  const { initial = 10, min = -10, max = 10 } = props;
  const [count, setCount] = useState(parseInt(initial));
  function changeCounter(value) {
    if (value === 'increment') {
      if (count + 1 <= max) {
        setCount((prevState) => prevState + 1);
      }
    }
    else if (value === 'decrement') {
      if (count - 1 >= min) {
        setCount((prevState) => prevState - 1);
      }
    }
  }
  return (
    <div>
      <div>Поточний рахунок {count}</div>
      <Button variant="contained" onClick={() => changeCounter('increment')}>+</Button>
      <Button variant="contained" onClick={() => changeCounter('decrement')}>-</Button>
      <Button variant="contained" onClick={() => setCount(parseInt(initial))}>Reset</Button>
    </div>
  )
}
