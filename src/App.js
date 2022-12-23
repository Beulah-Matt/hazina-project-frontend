import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });
  }, []);


  return (
    <div>
      <Routes>
      {
        !currentUser?
        <>
        <Route path="/login" element={<Signin setCurrentUser={setCurrentUser}/>}></Route>
        </>
        :
        <>
        </>
      }
  <Route path="*" element={<Signup setCurrentUser = {setCurrentUser}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
