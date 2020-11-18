import React from 'react';

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='container'>
        <div className='about__text' data-aos='fade-up'>
          <h4 className='heading-tertiary'>01</h4>
          <h1 className='heading-secondary'>
            Know <br /> About me
          </h1>
          <div className='heading-secondary'></div>
          <p>
            I am a web developer who understands both front-end and back-end
            strategies, as well as their development processes and how they
            work. * I co-developed a RESTful API using the Django REST framework
            with the BC Public Service as a Capstone project. * I built a
            Wordpress website for a restaurant (phou.ca) using HTML, CSS,
            Javascript, PHP. * I developed an understanding of the Disciplined
            Agile methodology through my intern position with Tactec Strategic
            Solutions Inc. This leads me to a deep understanding of the
            importance of the overall development processes that go way beyond
            coding. With maintenance and scalability in mind in the development
            process, I learned design patterns, architecture, and test
            automation. I think it is important to collaborate with a team so I
            have always tried writing maintainable, reusable code, and
            considering the architecture of coding. I am now expanding my
            knowledge with learning how to build apps in containers using
            Kubernetes to bring more efficiency to my future teams.
          </p>
          <p>
            Appropriately maintain standards compliant total linkage with
            cutting-edge action items. Enthusiastically create seamless synergy
            rather than excellent value.
          </p>
          <div className='h-50'></div>
          <img src='img/Signature.svg' width='230' alt='' />
          <div className='h-50'></div>
        </div>
        <div
          className='about__image'
          data-aos='fade-right'
          data-aos-delay='0'
        ></div>
      </div>
    </div>
  );
};

export default About;
