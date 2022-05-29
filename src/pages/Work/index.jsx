import React from 'react'
import { Link } from 'react-router-dom'
// Assets imports

import mmatasik from "../../assets/images/mmatasik.png";
import muliaabadi from "../../assets/images/muliaabadi.png";
import simoney from "../../assets/images/simoney.png";
import simoneyDetail from "../../assets/images/simoneyDetail.png";
import legacy from "../../assets/images/legacy.png";
import legacyDetail from "../../assets/images/legacyDetail.png";
import jackpot from "../../assets/images/jackpot.png";
import jackpotDetail from "../../assets/images/jackpotDetail.png";
import zatstore from "../../assets/images/zatstore.png";
import zatstoreDetail from "../../assets/images/zatstoreDetail.png";
import fkp from "../../assets/images/fkp.png";
import fkpDetail from "../../assets/images/fkpDetail.png";
import joco from "../../assets/images/joco.png";
import jocoDetail from "../../assets/images/jocoDetail.png";
import sunday from "../../assets/images/sunday.png";
import sundayDetail from "../../assets/images/sundayDetail.png";
import wakaspace from "../../assets/images/wakaspace.png";
import wakaspaceDetail from "../../assets/images/wakaspaceDetail.png";
import lomba from "../../assets/images/lomba.jpg";
import lombaPdf from "../../assets/files/lomba-pdf.pdf";

// components imports
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Work() {
    return (
        <>
            <NavBar />
            <section
                id="projects"
                className="d-flex justify-content-center align-items-center">
                <div className="w-100 container-fluid px-0">
                    <h3 className="cyan-txt my-5 pt-5 text-center fw-bold">Works</h3>
                    <div className="d-flex flex-md-row flex-column justify-content-around align-items-center">
                        <div className="row d-flex gap-5 justify-content-center">
                            <Link to="/mmatasik" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={mmatasik} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        mmatasik.com
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/muliaabadi" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={muliaabadi} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        muliaabaditasik.com
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/simoney" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={simoney} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        simoney
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/legacytopup" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={legacy} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        legacytopup.com
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/jackpotcash" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={jackpot} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        jackpotcash.id
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/zatstore" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={zatstore} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        zatstore.id
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/sundayenglish" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={sunday} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        sunday
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/wakaspace" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={wakaspace} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        wakaspace
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/fkp" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={fkp} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        fkp.or.id
                                    </h5>
                                </div>
                            </Link>
                            <Link to="/joco-production" className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={joco} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        joco production
                                    </h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="projects"
                className="d-flex justify-content-center align-items-center">
                <div className="w-100 container-fluid px-0">
                    <h3 className="cyan-txt my-5 pt-5 text-center fw-bold">Achievement</h3>
                    <div className="d-flex flex-md-row flex-column justify-content-around align-items-center">
                        <div className="row d-flex gap-5 justify-content-center">
                            <a target="blank" href={lombaPdf} className="text-decoration-none col-12 col-md-5 card proj-card imgProject">
                                <img src={lomba} alt="" className="w-100 h-project" />
                                <div class="card-body d-flex flex-column justify-content-center align-items-start">
                                    <h5 class="card-title align-self-start lblue-txt fw-bold">
                                        Juara 1 Lomba Web Development
                                    </h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
