import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contacts from "./pages/Contacts/contacts";
import Tracking from "./pages/Tracking/Tracking";
import History from "./pages/History/History";
import Profile from "./pages/Profile/Profile";
import Recording from "./pages/Recording/Recording";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recording" element={<Recording />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;