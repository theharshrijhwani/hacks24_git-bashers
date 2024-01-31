"use client";
import React from "react";
import ClientDashboard from "./pages/ClientDashboard";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import DesignerDashboard from "./pages/DesignerDashboard";
import Sidebar from "./components/SideMenu/SideMenu";
import ApexChart from "./components/Chart";
import ReactDOM from "react-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage.jsx"
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx"
import Footer from "./components/Footer.jsx"
const App = () => {
  return <div>
    {/* <LoginPage/> */}
    {/* <RegistrationForm/> */}
     <Header/>
     <Body/>
     <Footer/>
  </div>;
};

export default App;
