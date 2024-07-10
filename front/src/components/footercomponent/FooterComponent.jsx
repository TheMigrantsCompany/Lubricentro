import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineTag } from 'react-icons/hi';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-400 text-black text-center p-4">
      <div className="flex justify-end">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <HiOutlinePhone className="text-xl" />
            <span className="ml-2 text-sm">+1234567890</span>
          </div>
          <div className="flex items-center">
            <HiOutlineMail className="text-xl" />
            <span className="ml-2 text-sm">migrants.company@gmail.com</span>
          </div>
          <div className="flex items-center">
            <HiOutlineTag className="text-xl" />
            <span className="ml-2 text-sm">The Migrants Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;







