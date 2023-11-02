import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaRegEnvelope, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { toast } from "react-hot-toast";

const Contact = () => {
    const form = useRef();
 
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_n09uail",
          "template_bex3hvg",
          form.current,
          "2lVN1n-F_yPxKGGqt"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent successfully!!!");
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <section className="container section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <div className="contact_container container grid">
        <div className="contact_content" data-aos="fade-right">
          <h3 className="contact_title">Talk to me</h3>
          <div className="contact_info">
            <div className="contact_card">
              <FaRegEnvelope className="contact_card-icon"></FaRegEnvelope>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">mmbmahidul007@gmail.com</span>
              <a
                href="mailto:mmbmahidul007@gmail.com"
                className="contact_button flex items-center"
              >
                Write me{" "}
                <BsArrowRightShort className="contact_button-icon"></BsArrowRightShort>
              </a>
            </div>
            <div className="contact_card">
              <FaWhatsapp className="contact_card-icon"></FaWhatsapp>
              <h3 className="contact_card-title">Whats app</h3>
              <span className="contact_card-data">+88 01521-303367</span>
              <a
                target="__blank"
                href="https://api.whatsapp.com/send?phone=8801521303367&text=Hello, more information!"
                className="contact_button flex items-center"
              >
                Write me
                <BsArrowRightShort className="contact_button-icon"></BsArrowRightShort>
              </a>
            </div>
            <div className="contact_card">
              <FaFacebookMessenger className="contact_card-icon"></FaFacebookMessenger>
              <h3 className="contact_card-title">Messenger</h3>
              <span className="contact_card-data">
                <a target="__blank" href="https://m.me/mmbmahidul.007">
                  mmbmahidul
                </a>
              </span>
              <a
                target="__blank"
                href="https://m.me/mmbmahidul.007"
                className="contact_button flex items-center"
              >
                Write me{" "}
                <BsArrowRightShort className="contact_button-icon"></BsArrowRightShort>
              </a>
            </div>
          </div>
        </div>
        <div className="contact_content" data-aos="fade-left">
          <h3 className="contact_title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                id=""
                className="contact_form-input"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                id=""
                className="contact_form-input"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Project</label>
              <textarea
                name="project"
                placeholder="Write your project"
                cols="30"
                rows="10"
                className="contact_form-input"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="my-btn mt-10"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
