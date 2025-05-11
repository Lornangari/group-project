import React, { useState } from 'react';
const Auth = ({ setUser, setRoute }) => {
  const [username, setUsername] = useState('');
  const handleLogin = () => {
    if (username) {
      setUser(username);
      setRoute('tasks');
    }
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Auth;