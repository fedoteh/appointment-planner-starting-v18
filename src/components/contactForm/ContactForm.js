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
        <label htmlFor="phone">Phone</label>
        <input value={phone} type="tel" onChange={(e) => setPhone(e.target.value)} id="phone" required autoComplete="tel" />
        <label htmlFor="email">Email</label>
        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} id="email" required autoComplete="email"/>
        <input type="submit" value="Add Contact" aria-label="Add Contact"/>
      </form>
    </>
  );
}
