import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#07162D] flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-[#08152E] rounded-3xl shadow-2xl p-8 text-white">

        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mt-2">
          Login to continue
        </p>

        {/* Email */}
        <div className="mt-8">
          <label className="text-sm">Email</label>

          <div className="flex items-center bg-[#13233F] rounded-xl px-4 py-3 mt-2">
            <FaEnvelope className="text-red-500 mr-3" />

            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="text-sm">Password</label>

          <div className="flex items-center bg-[#13233F] rounded-xl px-4 py-3 mt-2">
            <FaLock className="text-red-500 mr-3" />

            <input
              type="password"
              placeholder="Enter Password"
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Login Button */}
        <Link
  to="/dashboard"
  className="block w-full text-center mt-8 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition"
>
  Login
</Link>

        {/* Register */}
        <p className="text-center mt-6 text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-500 font-semibold"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}