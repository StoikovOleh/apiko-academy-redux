import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

import { AppContext } from '../../store';
import { BusketButton } from './BusketButton';

import './Navbar.css';

export const Navbar = () => {
  const {cardItems} = useContext(AppContext)

  return (
  <AppBar position="static">
    <Toolbar id="toolbar" variant="dense">
      <Link id="title" to="/">
        <h3>
          Courses
        </h3>
      </Link>
      <BusketButton cardItemsCount={cardItems.length}/>
    </Toolbar>
  </AppBar>
)};
