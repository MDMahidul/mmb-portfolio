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
    return (
      <>
        <aside className={toggle ? "aside show-menu":"aside"}>
          <a href="#" className="nav_logo">
            <img src={logo} alt="" />
          </a>

          <nav className="nav">
            <div className="nav_menu">
              <ul className="nav_list">
                <li className="nav_item">
                  <a href="#home" className="nav_link">
                    <AiOutlineHome></AiOutlineHome>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#about" className="nav_link">
                    <BiUserCircle></BiUserCircle>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#skills" className="nav_link">
                    <HiOutlinePuzzlePiece></HiOutlinePuzzlePiece>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#services" className="nav_link">
                    <HiOutlineBriefcase></HiOutlineBriefcase>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#qualification" className="nav_link">
                    <LuGraduationCap></LuGraduationCap>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#portfolio" className="nav_link">
                    <IoLayersOutline></IoLayersOutline>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#contact" className="nav_link">
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
        <div className={toggle ? "nav_toggle nav_toggle-open" : "nav_toggle"}  onClick={()=> showMenu(!toggle)}>
          <AiOutlineMenu className="icon-menu text-xl"></AiOutlineMenu>
        </div>
      </>
    );
};

export default Sidebar;