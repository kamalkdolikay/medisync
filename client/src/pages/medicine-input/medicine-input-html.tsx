const MedicineInput = () => {
  return (
    <div>
      <div id="nav-placeholder"></div>
      <div className="container">
        <div className="card bg-a8dadc p-4 mb-4 border-0 rounded-4">
          <h4 className="text-center mb-3">1. Tell Us About Your Medication</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Medication Name:</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">Type of Medication:</label>
            <input type="text" list="datalistOptions" className="form-control" id="type" placeholder="Type to search..." required />
            <datalist id="datalistOptions">
              <option value="Vitamin" />
              <option value="Ibuprofen" />
              <option value="Antidepressant" />
              <option value="Antibiotic" />
              <option value="Supplement" />
              <option value="Ointment" />
              <option value="Eye drops" />
              <option value="Nasal Spray" />
            </datalist>
          </div>
          <label htmlFor="dose" className="form-label">Dosage:</label>
          <div className="input-group mb-3">
            <input type="number" className="form-control" id="dose" value="1" max="10" min="1" required />
            <button id="add1" className="btn btn-outline-secondary bg-457b9d c-f1faee" type="button">
              <i className="bi bi-caret-up"></i>
            </button>
            <button id="remove1" className="btn btn-outline-secondary bg-457b9d c-f1faee" type="button">
              <i className="bi bi-caret-down"></i>
            </button>
          </div>
          <div>
            <label htmlFor="desc" className="form-label">Personal Notes:</label>
            <textarea id="desc" className="form-control" rows={5} maxLength={100}></textarea>
          </div>
        </div>
        <div className="card bg-a8dadc p-4 mb-4 border-0 rounded-4">
          <h4 className="text-center mb-3">2. When Would You Like To Take It?</h4>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Select Day(s):</label>
            <div className="d-flex justify-content-evenly align-items-center">
              <button type="button" className="btn day-btn bg-457b9d c-f1faee remove-border" data-bs-toggle="button" value="0">S</button>
              <button type="button" className="btn day-btn bg-457b9d c-f1faee remove-border" data-bs-toggle="button" value="1">M</button>
              <button type="button" className="btn day-btn bg-457b9d c-f1faee remove-border" data-bs-toggle="button" value="2">T</button>
              <button type="button" className="btn day-btn bg-457b9d c-f1faee remove-border" data-bs-toggle="button" value="3">W</button>
              <button type="button" className="btn day-btn bg-457b9d c-f1faee remove-border" data-bs-toggle="button" value="4">T</button>
              <button type="button" className="btn day-btn bg-457b9d c-f1faee remove-border" data-bs-toggle="button" value="5">F</button>
              <button type="button" className="btn day-btn bg-457b9d c-f1faee remove-border" data-bs-toggle="button" value="6">S</button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Select a time:</label>
            <div className="cs-form">
              <input id="time" type="time" className="form-control" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="repeat" className="form-label">Repeating:</label>
            <select className="form-select" aria-label="Default select example" id="repeat">
              <option selected value="weekly">Weekly</option>
              <option value="daily">Daily</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="endDate">End Date</label>
            <input id="endDate" className="form-control" type="date" required />
          </div>
        </div>
        <div className="card bg-a8dadc p-4 border-0 rounded-4">
          <h4 className="text-center mb-3">3. Would You Like Us To Save a Picture For You?</h4>
          <p className="text-center"><i>Just in case you forget (optional)</i></p>
          <div className="text-center">
            <i className="bi bi-camera c-1d3557"></i>
            <div className="text-center">
              <input type="file" id="medImg-1" accept="image/png, image/jpeg" />
              <label htmlFor="medImg-1" className="file-btn">Choose Image</label>
            </div>
            <p id="image-conf-msg" className="mt-3" hidden>Image uploaded<i className="bi bi-check"></i></p>
          </div>
        </div>
        <div className="mt-3 text-center">
          <button type="submit" className="btn btn-primary bg-1d3557 c-f1faee remove-border save-btn rounded-3">Save</button>
        </div>
      </div>
    </div>
  );
};

export default MedicineInput;
