import { SiPhp, SiNodedotjs, SiExpress, SiMysql,SiMongodb,SiFirebase } from "react-icons/si";

const Backend = () => {
    return (
      <div className="skills_content" data-aos="fade-left">
        <h3 className="skills_title">Backend Developer</h3>
        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <SiPhp className="skills_icon"></SiPhp>
              <div>
                <h3 className="skills_name">PHP</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <SiNodedotjs className="skills_icon"></SiNodedotjs>
              <div>
                <h3 className="skills_name">Node Js</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <SiExpress className="skills_icon"></SiExpress>
              <div>
                <h3 className="skills_name">Express Js</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <SiMongodb className="skills_icon"></SiMongodb>
              <div>
                <h3 className="skills_name">MongoDB</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <SiFirebase className="skills_icon"></SiFirebase>
              <div>
                <h3 className="skills_name">Firebase</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <SiMysql className="skills_icon"></SiMysql>
              <div>
                <h3 className="skills_name">MySQL</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Backend;