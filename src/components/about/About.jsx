import React from 'react';
import "./about.css";
import Image from "../../assets/newImg.png";

const About = () => {
  return (
    <section className='about section' id="about">
      <h2 className='section_title'>About Me</h2>

      <div className='about_container grid'>
        <img src={Image} alt="Avatar" className='about_img' />

        <div className='about_content grid'>
          <p className='about_description'>
            I am a dedicated Computer Science student with a strong foundation in programming and web development. I have hands-on experience in various technologies and have successfully completed projects that showcase my skills in software development and machine learning.
          </p>
          <a href="/resume.png" className="btn" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>

          <div className='about_skills'>
            <div className='skills_data'>
              <div className='skills_title'>
                <h3 className='skills_name'>Web Development</h3>
                <span className='skills_number'>90%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage development'></span>
              </div>
            </div>

            <div className='skills_data'>
              <div className='skills_title'>
                <h3 className='skills_name'>Machine Learning</h3>
                <span className='skills_number'>80%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage learning'></span>
              </div>
            </div>

            <div className='skills_data'>
              <div className='skills_title'>
                <h3 className='skills_name'>C++ Programming</h3>
                <span className='skills_number'>90%</span>
              </div>
              <div className='skills_bar'>
                <span className='skills_percentage programming'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
