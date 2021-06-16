import { Product } from '../../components/Product';

import './styles.css';

export const Busket = ({ cardItems, removeFromBusket }) =>
  cardItems.length ? (
    <div className="container">
      {cardItems.map((product) => (
        <Product
          product={product}
          removeFromBusket={removeFromBusket}
          isBusket
        />
      ))}
    </div>
  ) : (
    <div className="empty-container">Sorry there's no items</div>
  );
