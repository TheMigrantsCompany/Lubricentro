import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 w-full">
      <div className="flex justify-center">
        <a href="tel:+1234567890" className="text-white mx-4 text-xl"><i className="fas fa-phone"></i></a>
        <a href="mailto:email@example.com" className="text-white mx-4 text-xl"><i className="fas fa-envelope"></i></a>
        <a href="https://tu-marca.com" target="_blank" rel="noopener noreferrer" className="text-white mx-4 text-xl"><i className="fas fa-tag"></i></a>
      </div>
    </footer>
  );
};

export default Footer;



