
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Catalogue from "./pages/Catalogue";
import Footer from "./Components/Footer";
import Contact from "./pages/Contact";

function App() {

    const data = [
        {
          "id": 1,
          "name": "Storage Bay",
          "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
          "price": "434",
          "description": "this is the description"
        },
        {
          "id": 2,
          "name": "Storage Bay",
          "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
          "price": "434",
          "description": "this is the description"
        },
        {
          "id": 3,
          "name": "Storage Bay",
          "image": "https://ustoreit.ie/wp-content/uploads/2021/11/business-storage.jpg",
          "price": "434",
          "description": "this is the description"
        }
      ]
      // const [data, setData] = useState[demoData]
    

    console.log(data)

    return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/catalogue' element={<Catalogue data={data} />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;