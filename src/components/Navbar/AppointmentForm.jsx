import React, { useState } from "react";

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

const getCurrentTime = () => {
  const now = new Date();
  return now.toTimeString().slice(0, 5);
};

const AppointmentForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    department: "",
    message: "",
  });

  const todayStr = getTodayDate();
  const isToday = form.date === todayStr;
  const minTime = isToday ? getCurrentTime() : "00:00";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent past date
    if (form.date < todayStr) {
      alert("Date cannot be in the past.");
      return;
    }
    // Prevent past time if today
    if (isToday && form.time < minTime) {
      alert("Time cannot be in the past.");
      return;
    }
    // Handle form submission (API call, validation, etc.)
    alert("Appointment submitted!");
    onClose();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-primary mb-2">Book an Appointment</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border rounded-lg px-3 py-2"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="border rounded-lg px-3 py-2"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="border rounded-lg px-3 py-2"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        className="border rounded-lg px-3 py-2"
        value={form.date}
        onChange={handleChange}
        required
        min={todayStr}
      />
      <input
        type="time"
        name="time"
        className="border rounded-lg px-3 py-2"
        value={form.time}
        onChange={handleChange}
        required
        min={minTime}
      />
      <select
        name="department"
        className="border rounded-lg px-3 py-2"
        value={form.department}
        onChange={handleChange}
        required
      >
        <option value="">Select Department</option>
        <option value="Pediatrics">Pediatrics</option>
        <option value="Neonatology">Neonatology</option>
        <option value="Gynecology">Gynecology</option>
        {/* Add more departments as needed */}
      </select>
      <textarea
        name="message"
        placeholder="Message"
        className="border rounded-lg px-3 py-2"
        value={form.message}
        onChange={handleChange}
        rows={3}
      />
      <button
        type="submit"
        className="bg-primary text-white font-bold py-2 rounded-lg hover:bg-fuchsia-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm; 