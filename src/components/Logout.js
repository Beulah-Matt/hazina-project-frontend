import React from 'react'
import {Link} from 'react-router-dom'

const Logout = ({loggedIn, setLoggedIn}) => {
    const handleLogout = () => {
        fetch("https://hazina-backend.up.railway.app/logout", {method: "DELETE"})
        .then(res => {
            if (res.ok){
                setLoggedIn(null)
            }
        })
    }
  return (
    <div className='w-full h-screen'>
        <header className='max-w-[320px] mx-auto py-16'>
        { loggedIn? (
            <div>
                <p>Welcome, {loggedIn.name}</p>
                <button className='bg-red-600 py-3 my-6 rounded font-bold' onClick={handleLogout}>Logout</button>
            </div>
        ):
        (
            <Link to={'/sign-in'}>Click Here to Signin </Link>
        )

        }
        </header>
    </div>
  )
}

export default Logout