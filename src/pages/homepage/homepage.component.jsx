import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='homepage__container'>
      <div className='homepage__container-item'>
        <SignIn />
      </div>
    </div>
  </div>
);

export default HomePage;
