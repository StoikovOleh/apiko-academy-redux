import { useContext } from 'react';
import { Product } from '../../components/Product';
import { AppContext } from '../../store';

import './styles.css';

export const Busket = () => {
  const { cardItems, removeFromCard } = useContext(AppContext);
  
  return cardItems.length ? (
    <div className="container">
      {cardItems.map((product) => (
        <Product
          product={product}
          removeFromCard={removeFromCard}
          isBusket
        />
      ))}
    </div>
  ) : (
    <div className="empty-container">Sorry there's no items</div>
  )};
