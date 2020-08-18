import React, { useState } from 'react';
import Login from './components/Login'

function App() {
  const [initialLogin, setInitialLogin] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
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
    </div>
  );
}

export default App;
