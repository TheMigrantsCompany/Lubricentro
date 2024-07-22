// src/components/Signup.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase/config";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';
import axios from "axios";
import SignInButton from "./authGoogle";

const signUpWithEmail = async (email, password, displayName, navigate) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;

    // Actualizar el perfil del usuario
    await updateProfile(user, { displayName });

    const token = await user.getIdToken();
    const userInfo = {
      mail: user.email,
      name: user.displayName,
      rol: true // Puedes cambiar este valor si necesitas un rol específico
    };
    await sendUserInfoToBackend(userInfo, token);

    Swal.fire({
      icon: 'success',
      title: 'Usuario creado con éxito',
      showConfirmButton: true,
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/'); // Redirige después de que el usuario cierre el SweetAlert
      }
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message,
      showConfirmButton: true,
      confirmButtonText: 'OK'
    });
  }
};

const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const token = await user.getIdToken();
    const userInfo = {
      mail: user.email,
      name: user.displayName,
      rol: true // Puedes cambiar este valor si necesitas un rol específico
    };
    await sendUserInfoToBackend(userInfo, token);
  } catch (error) {
    if (error.code === "auth/user-disabled") {
      // Si el usuario está desactivado, no continuar con el inicio de sesión
      console.log("Esta cuenta está desactivada. Por favor, contacta al administrador.");
      return;
    } else {
      console.error("Error signing in with email:", error);
    }
  }
};

const sendUserInfoToBackend = async (userInfo, token) => {
  try {
    console.log("User Info:", userInfo); // Agregar un console.log para verificar userInfo
    console.log("Token:", token); // Agregar un console.log para verificar el token
    await axios.post("http://localhost:3001/users", userInfo, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error("Error sending user info to backend:", error);
  }
};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signUpWithEmail(email, password, displayName, navigate);
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <div className="mb-4">
        <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
          Nombre de usuario
        </label>
        <input
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
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
          Registrarse
        </button>
      </div>
    </form>
  );
};

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export { Signup, SignUpForm, SignInForm };
