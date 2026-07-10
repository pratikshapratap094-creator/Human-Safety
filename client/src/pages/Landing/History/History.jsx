import "./History.css";

function History() {
  const historyData = [
    {
      id: 1,
      type: "SOS Alert",
      date: "09 Jul 2026",
      time: "10:30 AM",
      status: "Completed",
    },
    {
      id: 2,
      type: "Emergency Message",
      date: "08 Jul 2026",
      time: "07:45 PM",
      status: "Completed",
    },
    {
      id: 3,
      type: "Audio Recording",
      date: "08 Jul 2026",
      time: "04:20 PM",
      status: "Completed",
    },
    {
      id: 4,
      type: "Emergency Call",
      date: "07 Jul 2026",
      time: "09:15 AM",
      status: "Completed",
    },
  ];

  return (
    <div className="history-page">

      <div className="history-header">
        <h2>Emergency History</h2>
      </div>

      <div className="history-tabs">
        <button className="active">All</button>
        <button>SOS</button>
        <button>Messages</button>
        <button>Audio</button>
        <button>Calls</button>
      </div>

      <div className="history-list">
        {historyData.map((item) => (
          <div className="history-card" key={item.id}>
            <div className="history-info">
              <h3>{item.type}</h3>
              <p>{item.date}</p>
              <span>{item.time}</span>
            </div>

            <div className="status completed">
              {item.status}
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-nav">
        <span>🏠 Home</span>
        <span>👥 Contacts</span>
        <span>📍 Tracking</span>
        <span className="active">🕒 History</span>
        <span>👤 Profile</span>
      </div>

    </div>
  );
}

export default History;