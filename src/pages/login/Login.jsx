import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import instance from '../../utils/api';
import Header from '../../components/header/Header';
import './login.css';
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post('/login', {
        email: user.email,
        password: user.password,
      });
      console.log(data.data);
      localStorage.setItem('blogToken', data.data);
      navigate('/blogs');
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setUser({
        email: '',
        password: '',
      });
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          height: '100px',
          borderBottom: '2px solid gray',
          marginBottom: '1rem',
        }}
      />
      <div className="container">
        {location.state && (
          <p
            className="login-error"
            style={{ color: 'red', fontSize: '1.2rem' }}
          >
            {location.state.message}
          </p>
        )}
        <div className="heading-main">
          <h1>Admin Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="create-blog-form ">
          <div>
            <label>Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          {error && (
            <p
              className="login-error"
              style={{ color: 'red', fontSize: '1.2rem' }}
            >
              {error}
            </p>
          )}
          <div className="form-btn-input">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
