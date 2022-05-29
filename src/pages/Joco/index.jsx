import React from "react";

// Component imports
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// Asset imports
import jocoDetail from "../../assets/images/jocoDetail.png";

export default function Joco() {
    return (
        <>
            <NavBar />
            <section id="hero">
                <div className="my-5 py-5 container col-md-12 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <div className="my-5 py-5 d-flex flex-column justify-content-center align-items-center h-50">
                        <h6 className="fs-3 lblue-txt" style={{ width: '90%' }}>
                            Joco Production
                        </h6>
                        <img src={jocoDetail} alt="" className="w-100 my-2" />
                        <p>Website marketplace yang dibuat dengan html5, css3, javascript, dan PHP</p>
                    </div>
                    <hr className="w-25 lblue-bg" />
                </div>
            </section>
            <Footer />
        </>
    );
}
