import { Badge, IconButton } from '@material-ui/core';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

export const BusketButton = ({cardItemsCount}) => (
  <Badge badgeContent={cardItemsCount} color="error">
  <IconButton style={{padding: 0}}>
    <Link to="/busket">
      <ShoppingBasket htmlColor="#fff" />
    </Link>
  </IconButton>
  </Badge>
);
