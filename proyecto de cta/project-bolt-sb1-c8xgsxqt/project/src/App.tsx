import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import MainContent from './components/MainContent';
import { User } from './types';
import './animations.css';

function App() {
  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : { username: '', isLoggedIn: false };
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const handleLogin = (newUser: User) => {
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser({ username: '', isLoggedIn: false });
  };

  return (
    <div className="App">
      {user.isLoggedIn ? (
        <MainContent user={user} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;