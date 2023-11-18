import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import Login from "../src/pages/Login/Login.jsx";
import Users from "./pages/Admin/Users.jsx";
import Cadets from "./pages/Cadets/Cadets.jsx";
import Cadet from "./pages/Cadets/Cadet.jsx";
import GenerateData from "./pages/Cadets/GenerateData.jsx";
import AddCadet from "./pages/Cadets/AddCadet.jsx";
import Settings from "./pages/Admin/Settings.jsx";
import TermsAndConditions from "./pages/Login/TermsAndConditions";
import ProtectedRoute from "./helpers/ProtectedRoute.jsx";
import "./scss/styles.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="termnsandconditions" element={<TermsAndConditions />} />
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="cadets" element={<Cadets />} />
            <Route path="cadets/:id" element={<Cadet />} />
            <Route path="processData" element={<GenerateData />} />
            <Route path="manageUsers" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            {/* <Route path="manageInputs" element={<GenerateInputs />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
