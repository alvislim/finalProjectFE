import React               from 'react';
import styles              from './styles.module.css';

function Footer() {
    return (

        <footer className={styles.sitefooter}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">buynowor.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative.</p>
            </div>
 
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className={styles.footerlinks}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Contribute</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className={styles.copyrighttext}>Copyright &copy; 2020 All Rights Reserved by 
           <a href="#"> Alvis</a>.
              </p>
            </div>
  
          </div>
        </div>
  </footer>
 
    )
}

export default Footer;