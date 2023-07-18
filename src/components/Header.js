/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const Header = () => {
  return <header className='py-4'>
    <div className='container mx-auto'>
      <div className='flex justify-around items-center'>
        <a href='#'>
          {/* <img src={Logo} alt=''/> */}
          <h2 className='text-indigo-50'>JAYANTH NUGGU</h2>
        </a>
        <button className='btn btn-sm'>Contact Me</button>
      </div>
    </div>
  </header>;
};

export default Header;