import React from 'react';
import { inView } from 'framer-motion';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref,inView] = useInView(
    {
      threshold: 0.5,
    });
  return (
  <section id='about' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <div className='flex-1 text-[50px] text-gradient text-center'>ABOUT <spam className=''>ME</spam></div>
        <div className='flex-1'>
          {/* <h2>About Me</h2> */}
          <h3 className='h3 mb-4'>
            I am Programmer Analyst at Cognizant working on a health care project as a DevSecOps Engineer parllaly  taking an internship in Skill-lync on full-stack project
          </h3>
          <p className='mb-6'>I am currently working with Devops tools,React and Python.I am currenty learning gitops and gitpages </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                <CountUp start={0} end={1} duration={3}/>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/>
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                <CountUp start={0} end={1} duration={3}/>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br/>
                Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
