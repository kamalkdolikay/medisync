import React, { useState } from "react";
import refill from "../../assets/refill.png";
import reminder from "../../assets/reminder.png";
import order from "../../assets/order.png";
import logo from "../../assets/logo2.png";
import doctor from "../../assets/doctor.png";
import "./prescirption-request.css";

const PrescriptionRequest = () => {
  const [courseOfTreatment, setCourseOfTreatment] = useState(0); // State for course of treatment

  // Increment course of treatment
  const incrementCourse = () => setCourseOfTreatment(courseOfTreatment + 1);

  // Decrement course of treatment
  const decrementCourse = () => {
    if (courseOfTreatment > 0) setCourseOfTreatment(courseOfTreatment - 1);
  };

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

      <div className="body-container">
        {/* Logo and Page Title */}
        <div>
          <img src={logo} style={{ width: "200px", height: "200px", marginTop: "0px", marginBottom: "0px" }} alt="Logo" />
          <h1 className="text-center-title">Request Prescription</h1>
        </div>

        {/* Consultant Information */}
        <div className="card-container">
          <div className="card-text">
            <h3><b>Your Consultant</b></h3>
            <p>Name: James Smith</p>
            <p>Location: UBC</p>
          </div>
          <div className="card-icon">
            <img src={doctor} alt="Consultant Icon" />
          </div>
        </div>

        {/* Prescription Form */}
        <div className="form-group">
          <label htmlFor="prescriptionChoice" className="form-label">Choose a prescription:</label>
          <input
            type="text"
            list="prescriptionOptions"
            id="prescriptionChoice"
            className="form-control"
            placeholder="Select a prescription"
          />
          <datalist id="prescriptionOptions">
            <option value="Amoxicillin" />
            <option value="Hydrocodone" />
            <option value="Sertraline" />
          </datalist>
        </div>

        <div className="form-group">
          <label htmlFor="courseOfTreatment" className="form-label">Course of treatment:</label>
          <div className="input-group">
            <input
              type="number"
              id="courseOfTreatment"
              className="form-control"
              value={courseOfTreatment}
              readOnly
            />
            <button className="btn btn-outline-secondary" type="button" onClick={incrementCourse}>
              +
            </button>
            <button className="btn btn-outline-secondary" type="button" onClick={decrementCourse}>
              -
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="notesForConsultant" className="form-label">Notes for consultant:</label>
          <textarea id="notesForConsultant" className="form-control" rows={4} placeholder="Add any notes here"></textarea>
        </div>

        {/* Save Button */}
        <div>
          <button className="text-center">Save</button>
        </div>
      </div>
    </>
  );
};

export default PrescriptionRequest;
