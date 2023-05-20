import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} id="title" required/>
        <label htmlFor="date">Date</label>
        <input value={date} type="date" onChange={(e) => setDate(e.target.value)} id="date" required min={getTodayString()}/>
        <label htmlFor="time">Time</label>
        <input value={time} type="time" onChange={(e) => setTime(e.target.value)} id="time" required/>
        <label htmlFor="ContactPicker">Pick a Contact</label>
        <ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)} value={contact} name="contact" id="ContactPicker" />
        <input type="submit" value="Add Appointment" aria-label="Add Appointment"/>
      </form>
    </>
  );
};
