
import React, { useState } from 'react'
import { Link} from 'react-router-dom'

const Signup = ({setCurrentUser}) => {
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        password: "", 
        phone_no: "",
        photo_url: "",
        location: ""
    })

    //let navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    // Make a post request for signup here

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userCreds = {...formData};

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userCreds),
        }).then((res)=> {
            if (res.ok){
                res.json().then((user) => {
                    setCurrentUser(user);
                })
            }else{
                res.json().then((errors) => {
                    console.log(errors);
                })
            }
            e.target.reset()
        })

    }

    
  return (
    <div>
        <div className='w-full h-screen'>
            <img className="hidden sm:block absolute w-full h-full object-cover"src='https://images.unsplash.com/photo-1624008915317-cb3ad69b16ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RvcmFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={handleChange} name="name" className="p-3 my-2 bg-gray-700 rounded" type="text" placeholder="Name"/>
                            <input onChange={handleChange} name="email"  className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder='Email' autoComplete='email'/>
                            <input onChange={handleChange} name="password" className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete='current-password'/>
                            <input onChange={handleChange} name="phone_no" className="p-3 my-2 bg-gray-700 rounded" type="tel" placeholder="245712345678"/>
                            <input onChange={handleChange} name="photo_url" className="p-3 my-2 bg-gray-700 rounded" type="text" placeholder="Avatar Url"/>
                            <input onChange={handleChange} name="location" className="p-3 my-2 bg-gray-700 rounded" type="text" placeholder="Location"/>
                            <button className='bg-sky-800 py-3 my-6 rounded font-bold'>Sign Up</button>
                            <p className='py-8'><span className='text-blue-300'> Have an Account? </span>{"  "}
                            <Link to="/signin">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup