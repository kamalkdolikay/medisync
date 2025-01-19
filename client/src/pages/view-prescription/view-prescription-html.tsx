import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./view-prescription.css";
import logo from "../../assets/logo2.png";

const ViewPrescription = () => {
  const navigate = useNavigate();

  // State to manage the expanded status of each prescription
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    Amoxicillin: false,
    Hydrocodone: false,
  });

  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleEdit = (prescriptionName: string) => {
    Swal.fire({
      title: `Edit ${prescriptionName}`,
      text: "Redirecting to edit prescription details...",
      icon: "info",
      confirmButtonText: "Okay",
    }).then(() => {
      navigate(`/edit/${prescriptionName.toLowerCase()}`);
    });
  };

  const handleDelete = (prescriptionName: string) => {
    Swal.fire({
      title: `Are you sure you want to delete ${prescriptionName}?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `${prescriptionName} has been deleted.`, "success");
        // Add logic here to delete the prescription
      }
    });
  };


  const handleCrossCircleClick = () => {
    Swal.fire({
      title: "Add New Prescription",
      text: "Redirecting to the add prescription page...",
      icon: "info",
      confirmButtonText: "Okay",
    }).then(() => {
      navigate("/medicine-input");
    });
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

      <div className="content-container-3">
      <div>
                    <img src={logo} style={{ width: "200px", height: "200px", marginTop: "0px", marginBottom: "0px" }}></img>
                </div>
        <h2 className="text-center">View your prescription</h2>

        {/* Prescription Box: Amoxicillin */}
        <div className="prescription-box">
          <div
            className="prescription-title"
            onClick={() => toggleExpand("Amoxicillin")}
          >
            Amoxicillin
          </div>
          <div
            className={`prescription-details ${expanded.Amoxicillin ? "expanded" : ""
              }`}
          >
            <p>Total in hand: 200</p>
            <p>Refill alert amount: 50</p>
            <p>Times per day: 3</p>
            <p>Pills per time: 2</p>
            <p>Time 1: 07:00</p>
            <p>Time 2: 12:00</p>
            <p>Time 3: 17:00</p>
            <div className="button-group">
              <button
                className="edit-btn"
                onClick={() => handleEdit("Amoxicillin")}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete("Amoxicillin")}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Prescription Box: Hydrocodone */}
        <div className="prescription-box">
          <div
            className="prescription-title"
            onClick={() => toggleExpand("Hydrocodone")}
          >
            Hydrocodone
          </div>
          <div
            className={`prescription-details ${expanded.Hydrocodone ? "expanded" : ""
              }`}
          >
            <p>Total in hand: 100</p>
            <p>Refill alert amount: 50</p>
            <p>Times per day: 2</p>
            <p>Pills per time: 2</p>
            <p>Time 1: 07:00</p>
            <p>Time 2: 17:00</p>
            <div className="button-group">
              <button
                className="edit-btn"
                onClick={() => handleEdit("Amoxicillin")}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete("Amoxicillin")}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Cross-circle button under Hydrocodone */}
        <div className="text-center">
          <button
            className="cross-circle-btn"
            onClick={handleCrossCircleClick}
          ></button>
        </div>
      </div>
    </>
  );
};

export default ViewPrescription;
