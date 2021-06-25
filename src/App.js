import { useState } from 'react';
import { Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Busket } from './pages/Busket';
import { Dashboard } from './pages/Dashboard';

import './App.css';
import { AppContext } from './store';


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
    <AppContext.Provider value={{cardItems, addToCard, removeFromCard}}>
      <Navbar />
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/busket">
        <Busket />
      </Route>
    </AppContext.Provider>
  );
}

export default App;
