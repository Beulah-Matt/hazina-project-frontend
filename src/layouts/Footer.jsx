import React from 'react'
import "../components/Footer.css"
import {FaFacebook,  FaTwitter, FaInstagram} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                        <h4 className="heading">My Account</h4>
                        <ul className="list">
                        <li><a href="/sign-in">Login</a></li>
                        <li><a href="/sign-up">Signup</a></li>
                        <li><a href="/">Back To Top</a></li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h4 className="heading">Company</h4>
                        <ul className="list">
                        <li><a href="/about">About</a></li>
                            <li><a href="/catalogue">Products</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <div className="col">
                        <h4 className="heading">Social Media</h4>
                        <ul className="list">
                            <li className="icon"><a href="https://twitter.com/"><FaTwitter size={25}/></a></li>
                            <li className="icon"><a href="https://www.facebook.com/"><FaFacebook size={25}/></a></li>
                            <li className="icon"><a href="https://www.instagram.com/"><FaInstagram size={25}/></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Hazina |All right reserved | Terms of service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer