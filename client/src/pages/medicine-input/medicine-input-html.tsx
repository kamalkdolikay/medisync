import React, { useState } from "react";
import Swal from 'sweetalert2'; 
import { useNavigate } from 'react-router-dom'; 
import "./medicine-input.css";

const MedicineInput = () => {
  const navigate = useNavigate(); 
  const [timesPerDay, setTimesPerDay] = useState(0); // State for "How many times a day?"
  const [timeInputs, setTimeInputs] = useState<string[]>([]); // State for time inputs
  const [pillsPerTime, setPillsPerTime] = useState(1); // State for "How many pills one time?"

  // Function to handle incrementing times per day
  const incrementTimes = () => {
    const updatedTimes = timesPerDay + 1;
    setTimesPerDay(updatedTimes);
    setTimeInputs([...timeInputs, ""]); // Add new time input
  };

  // Function to handle decrementing times per day
  const decrementTimes = () => {
    if (timesPerDay > 0) {
      const updatedTimes = timesPerDay - 1;
      setTimesPerDay(updatedTimes);
      setTimeInputs(timeInputs.slice(0, -1)); // Remove last time input
    }
  };

  // Function to handle time input changes
  const handleTimeChange = (index: number, value: string) => {
    const updatedInputs = [...timeInputs];
    updatedInputs[index] = value;
    setTimeInputs(updatedInputs);
  };

  const handleSave = () => { 
    // Logic for saving the data
    // alert("Medication details saved successfully!");
    Swal.fire({
      title: 'Reminder Set!', 
      text: "Your reminder has been added successfully.",
      icon: 'success',
      confirmButtonText: 'Okay',
      allowOutsideClick: false, 
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/dashboard'); 
      }
    });
  };


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
        <h2 className="text-center">Specify your medication</h2>
        <div className="form-group">
          <label htmlFor="medicationName" className="form-label">
            Medication Name:
          </label>
          <input type="text" id="medicationName" className="form-control" placeholder="Enter medication name" />
        </div>
        <div className="form-group">
          <label htmlFor="totalInHand" className="form-label">
            Total in hand:
          </label>
          <input type="number" id="totalInHand" className="form-control" min="0" />
        </div>
        <div className="form-group">
          <label htmlFor="refillAlert" className="form-label">
            Refill alert amount:
          </label>
          <input type="number" id="refillAlert" className="form-control" min="0" />
        </div>
        <div className="form-group">
          <label htmlFor="timesPerDay" className="form-label">
            How many times a day?:
          </label>
          <div className="input-group">
            <input type="number" id="timesPerDay" className="form-control" value={timesPerDay} readOnly />
            <button className="btn btn-outline-secondary" type="button" onClick={incrementTimes}>
              +
            </button>
            <button className="btn btn-outline-secondary" type="button" onClick={decrementTimes}>
              -
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="pillsPerTime" className="form-label">
            How many pills one time?:
          </label>
          <input
            type="number"
            id="pillsPerTime"
            className="form-control"
            min="1"
            value={pillsPerTime}
            onChange={(e) => setPillsPerTime(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <h4>Specify times:</h4>
          {timeInputs.map((time, index) => (
            <div key={index} className="input-group mb-3">
              <label className="form-label">Time {index + 1}:</label>
              <input
                type="time"
                className="form-control"
                value={time}
                onChange={(e) => handleTimeChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default MedicineInput;
