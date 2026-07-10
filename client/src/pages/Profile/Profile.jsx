import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div className="profile-avatar">
          👤
        </div>

        <h2>John Doe</h2>
        <p>john@example.com</p>
      </div>

      <div className="profile-card">

        <div className="profile-item">
          <span>📱 Mobile Number</span>
          <p>+91 9876543210</p>
        </div>

        <div className="profile-item">
          <span>📍 Address</span>
          <p>Pune, Maharashtra</p>
        </div>

        <div className="profile-item">
          <span>🚨 Emergency Contacts</span>
          <p>4 Contacts Added</p>
        </div>

        <div className="profile-item">
          <span>🔔 Notifications</span>
          <p>Enabled</p>
        </div>

        <div className="profile-item">
          <span>🔒 Change Password</span>
        </div>

        <div className="profile-item">
          <span>⚙️ Settings</span>
        </div>

        <button
          className="logout-btn"
          onClick={() => navigate("/")}
        >
          Logout
        </button>

      </div>

      <div className="bottom-nav">

        <span onClick={() => navigate("/dashboard")}>
          🏠
        </span>

        <span onClick={() => navigate("/contacts")}>
          👥
        </span>

        <span onClick={() => navigate("/tracking")}>
          📍
        </span>

        <span onClick={() => navigate("/history")}>
          🕒
        </span>

        <span className="active">
          👤
        </span>

      </div>

    </div>
  );
}

export default Profile;