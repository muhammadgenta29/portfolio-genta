import React from "react";

// Component imports
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// Asset imports
import zatstoreDetail from "../../assets/images/zatstoreDetail.png";

export default function Zatstore() {
    return (
        <>
            <NavBar />
            <section id="hero">
                <div className="my-5 py-5 container col-md-12 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <div className="my-5 py-5 d-flex flex-column justify-content-center align-items-center h-50">
                        <h6 className="fs-3 lblue-txt" style={{ width: '90%' }}>
                            zatstore.id
                        </h6>
                        <img src={zatstoreDetail} alt="" className="w-100 my-2" />
                        <p>Website ini dibuat untuk Topup game, menggunakan php, html, css, dan js, menggunakan boostraps 5, dan terdapat microworker yang bertugas mengotomatisasi webiste supplayer dengan menggunakan nodejs, puppeter js, express js dalam pembuatannya.</p>
                    </div>
                    <hr className="w-25 lblue-bg" />
                </div>
            </section>
            <Footer />
        </>
    );
}
