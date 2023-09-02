/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from '../assets/avatar.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';


const Banner = () => {
  return (<section className='min-h-[85vh] lg:min-h-[78wh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <h1 className='text-[55px] font-bold leading-[0.8] 1g:text-[110px]'>
            JAYANTH <span>NUGGU</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-2'>I am a </span>
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'DevOps engineer',
                2000,
                'Programmer',
                2000,
              ]}
              speedp={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </div>
          <p className='md-8 max-w-lg mx-auto lg:mx-0'>
            I am enthusiastic about learning new things and exploring new technologies.
            I particularly enjoy working collaboratively with people.
          </p>
          <div className='flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0'>
            <Link to='contact' activeClass='active' className='btn btn-lg pt-4 '>Contact Me</Link>
            <a href='#' className='text-gradient btn-link'>
              My Portifolio
            </a>
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
            <a href='https://github.com/jayanth-999'><FaGithub/></a>
            <a href='https://www.linkedin.com/in/jayanth-nuggu-0a1720102/'><FaLinkedin/></a>
          </div>
        </div>
        <div>
          <img className='rounded-full' src={Image} alt='' />
        </div>
      </div>
    </div>
  </section>)
};

export default Banner;
