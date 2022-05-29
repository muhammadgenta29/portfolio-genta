import React from "react";

// Component imports
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// Asset imports
import fkpDetail from "../../assets/images/fkpDetail.png";

export default function Fkp() {
    return (
        <>
            <NavBar />
            <section id="hero">
                <div className="my-5 py-5 container col-md-12 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <div className="my-5 py-5 d-flex flex-column justify-content-center align-items-center h-50">
                        <h6 className="fs-3 lblue-txt" style={{ width: '90%' }}>
                            fkp.or.id
                        </h6>
                        <img src={fkpDetail} alt="" className="w-100 my-2" />
                        <p>Website Forum Kewirausahaan Pemuda yang dibuat dengan PHP, HTML5, CSS3, dan Javascript disertai blog serta page Admin</p>
                    </div>
                    <hr className="w-25 lblue-bg" />
                </div>
            </section>
            <Footer />
        </>
    );
}
