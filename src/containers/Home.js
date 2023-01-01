import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Appointment Planner</h1>
      <div>
        <Link to="about">Contacts </Link>
      </div>
      <div>
        <Link to="contact"> Appointments</Link>
      </div>
    </div>
  );
}
