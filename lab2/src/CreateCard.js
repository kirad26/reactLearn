import Button from '@mui/material/Button';
import React, { useState } from 'react';
export function CreateCard(props) {
  function handleNameChange(price) {
    props.tem(price);
  }
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const calc = (name) => {
    if (name === 'increment') {
      setCount((prevState) => prevState + 1);
      setSum(sum + props.price);
      handleNameChange(props.price);
    }
    else if (name === 'decrement') {
      if (count - 1 >= 0) {
        setCount((prevState) => prevState - 1);
        setSum(sum - props.price);
        handleNameChange(-props.price);
      }
    }
    else if (name === 'reset') {
      setCount(0);
      setSum(0);
      handleNameChange(-sum);
    }
  }
  return (
    <div>
      <Button variant="contained" value={props.price} onClick={() => calc('increment')}>+</Button>
      {count}
      <Button variant="contained" onClick={() => calc('decrement', props.price)}>-</Button>
      <Button variant="contained" onClick={() => calc('reset')}>Reset</Button>
      <p>{sum}</p>
    </div>
  )
}