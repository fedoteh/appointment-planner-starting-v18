import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input value={name} type="text" onChange={(e) => setName(e.target.value)} id="name" required />
        <label htmlFor="phone">Phone</label>
        <input value={phone} type="tel" onChange={(e) => setPhone(e.target.value)} id="phone" pattern="^\+?54?\s?(9)?\s?\d{2,4}\s?\d{3}\s?\d{2}\s?\d{2}$" required />
        <label htmlFor="email">Email</label>
        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} id="email" required />
        <button>Create</button>
      </form>
    </>
  );
};

