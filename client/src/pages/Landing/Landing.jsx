import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaMicrophone,
  FaPhoneAlt,
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";


export default function Landing() {
  return (
    <div className="min-h-screen bg-[#07162D] flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-3xl bg-[#08152E] text-white shadow-2xl p-8">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mt-5 leading-tight">
          HUMAN SAFETY
          <br />
          DETECTION
        </h1>

        <p className="text-center text-red-500 font-semibold mt-2">
          Your Safety, Our Priority
        </p>

        <p className="text-center text-gray-300 text-sm mt-4">
          A smart safety application that helps you in emergencies by sharing
          your live location and notifying your emergency contacts.
        </p>

        {/* Features */}
        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-red-500" />
            <span>One Tap SOS</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Live Location Tracking</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMicrophone className="text-red-500" />
            <span>Audio Recording</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-red-500" />
            <span>Emergency Contacts</span>
          </div>

        </div>

       

        {/* Buttons */}
        <div className="mt-8 space-y-4">

          <Link
            to="/login"
            className="block w-full text-center bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="block w-full text-center border border-white py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Register
          </Link>

        </div>

      </div>
    </div>
  );
}