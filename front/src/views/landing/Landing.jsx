import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/config';
import Swal from 'sweetalert2';
import { Button, TextInput, Label, Card } from 'flowbite-react';

const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user.email === 'empleado@example.com') {
        navigate('/employee/services');
      } else if (user.email === 'admin@example.com') {
        navigate('/admin/manage_employees');
      } else {
        console.log('No matching role for user');
      }
    } catch (error) {
      console.error('Error during manual login:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const user = auth.currentUser;
      if (user.email === 'empleado@example.com') {
        navigate('/employee/services');
      } else if (user.email === 'admin@example.com') {
        navigate('/admin/manage_employees');
      } else {
        console.log('No matching role for user');
      }
    } catch (error) {
      console.error('Error during Google login:', error.message);
    }
  };

  const handleSignup = () => {
    Swal.fire({
      title: 'Registrar',
      html: `
        <input type="email" id="email" class="swal2-input" placeholder="Correo Electrónico">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
      `,
       confirmButtonColor: '#bf0811',
      confirmButtonText: 'Registrarse',
      focusConfirm: false,
      preConfirm: async () => {
        const email = Swal.getPopup().querySelector('#email').value;
        const password = Swal.getPopup().querySelector('#password').value;
        if (!email || !password) {
          Swal.showValidationMessage(`Por favor ingrese correo electrónico y contraseña`);
          return;
        }
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          Swal.fire({
            icon: 'success',
            title: 'Usuario creado con éxito',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#bf0811' 
          });
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#bf0811' 
          });
        }
      }
    });
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
            <label html-for="password" className="block text-sm font-medium text-gray-700">
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
        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-4"
        >
          Ingresar con Google
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{' '}
          <button className="text-indigo-500 hover:underline" onClick={handleSignup}>
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
};

export default Landing;
