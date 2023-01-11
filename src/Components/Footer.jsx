import React from 'react'
import "./Footer.css"

const Footer =() =>{
    return (
        <div className="main-footer">
        <div className="container">
         <div className="row">
         {/* column1 */}
         <div className="col">
         <h4>My Account</h4>
         <ul className="list-unstyled">
             <li>Profile</li>
             <li>Location</li>
             <li>Sign Up</li>
         </ul>
         </div>
         {/* column2 */}
         <div className="col">
         <h4>Company</h4>
         <ul className="list-unstyled">
             <li>About</li>
             <li>Product</li>
             <li>Contact Us</li>
         </ul>
         </div>
         {/* column3 */}
         <div className="col">
         <h4>FAQs</h4>
         <ul className="list-unstyled">
             <li>Terms of Services</li>
             <li>Privacy and Policy</li>
             <li>Newsletter</li>
         </ul>
         </div>
         </div>
         <hr />
         <div className="row">
         <p className="col-sm">
          &copy;{new Date().getFullYear()} Hazina |All right reserved | terms of service | privacy
         </p>
         </div>
        </div>  
    </div> 
    )
}
export default Footer