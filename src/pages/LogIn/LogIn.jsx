import React, { useState } from 'react';
import './Login.css';
import { useAuth } from './AuthContext';

const LogIn = () => {
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[myapi]`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message);
      }

      const data = await response.json();
      login(data.idToken);
      localStorage.setItem('token', data.idToken);
      // Redirect to the products page
      window.location.replace('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login-card">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary p-2 mt-2 form-control">
          Login
        </button>
      </div>
    </form>
  );
};

export default LogIn;
