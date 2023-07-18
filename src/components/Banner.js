import React from 'react';
import Image from '../assets/avatar.jpg';
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import { TypeAnimationProps } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='section' id='home'>
    <div className='container mx-auto'>
      <div className='flex'>
        <div>
          <h1>
            JAYANTH <span>NUGGU</span>
            </h1>
        </div>
        <div>
          <img className='rounded-full' src={Image} alt=''/>
        </div>
      </div>
    </div>
    </section>;
};

export default Banner;
