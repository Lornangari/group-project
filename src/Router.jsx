import React from 'react';
import Home from './pages/Home';
import Tasks from './pages/Task';
import NotFound from './pages/NotFound';

const Router = ({ route, user, setUser, setRoute }) => {
  switch (route) {
    case 'home':
      return <Home user={user} setUser={setUser} setRoute={setRoute} />;
    case 'tasks':
      return user ? <Tasks /> : <Home setUser={setUser} setRoute={setRoute} />;
    default:
      return <NotFound />;
  }
};

export default Router;
