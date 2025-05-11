import React, { useState } from 'react';
import Router from './Router';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [route, setRoute] = useState('home'); // Initial route is Home

  return (
    <div className="app-container">
      <header className="navbar">
        <h1 className="logo">Task Manager</h1>
        <nav className="nav-links">
          <button onClick={() => setRoute('home')}>Home</button>
          {user && <button onClick={() => setRoute('tasks')}>Tasks</button>}
          {!user && <button onClick={() => setRoute('home')}>Login</button>}
          {user && <button onClick={() => setUser(null)}>Logout</button>}
        </nav>
      </header>
      
      <main>
        <Router route={route} setRoute={setRoute} user={user} setUser={setUser} />
      </main>
    </div>
  );
};

export default App;
