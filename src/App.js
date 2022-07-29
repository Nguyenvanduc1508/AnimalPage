import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import AnimalPage from './UI/AnimalPage';

function App() {
  const adminUser =  {
    email: "vanduc@gmail.com",
    password: "vanduc123"
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState(""); 


 
  const Login = (details) => {
    if(details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        name: details.name,
        email: details.email
      });
    }else {
      setError("Incorrect user account or password!")
    }
  }
  const Logout = ()=> {
    setUser({name: "", email: ""})
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className='welcome'>
          <div className='login-form'>
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
          <div className='animal'>
            <h2>ANIMAL PAGE</h2>
            <AnimalPage />
            </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
