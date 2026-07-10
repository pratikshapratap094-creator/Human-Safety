import "./Contacts.css";

function Contacts() {
  const contacts = [
    {
      name: "Mom",
      relation: "Mother",
      phone: "9876543210",
      color: "#8e44ad",
    },
    {
      name: "Best Friend",
      relation: "Friend",
      phone: "9876543211",
      color: "#3498db",
    },
    {
      name: "Brother",
      relation: "Brother",
      phone: "9876543212",
      color: "#27ae60",
    },
    {
      name: "Office",
      relation: "Colleague",
      phone: "9876543213",
      color: "#f39c12",
    },
  ];

  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <h2>Emergency Contacts</h2>
        <button className="add-btn">+ Add</button>
      </div>

      {contacts.map((contact, index) => (
        <div className="contact-card" key={index}>
          <div
            className="avatar"
            style={{ background: contact.color }}
          >
            {contact.name[0]}
          </div>

          <div className="contact-info">
            <h3>{contact.name}</h3>
            <p>{contact.relation}</p>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <button>📞</button>
            <button>✏️</button>
            <button>🗑️</button>
          </div>
        </div>
      ))}

      <div className="bottom-nav">
        <span>🏠 Home</span>
        <span className="active">👥 Contacts</span>
        <span>📍 Tracking</span>
        <span>🕒 History</span>
        <span>👤 Profile</span>
      </div>
    </div>
  );
}

export default Contacts;