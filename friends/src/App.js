import React, { useState } from 'react';

import Login from './components/Login'
import Friends from './components/Friends'

function App() {
  const [initialLogin, setInitialLogin] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios post request goes here
  }

  const handleChange = (e) => {
    setInitialLogin({[e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <Login 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        initialLogin={initialLogin}
      />
      <Friends />
    </div>
  );
}

export default App;
