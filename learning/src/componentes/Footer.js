import React from 'react';
import '../stylesheets/Footer.css';
import fb from '.../imagenes/facebook.png'
import twitter from '.../imagenes/x.png'
import linkedin from '.../imagenes/linkedin.png'
import insta from '.../imagenes/instagram.png'



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='sb_footer section_padding'>
          <div className='sb_footer-links'>
            <div className='sb_footer-links-div'>
              <h4>For Business</h4>
              <a href="/employer">
                <p>Employer</p>
              </a>
              <a href="/healthplan">
                <p>Health Plan</p>
              </a>
              <a href="/individual">
                <p>Individual</p>
              </a>
            </div>
            <div className='sb_gooter-links_div'>
            <h4>Resources</h4>
              <a href="/resources">
                <p>Reousrce center</p>
              </a>
              <a href="/resources">
                <p>Testimonials</p>
              </a>
              <a href="/resources">
                <p>STV</p>
              </a>
            </div>
            <div className='sb_footer-links_div'>
              <h4>Partners</h4>
              <a href="/employer">
                <p>Swing Tech</p>
              </a>              
            </div>
            <div className='sb_footer-link-div'>
              <h4>Company</h4>
              <a href="/about">
                <p>About</p>
              </a>
              <a href="/press">
                <p>Press</p>
              </a>
              <a href="/career">
                <p>Career</p>
              </a>   
              <a href="/contact">
                <p>Contact</p>
              </a>              
            </div>
            <div className='sb_footer_links_div'>
              <h4>Coming soon on</h4>
              <div className='socialmedia'>
                <p><img src={fb} alt=''/></p>
                <p><img src={twitter} alt=''/></p>
                <p><img src={linkedin} alt=''/></p>
                <p><img src={insta} alt=''/></p>
              </div>
            </div>
          </div>

      <hr></hr>

      <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
          <p>
            @{new Date().getFullYear()} CodeInn. All right reserved.
          </p>
        </div>
        <div className='sb_footer-below-links'>
          <a href="/terms"><p>Terms & Conditions</p></a> 
          <a href="/privacy"><p>Privacy</p></a> 
          <a href="/security"><p>Security</p></a> 
          <a href="/cookie"><p>Cookie Declaration</p></a> 
        </div>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
