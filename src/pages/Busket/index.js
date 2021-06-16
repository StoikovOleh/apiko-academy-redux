import { Product } from '../../components/Product';

import './styles.css';

export const Busket = ({ cardItems, removeFromCard }) =>
  cardItems.length ? (
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
  );
