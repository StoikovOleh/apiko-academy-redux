import { Button } from '@material-ui/core';

import './styles.css';

export const Product = ({
  product,
  addToCard,
  removeFromCard,
  isBusket = false,
}) => {
  const handleAddToCard = () => {
    addToCard(product);
  };

  const handleRemoveFromCard = () => {
    removeFromCard(product.id);
  };

  return (
    <div className="item-container">
      <h2 className="item-title">{product.title}</h2>
      <img
        className="item-avatar"
        width="auto"
        height="150px"
        alt={product.title}
        src={product.imageUrl}
      />
      <p className="item-price" color="textPrimary">
        {product.price}$
      </p>
      <Button
        variant="outlined"
        color="primary"
        onClick={isBusket ? handleRemoveFromCard : handleAddToCard}
      >
        {isBusket ? 'Remove' : 'Buy'}
      </Button>
    </div>
  );
};
