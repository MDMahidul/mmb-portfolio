import React from 'react';
import FadeInUpAnimation from '../FadeInUpAnimation/FadeInUpAnimation';

const SectionTitle = ({ heading }) => {
  return (
    <div>
      <FadeInUpAnimation>
        <p className="section_title"> {heading} </p>
      </FadeInUpAnimation>
    </div>
  );
};

export default SectionTitle;