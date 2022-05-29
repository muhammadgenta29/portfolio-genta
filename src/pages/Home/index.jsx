import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Home() {

    return (
        <>
            <NavBar />
            <section id="hero">
                <div className="container col-md-6 mx-auto text-center d-flex flex-column justify-content-center align-items-center vh-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-50 w-100 mt-md-5 mt-0">
                        <h3 className="display-4 my-5">Hello, Guys!</h3>
                        <h6 className="fs-3 lblue-txt" style={{ width: '90%' }}>
                            “I'm
                            <br></br>Muhammad Genta Mahardhika as Front End Developer.”
                        </h6>
                    </div>
                    <hr className="w-25 lblue-bg" />
                </div>
            </section>
            <Footer />
        </>
    );
}
