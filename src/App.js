import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home"
import { AppointmentsPage } from "./containers/AppointmentsPage";
import { ContactsPage } from "./containers/ContactsPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<ContactsPage />} />
        <Route path="contact" element={<AppointmentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
