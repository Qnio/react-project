import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='home'>
      <p>HOME</p>
    </Link>
  </div>
);

export default Header;
