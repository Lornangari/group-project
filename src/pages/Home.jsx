import React from 'react';
import Auth from '../components/Auth';

const Home = ({ user, setUser, setRoute }) => (
  <div className="home-container">
    <h1>Welcome to Task Manager</h1>
    {!user ? (
      <Auth setUser={setUser} setRoute={setRoute} />
    ) : (
      <button onClick={() => setRoute('tasks')}>Go to Tasks</button>
    )}
  </div>
);

export default Home;
