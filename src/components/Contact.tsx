import { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiPaperAirplane,
} from "react-icons/hi";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name || "Website Visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:dhruvsaliann@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-shell">
        <div className="contact-overlay" />
        <div className="contact-divider" />

        <div className="contact-left">
          <h3>Let's Connect</h3>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <HiOutlineMail />
              </div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruvsaliann@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                dhruvsaliann@gmail.com
              </a>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">
                <HiOutlinePhone />
              </div>
              <a href="tel:+18312240125" data-cursor="disable">
                +1 (831) 224-0125
              </a>
            </div>
          </div>

          <div className="contact-social-wrap">
            <h4>Social</h4>

            <a
              href="https://github.com/dhruvsaliann"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span>Github</span>
              <MdArrowOutward />
            </a>

            <a
              href="https://linkedin.com/in/dhruvsalian"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span>Linkedin</span>
              <MdArrowOutward />
            </a>
          </div>

          <div className="contact-credit">
            <h2>
              Designed and Developed <br /> by <span>Dhruv Salian</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <HiPaperAirplane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;