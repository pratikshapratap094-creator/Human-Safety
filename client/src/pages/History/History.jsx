import "./History.css";
import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();

  const historyData = [
    {
      id: 1,
      type: "🚨 SOS Alert",
      date: "10 Jul 2026",
      time: "10:30 AM",
      status: "Completed",
    },
    {
      id: 2,
      type: "📞 Emergency Call",
      date: "09 Jul 2026",
      time: "08:15 PM",
      status: "Completed",
    },
    {
      id: 3,
      type: "🎤 Audio Recording",
      date: "09 Jul 2026",
      time: "04:45 PM",
      status: "Completed",
    },
    {
      id: 4,
      type: "💬 Emergency Message",
      date: "08 Jul 2026",
      time: "01:20 PM",
      status: "Completed",
    },
  ];

  return (
    <div className="history-page">

      <div className="history-header">
        <h2>📜 Emergency History</h2>
        <p>View all emergency activities</p>
      </div>

      <div className="history-list">

        {historyData.map((item) => (
          <div className="history-card" key={item.id}>

            <div className="history-info">
              <h3>{item.type}</h3>
              <p>{item.date}</p>
              <span>{item.time}</span>
            </div>

            <div className="status">
              {item.status}
            </div>

          </div>
        ))}

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

        <span className="active">
          🕒
        </span>

        <span onClick={() => navigate("/profile")}>
          👤
        </span>

      </div>

    </div>
  );
}

export default History;