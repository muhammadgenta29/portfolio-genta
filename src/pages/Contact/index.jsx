import React from "react";

// Component imports
import NavBar from "../../components/NavBar";

// Asset imports
import fireIcon from "../../assets/images/Fire_Icon.svg";
// Icon imports
import {
    SiDiscord,
    SiWhatsapp,
    SiGithub,
    SiTwitter,
    SiInstagram,
    SiLinkedin,
} from "react-icons/si";
import Footer from "../../components/Footer";

export default function Contact() {
    return (
        <>
            <NavBar />
            <section
                id="contact"
                className="container col-md-6 d-flex flex-column justify-content-center align-items-center mt-5 pt-5"
            >
                <h3 className="cyan-txt text-center fw-bold">Contact</h3>
                <div className="d-flex flex-md-row flex-column justify-content-around align-items-center mt-4">
                    <img src={fireIcon} alt="fireIcon" className="custom-fireicon" />
                    <div className="col-md-6 d-flex flex-column text-center mt-5">
                        <h3 className="lblue-txt">I'd love to hear from you!</h3>
                        <p className="mt-5">
                            Got a project you would like me to work on? Or how about just a
                            friendly chat?
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mt-5">
                        <div className="">
                            <a
                                href="https://wa.me/+6282217384308"
                                className="btn social-icon rounded-circle me-2"
                                target="blank"
                            >
                                <SiWhatsapp className="lblue-txt" />
                            </a>
                            <a
                                href="https://github.com/muhammadgenta29"
                                className="btn social-icon rounded-circle me-2"
                                target="blank"
                            >
                                <SiGithub className="lblue-txt" />
                            </a>
                            <a
                                href="https://www.instagram.com/mgentamahardhika"
                                className="btn social-icon rounded-circle me-2"
                                target="blank"
                            >
                                <SiInstagram className="lblue-txt" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muhammad-genta-mahardhika"
                                className="btn social-icon rounded-circle"
                                target="blank"
                            >
                                <SiLinkedin className="lblue-txt" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
