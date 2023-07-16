/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const Header = () => {
  return <header className='bg-pink-500' py-8>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          {/* <img src={Logo} alt=''/> */}
          <h2 className='text-sky-50 shadow-accent'>JAYANTH NUGGU</h2>
        </a>
        <button className='btn btn-sm my-0.5'>Contact Me</button>
      </div>
    </div>
  </header>;
};

export default Header;
