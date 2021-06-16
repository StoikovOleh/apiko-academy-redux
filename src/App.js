import { useState } from 'react';
import { Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Busket } from './pages/Busket';
import { Dashboard } from './pages/Dashboard';

import './App.css';


function App() {
  const [cardItems, setCard] = useState([]);

  const addToCard = (newItem) => {
    if (!cardItems.find((item) => item.id === newItem.id)) {
      setCard([...cardItems, newItem]);
    }
  };
  
  const removeFromCard = (id) => {
    setCard(cardItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cardItems={cardItems} />
      <Route exact path="/">
        <Dashboard addToCard={addToCard} />
      </Route>
      <Route path="/busket">
        <Busket cardItems={cardItems} removeFromCard={removeFromCard}/>
      </Route>
    </>
  );
}

export default App;
