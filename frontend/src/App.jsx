"use client";
import React from "react";
import ClientDashboard from "./pages/ClientDashboard";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import DesignerDashboard from "./pages/DesignerDashboard";
import Sidebar from "./components/SideMenu/SideMenu";
import ApexChart from "./components/Chart";

/** */
const App = () => {
  return (
    <>

    {/* <Sidebar /> */}
    {/* <ApexChart /> */}
      <Navbar />
      <DesignerDashboard/>
      {/* <ClientDashboard /> */}
      {/* <LandingPage /> */}
    </>
  )
};

export default App;
