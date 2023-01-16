import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4 className="heading">My Account</h4>
                        <ul className="list">
                        <li><a href="/sign-in">Login</a></li>
                        <li><a href="/sign-up">Signup</a></li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h4 className="heading">Company</h4>
                        <ul className="list">
                        <li><a href="/about">About</a></li>
                            <li><a href="/catalogue">Products</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h4 className="heading">FAQs</h4>
                        <ul className="list">
                            <li>Terms of Services</li>
                            <li>Privacy and Policy</li>
                            <div class="socialmedia">
                                <li>Subscribe to our newsletter</li>
                            </div>
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