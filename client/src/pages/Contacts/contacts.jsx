import "./contacts.css";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const navigate = useNavigate();

  const contacts = [
    {
      name: "Mom",
      relation: "Mother",
      phone: "9876543210",
    },
    {
      name: "Best Friend",
      relation: "Friend",
      phone: "9876543211",
    },
    {
      name: "Brother",
      relation: "Brother",
      phone: "9876543212",
    },
    {
      name: "Office",
      relation: "Colleague",
      phone: "9876543213",
    },
  ];

  return (
    <div className="contacts-page">

      <div className="contacts-header">
        <h2>Emergency Contacts</h2>

        <button className="add-btn">
          + Add Contact
        </button>
      </div>

      <div className="contacts-list">

        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>

            <div className="avatar">
              {contact.name.charAt(0)}
            </div>

            <div className="contact-info">
              <h3>{contact.name}</h3>
              <p>{contact.relation}</p>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <button title="Call">📞</button>
              <button title="Edit">✏️</button>
              <button title="Delete">🗑️</button>
            </div>

          </div>
        ))}

      </div>

      <div className="bottom-nav">

        <span onClick={() => navigate("/dashboard")}>
          🏠
        </span>

        <span className="active">
          👥
        </span>

        <span onClick={() => navigate("/tracking")}>
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

export default Contacts;