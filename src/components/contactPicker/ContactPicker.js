import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>      
      <select onChange={onChange} value={value} name={name}>
        <option key="default" value="" selected>No Contact Selected</option>
        {contacts.map(contact => <option key={contact.name} value={contact.name}>{contact.name}</option>)}
      </select>
    </>
  );
};
