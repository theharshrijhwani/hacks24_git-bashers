"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";

import ClientDashboard from "./pages/ClientDashboard";
import DesignerDashboard from "./pages/DesignerDashboard";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage.jsx";
import Body from "./components/Body.jsx";
// import OngoingProjects from "./pages/OngoingProjects.jsx";
import ProjectForm from "./pages/ProjectForm.jsx";
import OngoingProjects from "./pages/OngoingProjects.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/designer" element={<DesignerDashboard />} />
          <Route path="/add_project_form" element={<ProjectForm />} />
          {/* <Route path="/market_place" element={<Marketplace />} /> */}
          <Route
            path="/ongoing_projects_designer"
            element={<OngoingProjects />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
