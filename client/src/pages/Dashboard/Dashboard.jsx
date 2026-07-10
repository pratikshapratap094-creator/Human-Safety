import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="header">
        <h2>Hello, User 👋</h2>
        <p>Your Safety, Our Priority</p>
      </div>

      <div className="location-card">
        <h3>📍 Current Location</h3>
        <p>Pune, Maharashtra</p>
      </div>

      <div className="sos-container">
        <button className="sos-btn">SOS</button>
      </div>

      <div className="grid">

        <div className="card" onClick={() => navigate("/contacts")}>
          <h2>👥</h2>
          <p>Contacts</p>
        </div>

        <div className="card" onClick={() => navigate("/tracking")}>
          <h2>📍</h2>
          <p>Tracking</p>
        </div>

        <div className="card"onClick={()=>navigate("/recording")}>
          <h2>🎤</h2>
          <p>Recording</p>
        </div>

        <div className="card" onClick={() => navigate("/history")}>
          <h2>📜</h2>
          <p>History</p>
        </div>
        

      </div>

      <div className="bottom-nav">
        <span className="active">🏠</span>
        <span onClick={() => navigate("/contacts")}>👥</span>
        <span onClick={() => navigate("/tracking")}>📍</span>
        <span onClick={() => navigate("/history")}>🕒</span>
        <span onClick={() => navigate("/profile")}>👤</span>
      </div>

    </div>
    
  );
}

export default Dashboard;