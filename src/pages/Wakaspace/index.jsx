import React from "react";

// Component imports
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

// Asset imports
import wakaspaceDetail from "../../assets/images/wakaspaceDetail.png";

export default function Wakaspace() {
    return (
        <>
            <NavBar />
            <section id="hero">
                <div className="my-5 py-5 container col-md-12 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
                    <div className="my-5 py-5 d-flex flex-column justify-content-center align-items-center h-50">
                        <h6 className="fs-3 lblue-txt" style={{ width: '90%' }}>
                            wakaspace.com
                        </h6>
                        <img src={wakaspaceDetail} alt="" className="w-100 my-2" />
                        <p>Website  (Landing Page) dibuat dengan ReactJS, dan TailwindCSS untuk pemaparan NFT Game Marketplace Wakaspace</p>
                    </div>
                    <hr className="w-25 lblue-bg" />
                </div>
            </section>
            <Footer />
        </>
    );
}
