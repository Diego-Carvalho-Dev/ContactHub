import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoute = ({ path, element }) => {
  const { client } = useContext(AuthContext);

  const preventNavigation = (e) => {
    e.preventDefault();
  };

  if (!client) {
    return <Navigate to="/" />;
  }

  return (
    <Route
      path={path}
      element={element}
      onEnter={preventNavigation} // Prevent navigation by intercepting the route change
      onLeave={preventNavigation}
    />
  );
};

export default ProtectedRoute;
