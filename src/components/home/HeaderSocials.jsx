import React from 'react';

const HeaderSocials = () => {
  return (
    <div className='home_socials'>
      <a
        href="http://www.linkedin.com/in/sumit-patil-895a0925b"
        className='home_social-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/SumitPatil786"
        className='home_social-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="mailto:sumitpatil0103@gmail.com"
        className='home_social-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a
        href="https://x.com/SumitPa75741267"
        className='home_social-link'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className="fa-brands fa-x-twitter"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
