import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Contacts from "./pages/Landing/Contacts/contacts";
import Tracking from "./pages/Landing/Tracking/Tracking";
import History from "./pages/Landing/History/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;