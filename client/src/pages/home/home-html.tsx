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
                        <span>MediSync</span>
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

            <div className="content-container">
                <div>
                    <img src={logo} style={{ width: "200px", height: "200px", marginTop: "0px", marginBottom: "0px" }}></img>
                    <h1 id="name-goes-here">Hi, Kamal</h1>
                </div>

                <div className="container mb-3">
                    <input className="form-control me-2 custom-rounded" type="search" placeholder="Search" aria-label="Search" />
                </div>


                <div className="icons">
                    <table>
                        <tbody>
                            <tr>
                                <td className="icon-cell"><img src={order} style={{ width: "60px", height: "60px" }} alt="Order Icon" /></td>
                                <td className="icon-cell"><img src={refill} style={{ width: "60px", height: "60px" }} alt="Refill Icon" /></td>
                                <td className="icon-cell"><img src={reminder} style={{ width: "60px", height: "60px" }} alt="Reminder Icon" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="card-container">
                    <div className="card-content">
                        <div className="card-text">
                            <h3><b>Contact Consultant</b></h3>
                        </div>
                        <div className="card-details">
                            <button className="contact-button">
                                Contact
                            </button>
                            <div className="card-icon">
                                <img src={doctor} alt="Consultant Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHtml
