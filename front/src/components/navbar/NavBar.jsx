import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import PerfilUser from '../perfilUser/PerfilUsuario';
const NavBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');  // Redirige a la landing page
    } catch (error) {
      console.log('Error al cerrar sesión', error.message);
    }
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <nav className="border-gray-200 bg-[#00529c] dark:bg-gray-800 dark:border-gray-700 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
            Lubricentro Calle 6
          </span>
        </a>
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <button
                onClick={handleProfileClick}
                className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2"
              >
                <img
                  src={user.photoURL || 'https://via.placeholder.com/30'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span>Hola, {user.displayName}</span>
              </button>
              <PerfilUser isOpen={isProfileOpen} onClose={handleCloseProfile} />
            </>
          )}
          <button
            onClick={handleLogout}
            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;