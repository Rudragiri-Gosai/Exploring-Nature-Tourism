import React from "react";
import "../CSS/Header.css";
function header() {
  return (
    <>
      <div className="header">
        <div id="menu-btn" class="fas fa-bars"></div>

        <a data-aos="zoom-in-left" data-aos-delay="150" href="#" class="logo">
          <i class="fas fa-paper-plane"></i>travel
        </a>

        <nav className="navbar">
          <a data-aos="zoom-in-left" data-aos-delay="300" href="#home">
            home
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="450" href="#about">
            about
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="600" href="#destination">
            destination
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="750" href="#services">
            services
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="900" href="#gallery">
            gallery
          </a>
          <a data-aos="zoom-in-left" data-aos-delay="1150" href="#blogs">
            blogs
          </a>
        </nav>

        <a
          data-aos="zoom-in-left"
          data-aos-delay="1300"
          href="#book-form"
          class="btn"
        >
          book now
        </a>
      </div>
    </>
  );
}

export default header;
