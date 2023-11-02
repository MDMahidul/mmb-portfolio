import React from 'react';
import { AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { TbDatabaseCog } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import Reveal from '../../components/Reveal/Reveal';

const AboutBox = () => {
    return (
      <div className="about_boxes grid lg:flex justify-evenly">
        <div className="about_box">
          <AiOutlineBarChart className="about_icon"></AiOutlineBarChart>
          <div>
            <Reveal>
              <h3 className="about_title">18</h3>
            </Reveal>
            <Reveal>
              <span className="about_subtitle">Project completed</span>
            </Reveal>
          </div>
        </div>
        <div className="about_box">
          <HiOutlineCode className="about_icon"></HiOutlineCode>
          <div>
            <Reveal>
              <h3 className="about_title">10</h3>
            </Reveal>
            <Reveal>
              <span className="about_subtitle">Front-End</span>
            </Reveal>
          </div>
        </div>
        <div className="about_box">
          <TbDatabaseCog className="about_icon"></TbDatabaseCog>
          <div>
            <Reveal>
              <h3 className="about_title">8</h3>
            </Reveal>
            <Reveal>
              <span className="about_subtitle">Full stack</span>
            </Reveal>
          </div>
        </div>
        <div className="about_box">
          <IoTimeOutline className="about_icon"></IoTimeOutline>
          <div>
            <Reveal>
              <h3 className="about_title">01</h3>
            </Reveal>
            <Reveal>
              <span className="about_subtitle">On Going</span>
            </Reveal>
          </div>
        </div>
      </div>
    );
};

export default AboutBox;