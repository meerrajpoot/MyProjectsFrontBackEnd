import React from 'react';
import logo from "../images/images.jpeg";
const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-300 p-4 text-black text-center flex items-center justify-center">
         
      <img
        className="h-10 w-10 rounded-full object-cover shadow-lg"
        src={logo}
        alt="Logo"
      />
      
      <h1 className="text-2xl font-extrabold">Photo Gallery</h1>
    </nav>
    </>
  );
};

export default Navbar;
