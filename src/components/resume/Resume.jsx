import React from 'react';
import './resume.css';
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <section className='resume section' id="resume">
      <h2 className='section_title'>Education/Experience</h2>

      <div className='resume-container grid'>
        
        <div className='timeline-section'>
          <h3 className='resume_subtitle'>Education</h3>
          <div className='timeline grid'>
          {Data.map((val, id) =>
  val.category === "education" ? (
    <Card
      key={id}
      icon={val.icon}
      title={val.title}
      year={val.year}
      desc={val.desc}
      percentage={val.percentage} // ✅ Add this
    />
  ) : null
)}

          </div>
        </div>

        
        <div className='timeline-section'>
          <h3 className='resume_subtitle'>Experience</h3>
          <div className='timeline grid'>
{Data.map((val, id) =>
  val.category === "experience" ? (
    <Card
      key={id}
      icon={val.icon}
      title={val.title}
      year={val.year}
      desc={val.desc}
      certificate={val.certificate} // Pass it here
    />
  ) : null
)}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
