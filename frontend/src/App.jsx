import React from "react";
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
