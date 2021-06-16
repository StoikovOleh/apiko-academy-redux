import { Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Busket } from './pages/Busket';
import { Dashboard } from './pages/Dashboard';

import './App.css';
import { useState } from 'react';

function App() {
  const [cardItems, setCard] = useState([]);

  const handleAddToCard = (newItem) => {
    if (!cardItems.find((item) => item.id === newItem.id)) {
      setCard([...cardItems, newItem]);
    }
  };
  
  const handleRemoveFromCard = (id) => {
    setCard(cardItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cardItems={cardItems} />
      <Route exact path="/">
        <Dashboard addToCard={handleAddToCard} />
      </Route>
      <Route path="/busket">
        <Busket cardItems={cardItems} removeFromBusket={handleRemoveFromCard}/>
      </Route>
    </>
  );
}

export default App;
