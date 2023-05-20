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
        <label htmlFor="name">Full Name</label>
        <input value={name} type="text" onChange={(e) => setName(e.target.value)} id="name" required autoComplete="name"/>
        <label htmlFor="phone">Phone (AR numbers only)</label>
        <input value={phone} placeholder="e.g., 54 911 3249 1172" type="tel" onChange={(e) => setPhone(e.target.value)} id="phone" pattern="^\+?54?\s?(9)?\s?\d{2,4}\s?\d{3}\s?\d{2}\s?\d{2}$" required autoComplete="tel" />
        <label htmlFor="email">Email</label>
        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} id="email" required autoComplete="email"/>
        <input type="submit" value="Add Contact" aria-label="Add Contact"/>
      </form>
    </>
  );
}
