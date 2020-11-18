import React from 'react';
import video from '../img/Love-Coding.mp4';

const Home = () => {
  return (
    <div className='section' id='home'>
      <div className='container'>
        <div className='bg-video'>
          <video className='bg-video__content' autoPlay muted loop>
            <source src={video} type='video/mp4' />
            <source src={video} type='video/webm' />
            Your browser is not supported.
          </video>
        </div>
        <div className='home__title' data-aos='fade-up' data-aos-delay='0'>
          <h4 className='heading-tertiary mb-4'>Jimin Byun</h4>
          <h1 className='heading-primary'>
            React JS <br /> Web Developer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
