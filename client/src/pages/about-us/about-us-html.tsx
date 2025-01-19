// HomeHtml.tsx
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import './about-us.css';

const AboutUs = () => {

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

            <div className="about-container">
                <div>
                    <img src={logo} style={{ width: "200px", height: "200px", marginTop: "0px", marginBottom: "0px" }}></img>
                    <h1 id="name-goes-here" className="s-font">About Us</h1>
                    <p>
                        At MediSync, our mission is to improve healthcare accessibility through innovative technology. By automating essential processes that don’t require in-person appointments, we reduce the burden on clinics, freeing up resources for patients with critical conditions to receive timely care.
                        Our app streamlines prescription ordering and refills, allowing users to send requests directly to their healthcare practitioners. With features like custom medication reminders and refill alerts, MediSync empowers users to stay on top of their health and avoid delays. By simplifying these tasks, we aim to create a more efficient healthcare system that prioritizes timely care and better health outcomes. At MediSync, your health is our priority.
                    </p>
                </div>



            </div>
        </>
    );
};

export default AboutUs
