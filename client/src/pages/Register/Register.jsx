import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Backend registration will be added later
    navigate("/dashboard");
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>Create Account</h1>
        <p>Register to start using Human Safety Detection</p>

        <form onSubmit={handleRegister}>

          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <FaPhone className="icon" />
            <input
              type="tel"
              placeholder="Mobile Number"
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Create Password"
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Register
          </button>

        </form>

        <div className="register-links">

          <Link to="/">
            ⬅ Back to Home
          </Link>

          <p>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;