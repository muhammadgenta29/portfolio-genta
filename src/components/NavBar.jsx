import React from "react";

// Asset imports
import cv from "../assets/files/cv.pdf";

// Icon imports
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineContacts } from "react-icons/md";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <section
        id="navBar"
        className="d-flex justify-content-center fixed-top align-items-center"
      >
        <div className="w-75 d-flex justify-content-around align-items-center custom-nav-md">
          <div className="d-none d-md-flex justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none cyan-txt">
              <h6 className="fw-bold">Home</h6>
            </Link>
            <Link to="/work" className="text-decoration-none cyan-txt">
              <h6 className="ms-5 fw-bold">Work</h6>
            </Link>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none cyan-txt">
              <h3 className="fw-bold">M Genta</h3>
            </Link>
          </div>
          <div className="d-none d-md-flex justify-content-between align-items-center">
            <Link to="/contact" href="#contact" className="text-decoration-none cyan-txt">
              <h6 className="me-5 fw-bold">Contact</h6>
            </Link>
            <a
              href={cv}
              className="text-decoration-none cyan-txt"
              target="_blank"
              rel="noreferrer"
            >
              <h6 className="fw-bold">Resume</h6>
            </a>
          </div>
        </div>
      </section>
      {/* Additional navbar for mobile view */}
      <section
        id="navBarMobile"
        className="d-md-none d-flex justify-content-center fixed-bottom align-items-center"
      >
        <div className="w-75 d-flex justify-content-around align-items-center custom-nav">
          <a href="#about" className="h6 text-decoration-none cyan-txt">
            <AiOutlineInfoCircle />
          </a>
          <a href="#projects" className="h6 text-decoration-none cyan-txt">
            <HiOutlineLightBulb />
          </a>
          <a href="#contact" className="h6 text-decoration-none cyan-txt">
            <MdOutlineContacts />
          </a>
          <a
            href={cv}
            className="h6 text-decoration-none cyan-txt"
            target="_blank"
            rel="noreferrer"
          >
            <BsNewspaper />
          </a>
        </div>
      </section>
    </>
  );
}
