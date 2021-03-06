import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat 
      renderText={(value) => (
        <>
          <p>
            Subtotal (<b>{basket.length}</b>) items:
            <strong> {value}</strong>
          </p>
          <small className='subtotal-gift'>
            <input type='checkbox' /> This order
            contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      />

      <button className='btn'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;