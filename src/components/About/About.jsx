import React from 'react';
import './About.css';
import AboutImg from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox';

const About = () => {
    return (
      <section className="about container section" id="about">
        <h2 className="section_title"> About Me </h2>
        <div className="about_container grid">
          <img src={AboutImg} alt="" className="about_image" />
          <div className="about_data grid">
            <div className="about_info">
              <p className="about_description">
                I am Mahidul, web developer from Dhaka, Bangladesh. I
                have rich experience in web site design and building and
                customization, also I am good at Graphics Design and Digital Marketing.
              </p>
              <a href="" className="my-btn">
                Download CV
              </a>
            </div>
            <div className="about_skills grid">
              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">Development</h3>
                  <span className="skills_number ">80%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage development"></span>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">Graphics Design</h3>
                  <span className="skills_number ">60%</span>
                </div>
                <div className="skills_bar">
                  <span className="skills_percentage graphics"></span>
                </div>
              </div>
              <div className="skills_data">
                <div className="skills_title">
                  <h3 className="skills_name">Digital Marketing</h3>
                  <span className="skills_number ">50%</span>
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