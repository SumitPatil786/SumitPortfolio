import React from 'react';
import "./home.css";
import Me from "../../assets/Me.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
const Home = () => {
return (
    <section className='home container' id='home'>
        <div className='intro'>
            <img src={Me} alt=""  className='home_img'/>
            <h1 className='home_name'>Sumit Patil</h1>
            <span className='home_education'>I'm A Web Developer</span>

            <HeaderSocials/>
            <a href="#contact" className='btn'>Scroll Down</a>
        </div>
    </section>
)
}

export default Home