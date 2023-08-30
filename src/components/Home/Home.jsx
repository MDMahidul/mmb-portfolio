import React from 'react';
import './Home.css'
import Me from '../../assets/avatar-1.svg';
import mahi  from '../../assets/mahidul.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
      <section className="container home" id="home">
        <div className="intro text-center flex flex-col items-center">
          <div className="text-center">
            <img src={mahi} alt="" className="home_img" />
          </div>
          <h1 className="home_name">MD. Mahidul Islam</h1>
          <span className="home_education">I'm Front-End Developer</span>
          <HeaderSocials></HeaderSocials>
          <a href="#contact" className="my-btn">
            Hire Me
          </a>
          <ScrollDown></ScrollDown>
        </div>
      </section>
    );
};

export default Home;