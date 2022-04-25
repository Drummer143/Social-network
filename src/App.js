import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Header from './components/static_part/Header/Header';
import Navbar from './components/static_part/Navbar/Navbar';
import Friends from './components/static_part/Friends/Friends';
import Profile from './components/Profile/profile';
import Messages from './components/Messages/Messages';

function App() {
  return (
      <div className='app_wrapper'>
        <Header />
        <Navbar />
        <Friends />
        <div className='app_content'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/Profile/Profile' element={<Profile />} />
          <Route path='/Messages/Messages' element={<Messages />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;