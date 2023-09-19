import { SiCss3, SiHtml5, SiBootstrap, SiTailwindcss,SiJavascript,SiReact } from "react-icons/si";
 
const Frontend = () => {
    return (
      <div className="skills_content" data-aos="fade-right">
        <h3 className="skills_title">Frontend Developer</h3>
        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <SiHtml5 className="skills_icon"></SiHtml5>
              <div>
                <h3 className="skills_name">HTML</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <SiCss3 className="skills_icon"></SiCss3>
              <div>
                <h3 className="skills_name">CSS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <SiBootstrap className="skills_icon"></SiBootstrap>
              <div>
                <h3 className="skills_name">Bootstrap</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <SiTailwindcss className="skills_icon"></SiTailwindcss>
              <div>
                <h3 className="skills_name">Tailwindcss</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <SiJavascript className="skills_icon"></SiJavascript>
              <div>
                <h3 className="skills_name">Javascript</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
            <div className="skills_data">
              <SiReact className="skills_icon"></SiReact>
              <div>
                <h3 className="skills_name">React</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Frontend;