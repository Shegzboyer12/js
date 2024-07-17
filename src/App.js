import React, { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
  const [name, setName] = useState('John Doe');

  return (
    <div className="App">
      <Header title="My Sample App" />
      <UserProfile name={name} />
      <Counter />
    </div>
  );
}

export default App;
