import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <section className="section container">
        <div
          className="flex flex-col md:flex-row justify-center items-center gap-16 bg-gradient-to-r from-[#ff4d61] to-yellow-300 py-8 md:py-16 rounded-lg"
          data-aos="zoom-in"
        >
          <p className="md:text-3xl text-lg text-white font-semibold">
            Share your feedback and suggestions
          </p>
          <Link to="/feedback" className="my-btn">
            Click Here
          </Link>
        </div>
      </section>
    );
};

export default Footer;