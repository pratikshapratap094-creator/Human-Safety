import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Backend authentication will be added later
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>
          Login to continue using
          <br />
          Human Safety Detection
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <FaEnvelope className="icon" />

            <input
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />

            <input
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="login-links">

          <Link to="/">
            ⬅ Back to Home
          </Link>

          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;