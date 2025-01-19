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

  // Toggle expand/collapse for a prescription
  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Handle edit button click
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

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top border-bottom" style={{ backgroundColor: "#d9d9d9" }} role="navigation">
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
          {expanded.Amoxicillin && (
            <div className="prescription-details">
              <p>Total in hand: 200</p>
              <p>Refill alert amount: 50</p>
              <p>How many times a day: 3</p>
              <p>How many pills one time: 2</p>
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
          )}
        </div>

        {/* Prescription Box: Hydrocodone */}
        <div className="prescription-box">
          <div
            className="prescription-title"
            onClick={() => toggleExpand("Hydrocodone")}
          >
            Hydrocodone
          </div>
          {expanded.Hydrocodone && (
            <div className="prescription-details">
              <p>Total in hand: 100</p>
              <p>Refill alert amount: 50</p>
              <p>How many times a day: 2</p>
              <p>How many pills one time: 2</p>
              <p>Time 1: 07:00</p>
              <p>Time 2: 17:00</p>
              <button
                className="edit-btn"
                onClick={() => handleEdit("Hydrocodone")}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewPrescription;
