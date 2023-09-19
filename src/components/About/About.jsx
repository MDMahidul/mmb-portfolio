import React from 'react';
import './About.css';
import AboutImg from '../../assets/avatar-2.svg'
import mahi2 from '../../assets/mahidul_2.webp';
import AboutBox from './AboutBox';
import CV from '../../assets/MD-Mahidul-Islam.pdf';

const About = () => {
    return (
      <section className="about container section" id="about">
        <h2 className="section_title"> About Me </h2>
        <div className="about_container grid" data-aos="fade-up">
          <img src={mahi2} alt="" className="about_image" />
          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">
                I am Mahidul, web developer from Dhaka, Bangladesh. I have rich
                experience in web site design and building and customization,
                also I am good at Graphics Design and Digital Marketing.
              </p>
              <a download="" href={CV} className="my-btn">
                Download CV
              </a>
            </div>
            <div className="about_skills grid">
              <div className="skill_data">
                <div className="skill_title">
                  <h3 className="skill_name">Development</h3>
                  <span className="skills_number ">75%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage development"></span>
                </div>
              </div>
              <div className="skill_data">
                <div className="skill_title">
                  <h3 className="skill_name">Graphics Design</h3>
                  <span className="skills_number ">50%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage graphics"></span>
                </div>
              </div>
              <div className="skill_data">
                <div className="skill_title">
                  <h3 className="skill_name">Digital Marketing</h3>
                  <span className="skills_number ">40%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage marketing"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutBox></AboutBox>
      </section>
    );
};

export default About;