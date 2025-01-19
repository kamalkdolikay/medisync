import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./view-prescription.css";

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
      <nav
        className="navbar navbar-expand-md fixed-top border-bottom"
        style={{ backgroundColor: "#d9d9d9" }}
        role="navigation"
      >
        <div className="container">
          <a className="navbar-brand" href="/index.html">
            <span>MediSync</span>
          </a>
        </div>
      </nav>

      <div className="content-container-3">
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
            className={`prescription-details ${
              expanded.Amoxicillin ? "expanded" : ""
            }`}
          >
            <p>Total in hand: 200</p>
            <p>Refill alert amount: 50</p>
            <p>Times per day: 3</p>
            <p>Pills per time: 2</p>
            <p>Time 1: 07:00</p>
            <p>Time 2: 12:00</p>
            <p>Time 3: 17:00</p>
            <button
              className="edit-btn"
              onClick={() => handleEdit("Amoxicillin")}
            >
              Edit
            </button>
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
            className={`prescription-details ${
              expanded.Hydrocodone ? "expanded" : ""
            }`}
          >
            <p>Total in hand: 100</p>
            <p>Refill alert amount: 50</p>
            <p>Times per day: 2</p>
            <p>Pills per time: 2</p>
            <p>Time 1: 07:00</p>
            <p>Time 2: 17:00</p>
            <button
              className="edit-btn"
              onClick={() => handleEdit("Hydrocodone")}
            >
              Edit
            </button>
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
