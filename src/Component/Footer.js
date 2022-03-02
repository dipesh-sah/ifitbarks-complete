import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Image15 from "./image/facebook-icon.png";
import Image16 from "./image/pinterest-icon.png";
import Image17 from "./image/instagram-icon.png";
import Image18 from "./image/youtube-icon.png";
import Image19 from "./image/arrow.png";
import Image20 from "./image/twitter-icon.png";
import Contact from "./Contact";
import About from "./About";
import DogCollars from "./DogCollars";
import Martingale from "./Martingale";
import Leashes from "./Leashes";
import Tags from "./Tags";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="fcontainer">
          <div className="follow">
            <h2>Follow us!</h2>
            <p>
              Exclusive offers, a heads up on new things, and sightings of pups
              in the wild. #ifitbarks
            </p>
            <a href>
              <img src={Image15} alt="" />
            </a>
            <a href>
              <img src={Image20} alt="" />
            </a>
            <a href>
              <img src={Image16} alt="" />
            </a>
            <a href>
              <img src={Image17} alt="" />
            </a>
            <a href>
              <img src={Image18} alt="" />
            </a>
          </div>
          <div className="help-footer">
            <h2>Help</h2>
            <Link to="/contact">{Contact}Contact</Link>
            <b />
            <br></br>
            <Link to="/shippinreturns">{Contact}Shipping Returns</Link><br></br>
            <Link to="/shippinreturns">{Contact}dipesh.bay20@gmail.com</Link><br></br>
            <Link to="/shippinreturns">{Contact}+977-9824285568</Link>
          </div>
          <div className="shop-footer">
            <h2>Shop</h2>
            <Link to="/dogcollar">{DogCollars}dog collars </Link> <br/>
            <Link to="/martingale">{Martingale}martingale </Link><br></br>
            <Link to ='/leashes'>{Leashes} Leashes </Link><br></br>
            <Link to ="/pettags">{Tags} tags </Link>
            <a href="#">
              <p>Gift Card</p>
            </a>
          </div>
          <div className="resources-footer">
            <h2>Resources</h2>
            <Link to="/about">{About}About</Link><br/>
            <Link to = "/dogcollar">{DogCollars} Dog Collar Guide</Link><br/>
            <Link to ="/martingale">{Martingale} Martingale Guide</Link>
            <a href="#">
              <p>Pet Id Guide</p>
            </a>
            <a href="#">
              <p>Dog Collar Sizzing</p>
            </a>
          </div>
          <div className="newletter-signup">
            <h2>Newsletter Signup</h2>
            <p>Be the first to know when If It Barks releases new products!</p>
            <input type="text" placeholder="Your Email Address" />
            <a href="#">
              <img src={Image19} alt="" typeof="submit"/>
            </a>
          </div>
        </div>
        <div className="copyright">
          © 2022 If It Barks • All rights reserved • <a href="#">Terms</a> •
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
