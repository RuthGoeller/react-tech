import React from "react";
import "./Footer.css";

function Footer() {
  return (
   <>
  <div className="footer">
    <div className="row main">
      <div className="col site-info">
        <div className="footer-disclaimer">
          <div className="logo">
            <img src="https://techsur.solutions/wp-content/uploads/2021/01/Techsur-Logo.png" alt="" />
          </div>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="footer-links" id="footer">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>Work Here</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="place">
        
          <div className="address">
            <p><strong>Border Town</strong></p>
            <p>9999 St Name of the Street</p>
            <p>12345-999BA</p>
            <p>+00 111 1234-5678</p>
            <p>emailname@emaildomain.com</p>
          </div>
        </div>
        <div className="place">
        
          <div className="address">
            <p><strong>Central City</strong></p>
            <p>9999 St Name of the Street</p>
            <p>12345-999BA</p>
            <p>+00 111 1234-5678</p>
            <p>emailname@emaildomain.com</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="contactform">
          <p>Use the form bellow to&nbsp;contact&nbsp;us</p>
        
        </div>
      </div>
    </div>
    <div className="row">
      <div className="social-icons">
        <ul>
          <li><i className="fab fa-facebook"></i></li>
          <li><i className="fab fa-twitter"></i></li>
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-linkedin"></i></li>
          <li><i className="fab fa-youtube"></i></li>
        </ul>
      </div>
    </div>

  </div>
   </>
  );
}

export default Footer;