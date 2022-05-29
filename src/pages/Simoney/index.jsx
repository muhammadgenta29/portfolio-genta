import React from "react";

// Component imports
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// Asset imports
import simoneyDetail from "../../assets/images/simoneyDetail.png";

export default function Simoney() {
    return (
        <>
            <NavBar />
            <section id="hero">
                <div className="my-5 py-5 container col-md-12 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <div className="my-5 py-5 d-flex flex-column justify-content-center align-items-center h-50">
                        <h6 className="fs-3 lblue-txt" style={{ width: '90%' }}>
                            Simoney (School Digital Money)
                        </h6>
                        <img src={simoneyDetail} alt="" className="w-100 my-2" />
                        <p>E wallet yang dibangun di dengan php , html , css dan javascript , mengunakan react native untuk tampilan dari apknya , alasan di buatnya project ini adalah sebagai penganti dari media kertas dalam menabung , juga di tambahkan fitur menarik di dalmmnya</p>
                    </div>
                    <hr className="w-25 lblue-bg" />
                </div>
            </section>
            <Footer />
        </>
    );
}
