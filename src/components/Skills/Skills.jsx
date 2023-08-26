import React from 'react';
import './Skills.css'
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
    return (
      <section className="container skills section" id="skills">
        <h2 className="section_title"> My Skills </h2>
        <div className="skills_container container grid">
          <Frontend />
          <Backend />
        </div>
      </section>
    );
};

export default Skills;