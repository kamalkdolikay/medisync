// HomeHtml.tsx
import { useNavigate } from "react-router-dom";
import refill from "../../assets/refill.png";
import reminder from "../../assets/reminder.png";
import order from "../../assets/order.png";
import logo from "../../assets/logo2.png";
import doctor from "../../assets/doctor.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import history from "../../assets/order-history.png";
import './home.css';

const HomeHtml = () => {

    const navigate = useNavigate();

    const handleRedirect = (path: string) => {
        navigate(path);
    }

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

                <div className="row mb-4">
                    <div className="col clickable-image" onClick={() => handleRedirect("/view-prescription")} style={{ cursor: "pointer" }}>
                        <div className="icon-circle">
                            <img src={history} alt="View Orders" />
                        </div>
                        <p className="p-font">View Orders</p>
                    </div>
                    <div className="col clickable-image" onClick={() => handleRedirect("/prescription-request")} style={{ cursor: "pointer" }}>
                        <div className="icon-circle">
                            <img src={order} alt="Send Order" />
                        </div>
                        <p className="p-font">Send Order</p>
                    </div>
                    <div className="col clickable-image" onClick={() => handleRedirect("/")} style={{ cursor: "pointer" }}>
                        <div className="icon-circle">
                            <img src={refill} alt="Refill Alerts" />
                        </div>
                        <p className="p-font">Refill Alerts</p>
                    </div>
                    <div className="col clickable-image" onClick={() => handleRedirect("/medicine-input")} style={{ cursor: "pointer" }}>
                        <div className="icon-circle">
                            <img src={reminder} alt="Reminders" />
                        </div>
                        <p className="p-font">Reminders</p>
                    </div>
                </div>



                <div className="card-container">
                    <div className="card-text">
                        <h3><b>Your Consultant</b></h3>
                        <p>Name: James Smith</p>
                        <p>Location: UBC</p>
                    </div>
                    <div className="card-icon">
                        <img className="clickable-image" src={doctor} alt="Consultant Icon" />
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
                            <img src={doctor3} className="img-fluid w-50 rounded-circle mb-2" alt="Doctor" />
                            <p className="mb-0 p-font">Dr. Alice Perez</p>
                            <small className="p-font">Dermatologist</small>
                        </div>
                        <div className="col-4 text-center">
                            <img src={doctor2} className="img-fluid w-50 rounded-circle mb-2" alt="Doctor" />
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
