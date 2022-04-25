import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import Header from './static_page/Header/Header';
import Navbar from './static_page/Navbar/Navbar';
import Friends from './Friends/Friends';
import Profile from './Profile/profile';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <Friends />
    </div>
  );
}

export default App;