"use client";
import "./booktable.css";
import Map from "../components/global/map/Map";
import { ChangeEvent, FormEvent, useState } from "react";
import { backendHostName } from "../backendhostname";
export default function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    numberOfPeople: "",
    reserveDateTime: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(0);

  const statusMessage = [, <p>Submission Success</p>, <p>Submission Failed</p>];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reservationData = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      numberOfPeople: formData.numberOfPeople,
      reserveDateTime: formData.reserveDateTime,
    };

    try {
      const response = await fetch(`${backendHostName}/api/save/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        setSubmissionStatus(2);
        throw new Error("Failed to submit reservation");
      }

      const result = await response.json();
      setSubmissionStatus(1);
    } catch (error) {
      setSubmissionStatus(2);
    }
  };
  return (
    <main className="book-table-page">
      <div className="book-table-header">
        <h1>Book Table</h1>
      </div>
      <div className="book-table-grid">
        <div className="book-table-content">
          <form className="book-table-form" onSubmit={handleSubmit}>
            <div>
              <label className="book-table-input-label" htmlFor="name">
                Name
                <br />
              </label>
              <input
                type="text"
                className="book-table-input"
                name="name"
                id="name"
                placeholder="John Doe"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label className="book-table-input-label" htmlFor="phoneNumber">
                Phone Number
                <br />
              </label>
              <input
                type="tel"
                className="book-table-input"
                name="phoneNumber"
                id="phoneNumber"
                pattern="[0-9]{9}"
                placeholder="123456789"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label className="book-table-input-label" htmlFor="email">
                Email
                <br />
              </label>
              <input
                type="email"
                className="book-table-input"
                name="email"
                id="email"
                pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                placeholder="johndoe@gmail.com"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label
                className="book-table-input-label"
                htmlFor="numberOfPeople"
              >
                Party Size
                <br />
              </label>
              <input
                type="number"
                className="book-table-input"
                name="numberOfPeople"
                id="numberOfPeople"
                placeholder="Enter a number"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label
                className="book-table-input-label"
                htmlFor="reserveDateTime"
              >
                Date
                <br />
              </label>
              <input
                type="datetime-local"
                className="book-table-input"
                name="reserveDateTime"
                id="reserveDateTime"
                onChange={handleChange}
                required
              ></input>
            </div>
            <input type="submit" className="submit-button"></input>
            {statusMessage[submissionStatus]}
          </form>
        </div>
        <div className="book-table-content">
          <div className="map-spacer">
            <Map height={446} />
          </div>
        </div>
      </div>
    </main>
  );
}