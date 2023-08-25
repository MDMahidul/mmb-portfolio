import React from 'react';
import { FaGithub, FaLinkedinIn,FaInstagram, FaBehance } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";

const HeaderSocials = () => {
    return (
      <div className="home_socials">
        <a href="https://github.com/MDMahidul" className="home_social-link" target="_blank" rel='noreferrer'>
          <FaGithub></FaGithub>
        </a>
        <a href="kedin.com/in/mmbmahidul/" className="home_social-link" target="_blank" rel='noreferrer'>
          <FaLinkedinIn></FaLinkedinIn>
        </a>
        <a href="https://www.facebook.com/mmbmahidul.007/" className="home_social-link" target="_blank" rel='noreferrer'>
          <LiaFacebookF></LiaFacebookF>
        </a>
        <a href="https://www.instagram.com/mahidul_islam_moon/" className="home_social-link" target="_blank" rel='noreferrer'>
          <FaInstagram></FaInstagram>
        </a>
        <a href="https://www.behance.net/mdmahidul" className="home_social-link" target="_blank" rel='noreferrer'>
          <FaBehance></FaBehance>
        </a>
      </div>
    );
};

export default HeaderSocials;