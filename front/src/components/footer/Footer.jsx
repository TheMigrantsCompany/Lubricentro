import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-center p-4 w-full">
      <div className="flex justify-end">
        <a href="tel:+1234567890" className="mx-4 text-xl text-black">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:migrants.company@gmail.com" className="mx-4 text-xl text-black">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://tu-marca.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-xl text-black">
          <i className="fas fa-tag"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;




