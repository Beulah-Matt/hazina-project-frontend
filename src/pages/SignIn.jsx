import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = ({setCurrentUser}) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          navigate("/")
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }e.target.reset();
    }) 
  };
   return (
    <div className='w-full h-screen'>
    <img className="hidden sm:block absolute w-full h-full object-cover"src='https://images.unsplash.com/photo-1624008915317-cb3ad69b16ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RvcmFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={handleChange} className="p-3 my-2 bg-gray-700 rounded" type="text" placeholder='name' autoComplete='name' name='name' value={formData.name}/>
                    <input onChange={handleChange} className="p-3 my-2 bg-gray-700 rounded" type="password"  placeholder="Password" autoComplete='current-password' name='password' value={formData.password}/>
                    <button className='bg-sky-800 py-3 my-6 rounded font-bold'>Sign In</button>
                    {/* {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null} */}
                    <p className='py-8'><span className='text-gray-600'>New to Hazina?  </span>
                    <Link to="/sign-up"> Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Signin