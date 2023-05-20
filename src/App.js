import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [contacts, setContacts] = useState([]);

  function addContact(name, phone, email) {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email
      }
    ])
  };

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointmentName, contact, date, time) => {
    const newAppointment = { appointmentName, contact, date, time };
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
