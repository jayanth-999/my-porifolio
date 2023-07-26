import React from 'react';


const Contact = () => {
  return (
    <section id='contact' className='py-16 lg:section'>
      <div className='conatiner mx-auto lg:mx-32'>   
        <div className='flex flex-col lg:flex-row lg:gap-x-60 gap-y-3'>
          <div className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none'>
                Let's work <br/> together!
              </h2>
            </div>
          </div>
          <form className='flex-1 border lg:w-96 rounded-2xl flex flex-col gap-y-6 pb-24 p-6  items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
              focus:border-accent transition-all' 
              type='text'
              placeholder='your name'
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
              focus:border-accent transition-all' 
              type='text'
              placeholder='your email'
            />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
              focus:border-accent transition-all resize-none mb-12' placeholder='your messafe'></textarea>
            <button className='btn btn-lg'>send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
