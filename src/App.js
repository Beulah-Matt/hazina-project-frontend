
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Catalogue from "./pages/Catalogue";
import Footer from "./Components/Footer";
import Contact from "./pages/Contact";
import About from "./Components/About";
import { useLoggedInContext } from "./context/LoginContext";

function App() {

    const {loggedIn, setLoggedIn} = useLoggedInContext()
    
    const token = localStorage.getItem("jwt");

    useEffect(()=> {
      fetch("https://hazina-backend.up.railway.app/me", {
        headers: {Authorization: `Bearer ${token}`}
      }).then((res)=>{
        if(res.ok){
          res.json().then((currentUser)=>{
            setLoggedIn(() => ({user: {...currentUser}}))
            fetch("https://hazina-backend.up.railway.app/customer_storages", {
              headers: {Authorization: `Bearer ${token}`}
            }).then((res) => res.json())
            .then((storages) => {
              setLoggedIn((prevData) => ({user: {...prevData.user, storages: storages}}))
            })
          })
        }
      })
    }, [])

    return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/catalogue' element={<Catalogue data={data} />} /> */}
          <Route path='/sign-up' element={<SignUp setLoggedIn = {setLoggedIn}/>} />
          <Route path='/sign-in' element={<SignIn setLoggedIn={setLoggedIn}/>} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;