import './Services.css'
import { FaLaptopCode, FaTimes, FaSellsy } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { BiCaretRight } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { useState } from 'react';

const Services = () => {
    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
    return (
      <section className="services container section" id="services">
        <h2 className="section_title">Services</h2>

        <div className="services_container  grid" data-aos="fade-up">
          <div className="services_content">
            <div>
              <FaLaptopCode className="services_icon"></FaLaptopCode>
              <h3 className="services_title">Web Development</h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(1)}>
              View More <FaArrowRight className="viewmore_icon"></FaArrowRight>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services_modal active-modal"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <FaTimes className="services_modal-close" onClick={()=>toggleTab(0)}></FaTimes>
                <h3 className="services_modal-title">Web Development</h3>
                <p className="services_modal-description">
                  I am a skilled web developer with expertise in crafting
                  pixel-perfect, responsive UI designs. Proficient in React and
                  Firebase authentication.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Craft pixel-perfect UIs for captivating user experiences.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Develop seamlessly responsive websites for diverse
                      devices.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Skilled in CSS,from custom styles to frameworks like
                      BS5 and Tailwind.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">Build dynamic apps using React.js for engaging interfaces.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">Capable of handling the entire development process using,
                      the MERN stack.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Possess foundational knowledge in Laravel.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Proficient in working with databases, including MySQL and MongoDB.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Proficient in Firebase authentication for secure user
                      management.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services_content">
            <div>
              <MdDesignServices className="services_icon"></MdDesignServices>
              <h3 className="services_title">Graphics Design</h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(2)}>
              View More <FaArrowRight className="viewmore_icon"></FaArrowRight>
            </span>

            <div className={toggleState === 2 ? "services_modal active-modal" :"services_modal"}>
              <div className="services_modal-content">
                <FaTimes className="services_modal-close" onClick={()=>toggleTab(0)}></FaTimes>
                <h3 className="services_modal-title">Graphics Design</h3>
                <p className="services_modal-description">
                  Proficient in graphic design, I craft captivating social media
                  banners, cover photos, and minimalist logos.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Proficient in creating eye-catching social media banners
                      and cover photos.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Expertise in designing versatile and minimalistic logos.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Capable of creating designs that resonate with target
                      audiences and drive engagement.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Have sound knowledge on UI/UX design.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Familiar with AI and Photoshop softwares.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services_content">
            <div>
              <FaSellsy className="services_icon"></FaSellsy>
              <h3 className="services_title">Digital Marketing</h3>
            </div>
            <span className="services_button" onClick={() => toggleTab(3)}>
              View More <FaArrowRight className="viewmore_icon"></FaArrowRight>
            </span>

            <div className={toggleState === 3 ? "services_modal active-modal":"services_modal"}>
              <div className="services_modal-content">
                <FaTimes className="services_modal-close" onClick={()=>toggleTab(0)}></FaTimes>
                <h3 className="services_modal-title">Digital Marketing</h3>
                <p className="services_modal-description">
                  I specialize in running effective ad campaigns across social
                  media platforms, coupled with expertise in SEO-optimized
                  content creation.
                </p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Proficient in running impactful social media ad campaigns.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Sound knowledge of SEO practices, enabling content
                      creation.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Creative design of captivating social media banners and
                      posters for effective marketing.
                    </p>
                  </li>
                  <li className="services_modal-service">
                    <BiCaretRight className="services_modal-icon"></BiCaretRight>
                    <p className="services_modal-info">
                      Ability to manage holistic digital marketing strategies,
                      from content to design.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
 
export default Services;