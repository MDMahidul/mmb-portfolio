import './Sidebar.css'
import logo from '../../assets/m_logo.svg';
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";
import { IoLayersOutline } from "react-icons/io5";
import { SlBubbles } from "react-icons/sl";
import { useState } from 'react';


const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  const [activeNav,setActiveNav] = useState("#home")
    return (
      <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
          <a href="#" className="nav_logo">
            <img src={logo} alt="" />
          </a>

          <nav className="nav">
            <div className="nav_menu">
              <ul className="nav_list">
                <li className="nav_item">
                  <a
                    href="#home"
                    className={
                      activeNav === "#home"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                    onClick={() => setActiveNav("#home")}
                  >
                    <AiOutlineHome></AiOutlineHome>
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#about"
                    className={
                      activeNav === "#about"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                    onClick={() => setActiveNav("#about")}
                  >
                    <BiUserCircle></BiUserCircle>
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#skills"
                    className={
                      activeNav === "#skills"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                    onClick={() => setActiveNav("#skills")}
                  >
                    <HiOutlinePuzzlePiece></HiOutlinePuzzlePiece>
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#services"
                    className={
                      activeNav === "#services"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                    onClick={() => setActiveNav("#services")}
                  >
                    <HiOutlineBriefcase></HiOutlineBriefcase>
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#qualification"
                    className={
                      activeNav === "#qualification"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                    onClick={() => setActiveNav("#qualification")}
                  >
                    <LuGraduationCap></LuGraduationCap>
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#portfolio"
                    className={
                      activeNav === "#portfolio"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                    onClick={() => setActiveNav("#portfolio")}
                  >
                    <IoLayersOutline></IoLayersOutline>
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="#contact"
                    className={
                      activeNav === "#contact"
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                    onClick={() => setActiveNav("#contact")}
                  >
                    <SlBubbles></SlBubbles>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="nav_footer">
            <span className="copyright">© 2023 Mahidul</span>
          </div>
        </aside>
        <div
          className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}
          onClick={() => showMenu(!toggle)}
        >
          <AiOutlineMenu className="icon-menu text-xl"></AiOutlineMenu>
        </div>
      </>
    );
};

export default Sidebar;