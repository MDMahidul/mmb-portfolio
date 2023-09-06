import React from 'react';
import { AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { TbDatabaseCog } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";

const AboutBox = () => {
    return (
      <div className="about_boxes grid lg:flex justify-evenly" data-aos="fade-up">
        <div className="about_box">
          <AiOutlineBarChart className="about_icon"></AiOutlineBarChart>
          <div>
            <h3 className="about_title">18</h3>
            <span className="about_subtitle">Project completed</span>
          </div>
        </div>
        <div className="about_box">
          <HiOutlineCode className="about_icon"></HiOutlineCode>
          <div>
            <h3 className="about_title">10</h3>
            <span className="about_subtitle">Front-End</span>
          </div>
        </div>
        <div className="about_box">
          <TbDatabaseCog className="about_icon"></TbDatabaseCog>
          <div>
            <h3 className="about_title">8</h3>
            <span className="about_subtitle">Full stack</span>
          </div>
        </div>
        <div className="about_box">
          <IoTimeOutline className="about_icon"></IoTimeOutline>
          <div>
            <h3 className="about_title">02</h3>
            <span className="about_subtitle">On Going</span>
          </div>
        </div>
      </div>
    );
};

export default AboutBox;