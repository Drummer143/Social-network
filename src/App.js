import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <img className='logo' src='https://cdn-icons-png.flaticon.com/512/545/545275.png' alt='Logo' />
      </header>

      <nav className='nav-bar'>
        <ul className='nav-list'>
          <li><a>Profile</a></li>
          <li><a>News</a></li>
          <li><a>Messages</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>

      <div className='content'>
        <img 
          className='profile-background' 
          src='https://catherineasquithgallery.com/uploads/posts/2021-02/1614383683_20-p-fon-dlya-rabochego-stola-odnotonnii-svetli-21.jpg' 
          alt='Background image' 
        />

        <div className='profile'>
          <img 
            className='profile-image' 
            src='https://sun9-48.userapi.com/s/v1/if2/csgQ0e1sx8Z6fLdlSoqv7HF9dlDQ8RbEzWvG9n0vQKID4ObWSrObeMVrJ7-R6T8IESraaN6lnRCnaAPH8hKF0zrB.jpg?size=736x736&quality=95&type=album' 
            alt='Profile image' 
          />
        </div>
        <div className='posts'>
          <div className='new post'></div>

          <div className='posts-list'></div>
        </div>
      </div>
    </div>
  );
}

export default App;