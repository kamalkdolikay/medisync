// HomeHtml.tsx
import refill from "../../assets/refill.png";
import reminder from "../../assets/reminder.png";
import order from "../../assets/order.png"
import logo from "../../assets/logo2.png"
import doctor from "../../assets/doctor.png"
import './home.css';

const HomeHtml = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top border-bottom" style={{ backgroundColor: "#d9d9d9" }} role="navigation">
                <div className="container">
                    <a className="navbar-brand d-md-none" href="/index.html">
                    </a>
                    <a className="navbar-brand d-md-none" href="/index.html">
                        <span className="s-font">MediSync</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
                        aria-controls="offcanvas" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="offcanvas" aria-labelledby="offcanvasLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav flex-grow-1 justify-content-between">
                                <li className="nav-item"><a className="nav-link" href="/index.html"><span>Home</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="/about.html"><span>About</span></a></li>
                                {/* <a href="/index.html"><img className="bi1" width="40" height="40" src="../images/MentalWellnessLogo.png" /></a> */}
                                <li className="nav-item"><a className="nav-link" href="/faq.html"><span>FAQ's</span></a></li>
                                <li className="nav-item"><a className="nav-link custom-nav-link">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="content-container-2">
                <div>
                    <img src={logo} style={{ width: "200px", height: "200px", marginTop: "0px", marginBottom: "0px" }}></img>
                    <h1 id="name-goes-here" className="s-font">Hi, Kamal</h1>
                </div>

                <div className="container mb-3">
                    <input className="form-control me-2 custom-rounded" type="search" placeholder="Search" aria-label="Search" />
                </div>


                {/* <div className="icons">
                    <table>
                        <tbody>
                            <tr>
                                <td className="icon-cell"><img src={order} style={{ width: "60px", height: "60px" }} alt="Order Icon" /></td>
                                <td className="icon-cell"><img src={refill} style={{ width: "60px", height: "60px" }} alt="Refill Icon" /></td>
                                <td className="icon-cell"><img src={reminder} style={{ width: "60px", height: "60px" }} alt="Reminder Icon" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}

                <div className="row mb-4">
                    <div className="col">
                        <img className="img-fluid w-50" src={logo} alt="" />
                        <i className="bi bi-person-circle h3"></i>
                        <p className="p-font">Doctors</p>
                    </div>
                    <div className="col">
                        <img className="img-fluid w-50" src={order} alt="" />
                        <i className="bi bi-capsule h3"></i>
                        <p className="p-font">Pharmacy</p>
                    </div>
                    <div className="col">
                        <img className="img-fluid w-50" src={refill} alt="" />
                        <i className="bi bi-building h3"></i>
                        <p className="p-font">Hospitals</p>
                    </div>
                    <div className="col">
                        <img className="img-fluid w-50" src={reminder} alt="" />
                        <i className="bi bi-clipboard h3"></i>
                        <p className="p-font">Insurance</p>
                    </div>
                </div>


                <div className="card-container">
                    <div className="card-content">
                        <div className="card-text">
                            <h4 className="p-font"><b>Contact Consultant</b></h4>
                        </div>
                        <div className="card-details">
                            
                            <div className="card-icon">
                                <img src={doctor} alt="Consultant Icon" />
                            </div>
                            <button className="contact-button">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h5 className="h-font">Top Doctors</h5>
                    <div className="row">
                        <div className="col-4 text-center">
                            <img src={doctor} className="img-fluid w-50 rounded-circle mb-2" alt="Doctor" />
                            <p className="mb-0 p-font">Dr. Marco Smith</p>
                            <small className="p-font">Cardiologist</small>
                        </div>
                        <div className="col-4 text-center">
                            <img src={doctor} className="img-fluid w-50 rounded-circle mb-2" alt="Doctor" />
                            <p className="mb-0 p-font">Dr. Alice Perez</p>
                            <small className="p-font">Dermatologist</small>
                        </div>
                        <div className="col-4 text-center">
                            <img src={doctor} className="img-fluid w-50 rounded-circle mb-2" alt="Doctor" />
                            <p className="mb-0 p-font">Dr. John Taylor</p>
                            <small className="p-font">Neurologist</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHtml
