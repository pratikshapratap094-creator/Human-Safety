import "./Tracking.css";
import { useNavigate } from "react-router-dom";

function Tracking() {
  const navigate = useNavigate();

  return (
    <div className="tracking-page">

      <div className="tracking-header">
        <h2>📍 Live Tracking</h2>
        <p>Your location is being shared with your emergency contacts.</p>
      </div>

      <div className="map-card">
        <div className="map-placeholder">
          🗺️ Google Map
        </div>
      </div>

      <div className="location-card">
        <h3>Current Location</h3>
        <p>📍 Pune, Maharashtra</p>

        <div className="status">
          <span className="status-dot"></span>
          Live Tracking Active
        </div>
      </div>

      <button className="stop-btn">
        Stop Tracking
      </button>

      <div className="bottom-nav">

        <span onClick={() => navigate("/dashboard")}>
          🏠
        </span>

        <span onClick={() => navigate("/contacts")}>
          👥
        </span>

        <span className="active">
          📍
        </span>

        <span onClick={() => navigate("/history")}>
          🕒
        </span>

        <span onClick={() => navigate("/profile")}>
          👤
        </span>

      </div>

    </div>
  );
}

export default Tracking;