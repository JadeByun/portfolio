import React from 'react';

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='container'>
        <h4 className='heading-tertiary'>04</h4>
        <h1 className='heading-secondary'>Contact Me</h1>
        {/* <div className='heading-secondary'></div> */}

        <div className='contact' data-aos='fade-up'>
          <div className='contact__info'>
            <h3>Email</h3>
            <p>jimin.jade.b@gmail.com</p>

            <h3>Social Network</h3>

            <ul className='social'>
              <li>
                <a href='#'>
                  <i className='ion-social-dribbble'></i>
                </a>
              </li>
            </ul>
            <div className='clearfix'></div>
            <div className='h-50'></div>
          </div>

          <div className='contact__sendEmail' data-aos='fade-up'>
            <form
              className='contact-bg'
              id='contact-form'
              name='contact'
              method='post'
              novalidate='novalidate'
            >
              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Your Name'
              />
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Your E-mail'
              />
              <input
                type='text'
                name='phone'
                className='form-control'
                placeholder='Phone Number'
              />
              {/* <textarea
              name='message'
              className='form-control'
              placeholder='Your Message'
              style='height:120px'
            ></textarea> */}
              <button
                id='submit'
                type='submit'
                name='submit'
                className='btn btn-glance'
              >
                Send
              </button>
              <div id='success'>
                <p className='green textcenter'>
                  Your message was sent successfully! I will be in touch as soon
                  as I can.
                </p>
              </div>
              <div id='error'>
                <p>
                  Something went wrong, try refreshing and submitting the form
                  again.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
