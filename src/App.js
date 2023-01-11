import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Stats from "./Components/Stats";
import About from "./Components/About";
import CustomerDB from "./Components/customerDashboard/CustomerDB";



const App = () => {
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3000/users").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //       });
  //     }
  //   });
  // }, []);
  const token = localStorage.getItem("jwt");
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          // setIsAuthenticated(true);
        });
      }
    });
  }, [token]);


  return (
    <div>
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <CustomerDB />
      <Routes>
        {!currentUser ? (
          <>
            <Route
              path="/login"
              element={<Signin setCurrentUser={setCurrentUser} />}
            ></Route>
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </>
        )}
        <Route
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
