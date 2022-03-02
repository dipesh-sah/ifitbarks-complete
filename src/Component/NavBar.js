import React from "react";
import "./Home.css";
import Image4 from "./image/cart-icon.png";
import Image1 from "./image/iib-logo.png";
import Image2 from "./image/search-icons.png";
import Image3 from "./image/login-icon.png";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Home from "./Home";
import Leashes from "./Leashes";
import Martingale from "./Martingale";
import DogCollars from "./DogCollars";
import Tags from "./Tags";

const NavBar = () => {
  return (
    <div>
      <header >
        {/* Header Max With   */}
        <div className="max-width-container">
          <nav>
            {/* Header Logo  */}
            <div className="header-logo">
              <Link to="/">{Home}
                <img src={Image1} alt="header-logo" />
              </Link>
            </div>
            {/* Header navagation bar  */}
            <ul className="navagation">
              <Link to="/dogcollar"  >
                {DogCollars}
                <p
                  style={{
                    textTransform: "lowercase",
                    color: "#000",
                    textAlign: "right",
                    paddingTop: "15px",
                  }}
                >
                  dog collars
                </p>
              </Link>
              <Link to="/martingale"  >
                {Martingale}
                <p
                  style={{
                    textTransform: "lowercase",
                    color: "#000",
                    textAlign: "right",
                    paddingTop: "15px",
                  }}
                >
                  Martingale collar
                </p>
              </Link>
              <Link to="/leashes"  >
                {Leashes}
                <p
                  style={{
                    textTransform: "lowercase",
                    color: "#000",
                    textAlign: "right",
                    paddingTop: "15px",
                  }}
                >
                  harness
                </p>
              </Link>
              <Link to="/leashes"  >
                {Leashes}
                <p
                  style={{
                    textTransform: "lowercase",
                    color: "#000",
                    textAlign: "right",
                    paddingTop: "15px",
                  }}
                >
                  leashes
                </p>
              </Link>
              <Link to="/pettags"  >
                {Tags}
                <p
                  style={{
                    textTransform: "lowercase",
                    color: "#000",
                    textAlign: "right",
                    paddingTop: "15px",
                  }}
                >
                  pet tags
                </p>
              </Link>
              <Link to="/contact"  >
                {Contact}
                <p
                  style={{
                    textTransform: "lowercase",
                    color: "#000",
                    textAlign: "right",
                    paddingTop: "15px",
                  }}
                >
                  Contact us
                </p>
              </Link>
            </ul>
          </nav>
          {/* Navagatio User section  */}
          <div className="nav-user">
            <ul className="side-nav" style={{listStyle:"none"}}>
              <a href="#">
                <li className="serch-logo">
                  <img src={Image2} alt="" />
                </li>
              </a>
              <a href="#">
                <li className="login-logo">
                  <img src={Image3} alt="" />
                </li>
              </a>
              <a href="#">
                <li className="cart-logo">
                  <img src={Image4} alt="" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
