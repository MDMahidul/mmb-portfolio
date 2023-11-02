import React from 'react';
import FadeInUpAnimation from '../../components/FadeInUpAnimation/FadeInUpAnimation';

const ScrollDown = () => {
    return (
      <div className="scroll_down">
        <FadeInUpAnimation>
          <a href="#about" className="mouse_wrapper">
            <span className="home_scroll-name">Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </FadeInUpAnimation>
      </div>
    );
};

export default ScrollDown;