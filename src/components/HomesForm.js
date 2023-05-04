import React, { useState } from 'react';

function HomesForm() {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [livingroom, setLivingroom] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit form data to server or store locally
    console.log({ category, location, bedroom, bathroom, livingroom });
    // update state to show form submission
    setFormSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
        <br />
        <label>
          Bedroom:
          <input type="number" value={bedroom} onChange={(event) => setBedroom(event.target.value)} />
        </label>
        <br />
        <label>
          Bathroom:
          <input type="number" value={bathroom} onChange={(event) => setBathroom(event.target.value)} />
        </label>
        <br />
        <label>
          Livingroom:
          <select value={livingroom} onChange={(event) => setLivingroom(event.target.value)}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {formSubmitted && (
        <div>
          <p>Category: {category}</p>
          <p>Location: {location}</p>
          <p>Bedroom: {bedroom}</p>
          <p>Bathroom: {bathroom}</p>
          <p>Livingroom: {livingroom}</p>
        </div>
      )}
    </div>
  );
}

export default HomesForm;
