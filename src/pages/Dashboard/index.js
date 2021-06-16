import { Product } from '../../components/Product';
import { PRODUCTS } from '../../mocks';

import './styles.css';

export const Dashboard = ({addToCard}) => (
  <div className="container">
    {PRODUCTS.map((product) => (
      <Product product={product} addToCard={addToCard}/>
    ))}
  </div>
);
