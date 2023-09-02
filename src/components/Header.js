/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-scroll';


const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-around items-center'>
        <a href='#'>
          {/* <img src={Logo} alt=''/> */}
          <h2 className='text-indigo-50 text-[30px] font-bold'>JAYANTH NUGGU</h2>
        </a>
        <Link to='contact' className='btn btn-sm '>Contact Me</Link>
      </div>
    </div>
  </header>;
};

export default Header;
