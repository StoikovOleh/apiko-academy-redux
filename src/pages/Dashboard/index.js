import { useContext } from 'react';
import { Product } from '../../components/Product';
import { PRODUCTS } from '../../mocks';
import { AppContext } from '../../store';

import './styles.css';

export const Dashboard = () => {
  const { addToCard } = useContext(AppContext);

  return (
  <div className="container">
    {PRODUCTS.map((product) => (
      <Product product={product} addToCard={addToCard}/>
    ))}
  </div>
)};
