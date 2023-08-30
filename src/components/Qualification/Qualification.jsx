import './Qualification.css';
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from "aos";

const Qualification = () => {
     const [toggleState, setToggleState] = useState(1);
     const toggleTab = (index) => {
       setToggleState(index);
     };
     useEffect(() => {
       AOS.init({
         easing: "ease-in-sine",
         duration: 1000,
        /*  anchorPlacement: "top-bottom", */
         once: true,
       });
     }, []);

    return (
      <section className="container section qualification" id="qualification">
        <h2 className="section_title">Qualification</h2>
        <div className="qualification_container">
          <div className="qualification_tabs flex justify-center mb-8">
            <div
              className={
                toggleState === 1
                  ? "qualification_button button_flex qualification_active flex items-center"
                  : "qualification_button button_flex flex items-center"
              }
              onClick={() => toggleTab(1)}
            >
              <LuGraduationCap className="qualification_icon"></LuGraduationCap>
              Education
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification_button button_flex qualification_active flex items-center"
                  : "qualification_button button_flex flex items-center"
              }
              onClick={() => toggleTab(2)}
            >
              <HiOutlineBriefcase className="qualification_icon"></HiOutlineBriefcase>
              Experience
            </div>
          </div>
          <div className="qualification_sections">
            <div
              className={
                toggleState === 1
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              <div className="qualification_data">
                <div data-aos="slide-right">
                  <h3 className="qualification_title">Web Development</h3>
                  <span className="qualification_subtitle">
                    programming-hero
                  </span>
                  <div className="qualification_calender flex items-center gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>2023 - present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div data-aos="slide-left">
                  <h3 className="qualification_title">
                    Computer Science & Engineering
                  </h3>
                  <span className="qualification_subtitle">AIUB</span>
                  <div className="qualification_calender flex items-center gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>2016 - 2020
                  </div>
                </div>
              </div>
              <div className="qualification_data">
                <div data-aos="slide-right">
                  <h3 className="qualification_title">
                    Higher Secondary School Certificate
                  </h3>
                  <span className="qualification_subtitle">
                    Ullapara Science College
                  </span>
                  <div className="qualification_calender flex items-center gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>passing year 2015
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div data-aos="slide-left">
                  <h3 className="qualification_title">
                    Secondary School Certificate
                  </h3>
                  <span className="qualification_subtitle">
                    Momena Ali Biggan School
                  </span>
                  <div className="qualification_calender flex items-center gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>passing year 2013
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 2
                  ? "qualification_content qualification_content-active"
                  : "qualification_content"
              }
            >
              <div className="qualification_data">
                <div data-aos="slide-right">
                  <h3 className="qualification_title">Jr. Web Developer</h3>
                  <span className="qualification_subtitle">
                    OSCL-Overseas Study Counseling Ltd.
                  </span>
                  <div className="qualification_calender flex items-center gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>2023 Feb - 2023 July
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div data-aos="slide-left">
                  <h3 className="qualification_title">Freelancing</h3>
                  <span className="qualification_subtitle">
                    Digital Marketing
                  </span>
                  <div className="qualification_calender flex items-center gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>year 2021
                  </div>
                </div>
              </div>
              <div className="qualification_data">
                <div data-aos="slide-right">
                  <h3 className="qualification_title">
                    Teaching assistant (Intern).
                  </h3>
                  <span className="qualification_subtitle">
                    American International University Bangladesh
                  </span>
                  <div className="qualification_calender flex items-center gap-2">
                    <FaRegCalendarAlt></FaRegCalendarAlt>2019 Nov - 2020 Feb
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Qualification;