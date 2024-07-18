import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineTag } from 'react-icons/hi';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-400 text-black text-center py-4 px-4">
      <div className="flex justify-end">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <HiOutlinePhone className="text-2xl" />
            <span className="ml-2 text-lg">+1234567890</span>
          </div>
          <div className="flex items-center">
            <HiOutlineMail className="text-2xl" />
            <span className="ml-2 text-lg">migrants.company@gmail.com</span>
          </div>
          <div className="flex items-center">
            <HiOutlineTag className="text-2xl" />
            <span className="ml-2 text-lg">The Migrants Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;







