import './Scrollup.css'
import { BsArrowUp } from "react-icons/bs";

const Scrollup = () => {
    window.addEventListener('scroll',()=>{
        const scrollUp = document.querySelector(".scrollup");
        if(window.scrollY >= 560){
            scrollUp.classList.add('show-scroll');
        }else{
            scrollUp.classList.remove('show-scroll');
        }
    })
  return (
    <a href="#" className="scrollup">
      <BsArrowUp className="scrollup_icon"></BsArrowUp>
    </a>
  );
};

export default Scrollup;
