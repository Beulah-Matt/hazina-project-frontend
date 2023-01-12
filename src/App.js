import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer"


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
          path="*"
          element={<Signup setCurrentUser={setCurrentUser} />}
        ></Route>
      </Routes>
      <ContactSection/>
        <Footer/>
    </div>
  );
};

export default App;
