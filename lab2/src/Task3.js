import { CreateCard } from './CreateCard';
import React, { useState } from 'react';
export function Task3(props) {
  const [totals, setTotal] = useState(0);
  const handleNameChange = (total) => {
    setTotal(totals + total);
  }
  return (
    <div>
      <div className='wrapper'>
        <div className='card-title'>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        {props.cards.map((card) =>
          <div className='card-block'>
            <p>{card.name}</p>
            <p>{card.price}</p>
            <CreateCard price={card.price} tem={handleNameChange} />
          </div>
        )}
      </div>
      <div className='wrapper-total'>
        {totals}
      </div>
    </div>
  )
}
