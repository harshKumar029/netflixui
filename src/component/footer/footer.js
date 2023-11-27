import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="netflix-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h4>Questions? Contact us.</h4>
            <ul>
              <li>FAQ</li>
              <li>Help Center</li>
              <li>Account</li>
              <li>Media Center</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Get The App</h4>
            <ul>
              <li>Download Now</li>
              <li>Available on your phone and tablet</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Terms of Use</h4>
            <ul>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Legal Notices</li>
            </ul>
          </div>
        </div>
        <div className="footer-row">
          <p>Netflix, Inc. &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


