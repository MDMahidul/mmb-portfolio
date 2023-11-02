import React from 'react';
import './Skills.css'
import Frontend from './Frontend';
import Backend from './Backend';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Skills = () => {
    return (
      <section className="container skills section" id="skills">
        <SectionTitle heading={'My Skills'}></SectionTitle>
        <div className="skills_container container grid">
          <Frontend />
          <Backend />
        </div>
      </section>
    );
};

export default Skills;