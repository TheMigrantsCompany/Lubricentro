import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextInput, Label, Card } from 'flowbite-react';

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticación hardcodeada
    if (email === 'empleado@example.com' && password === 'empleado123') {
      navigate('/employee/services');
    } else if (email === 'admin@example.com' && password === 'admin123') {
      navigate('/admin/manage_employees');
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/landing_page.jpg")' }}>
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Inicio de Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Ingresar
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{' '}
          <button className="text-indigo-500 hover:underline">
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
};

export default Landing;