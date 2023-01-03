import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { AppointmentsPage } from "./containers/AppointmentsPage";
import { ContactsPage } from "./containers/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phone, email) => {
    setContacts([...contacts, { name: name, phone: phone, email: email }])};
   

  const addAppointment = (title, contact, date, time) => {
    setAppointments([...appointments, { title: title, contact: contact, date: date, time: time }])};
    

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path="contact"
          element={
            <AppointmentsPage
            contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
