import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandle = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandle}>
      <div className="form-iner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">UserName:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            value={details.password}
            required
          ></input>
        </div>
        {(error != "") ? (<div className="error">{error}</div>) : ""}
        <input className="sublog" type="submit" value="LOGIN"></input>
      </div>
    </form>
  );
}

export default LoginForm;
