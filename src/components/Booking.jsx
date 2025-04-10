import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ":00");
      }
      if(random() < 0.5) {
          result.push(i + ":30");
      }
  }
  return result;
};

const submitAPI = function(formData) {
  return true;
};

const Booking = () => {
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: ""
  })
  const [avaibleTimes, setAvaibleTimes] = useState([]);
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(reservation.date) {
      const date = new Date(reservation.date);
      const times = fetchAPI(date);
      setAvaibleTimes(times)
      setReservation(prev => ({...prev, time: "" }));
    }
  }, [reservation.date])

  const handleChange = (e) => {
    setReservation({...reservation, [e.target.name]: e.target.value})
    console.log(reservation)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = submitAPI(reservation);
    if(success) {
      setConfirmation(true)
    }
  }

  const handleConfirmation = () => {
    setReservation({
      date: "",
      time: "",
      guests: "",
      occasion: ""
    });
    setConfirmation(false);
    navigate("/")
  }

  return (
    <div className="booking-container">
        <div className="booking-box">
          <h2>Table Reservation</h2>
          <form className="booking-form" onSubmit={handleSubmit}>
              <label for="date">Choose date</label>
              <input type="date" id="date" name="date" onChange={handleChange} required/>

              <label for="time">Choose time</label>
              <select id="time " name="time" onChange={handleChange} disabled={!reservation.date} required>
              <option value="" disabled selected>Select time</option>
                {avaibleTimes.map((time, index) => (
                  <option value={time} key={index}>{time}</option>
                ))}
              </select>

              <label for="guests">Number of guests</label>
              <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              onChange={handleChange}
              disabled={!reservation.time}
              required/>

            <label for="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={handleChange} disabled={!reservation.guests} required>
                <option value="" disabled selected>Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

              <div className="booking-navigation">
                <button type="button" className="btn-cancel" onClick={() => navigate("/")}>Go Back</button>
                <button type="submit" className="btn-submit" disabled={!reservation.date || !reservation.time || !reservation.guests || !reservation.occasion}>Make Your reservation</button>
              </div>
          </form>
        </div>

        { confirmation &&
          <div className="confirmation">
            <div className="confirmation-info">
              <h3>Reservation confirmed!</h3>
              <p>We are delighted to confirm your reservation at <strong>Little Lemon</strong> on <strong>{new Date(reservation.date).toLocaleDateString()}</strong> at <strong>{reservation.time}</strong>. Your party of <strong>{reservation.guests} guests</strong> will be celebrating a <strong>{reservation.occasion}</strong>, and we look forward to making it a special occasion for you.</p>
              <button type="button" onClick={handleConfirmation}><FontAwesomeIcon icon={faXmark} size="2x"/></button>
            </div>
          </div>
        }
    </div>
  )
}

export default Booking