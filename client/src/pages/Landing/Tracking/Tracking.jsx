import "./Tracking.css";

function Tracking() {
  return (
    <div className="tracking-page">

      <div className="tracking-header">
        <h2>Live Tracking</h2>
      </div>

      <div className="map-card">
        <div className="map-placeholder">
          📍 Google Map
        </div>
      </div>

      <div className="status-card">
        <h3>Current Location</h3>
        <p>📍 Pune, Maharashtra</p>

        <h3>Status</h3>
        <p className="live">🟢 Live Tracking Active</p>
      </div>

      <button className="stop-btn">
        Stop Tracking
      </button>

      <div className="bottom-nav">
        <span>🏠 Home</span>
        <span>👥 Contacts</span>
        <span className="active">📍 Tracking</span>
        <span>🕒 History</span>
        <span>👤 Profile</span>
      </div>

    </div>
  );
}

export default Tracking;