import './Home.css'
import mahi  from '../../assets/mahidul.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import crown from '../../assets/crown.png';
import thumbup from '../../assets/thumbup.png';
import glassesimoji from "../../assets/glassesimoji.png";
import com from "../../assets/com.png";
import { motion } from "framer-motion";
import FloatingDiv from '../FloatingDiv/FloatingDiv';


const Home = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <section className="container home" id="home">
      <div className="intro text-center flex flex-col items-center">
        <div className="text-center">
          <img src={mahi} alt="" className="home_img" />
        </div>
        <h1 className="home_name">MD. Mahidul Islam</h1>
        <span className="home_education">I'm Full-Stack Developer</span>
        <HeaderSocials></HeaderSocials>
        <a href="#contact" className="my-btn">
          Hire Me
        </a>
        <ScrollDown></ScrollDown>
      </div>
      <div className="i-right">
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={com}
          alt=""
          className="com-img"
        />

        <motion.div
          initial={{ top: "18%", left: "74%" }}
          whileInView={{ left: "70%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "74%", top: "25rem" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatingDiv img={thumbup} text1="Pixel Perfect" text2="Design" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;