import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { ContactProvider } from "../contexts/ContactContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ContactProvider>
            <Dashboard />
          </ContactProvider>
        }
      />
      <Route
        path="/profile"
        element={
          <ContactProvider>
            <Profile />
          </ContactProvider>
        }
      />
    </Routes>
  );
};
