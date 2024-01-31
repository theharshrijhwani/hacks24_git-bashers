import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using the loginData
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    axios
      .post("http://localhost:8080/auth/signin", data)
      .then((res) => {
        console.log(JSON.stringify(res));
        if (res.data.message === "success") {
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Login Data Submitted:", loginData);
    const newToken = localStorage.getItem("token");
    console.log(newToken);
    const finalToken = newToken.replace("Bearer ", "");
    console.log(finalToken);
    const info = jwtDecode(finalToken);
    console.log("----------------------------------");
    console.log(info);

    localStorage.setItem("name", info.name);
    localStorage.setItem("email", info.email);
    localStorage.setItem("type", info.type);
    localStorage.setItem("id", info.id);
  };

  const onClickHandler = () => {
    const type = localStorage.getItem("type").toLowerCase();
    window.location.href = `http://localhost:5173/${type}`;
  };

  return (
    <div className="container items-center justify-center flex flex-col h-[100vh]">
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-[30vw]">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={onClickHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
