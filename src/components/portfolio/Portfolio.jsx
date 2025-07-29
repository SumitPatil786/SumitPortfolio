import React from 'react';
import './portfolio.css';
import project1 from '../../assets/work-1.svg';
import project2 from '../../assets/work-2.svg';
import project3 from '../../assets/work-3.svg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "LeaderBoard Web App",
      image: project1,
      link: "https://leaderboard-nbiowujay-sumitpatil786s-projects.vercel.app/",
      github: "https://github.com/SumitPatil786/leaderboard-app"
    },
    {
      id: 2,
      title: "Real Time Chat Bot",
      image: project2,
      link: "https://tubular-kitsune-51f096.netlify.app",
      github: "https://github.com/SumitPatil786/real-time-chat"
    },
    {
      id: 3,
      title: "Group Page",
      image: project3,
      link: "https://groupage.netlify.app/",
      github: "https://github.com/SumitPatil786/group-page"
    }
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">My Projects</h2>
      <div className="portfolio_container container grid">
        {projects.map(({ id, title, image, link, github }) => (
          <div className="portfolio_item" key={id}>
            <img src={image} alt={title} className="portfolio_img" />
            <h3 className="portfolio_title">{title}</h3>
            <div className="portfolio_buttons">
              <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
