import React, { useState } from 'react';
import '../css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credenciales:', formData);
    
  };

  return (
    <div className='center-container'>
      <div className='login-container'>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Contraseña:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className='form-group'>
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
