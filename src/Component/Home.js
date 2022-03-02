import React from "react";
import "./Home.css";
import Image5 from "./image/1.png";
import Image6 from "./image/81302302.png";
import Image7 from "./image/47735309.png";
import Image8 from "./image/07185213.png";
import Image9 from "./image/08903148.png";
import Image10 from "./image/5star.png";
import Image11 from "./image/97857858.png";
import Image12 from "./image/67673737.png";
import Image13 from "./image/49964180.png";
import Image14 from "./image/00562280.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const Home = () => {

  return (
    <div>
      <NavBar/>
        <div className="containerss">
        <div className="container-content">
          <h3>Handmade with love.</h3>
          <h1>Start designing your unique collar now.</h1>
          <div className="btn">
            <button>Martingale Collars</button>
            <button>Shop Dog Collars</button>
          </div>
        </div>
      </div>
      <div className="shop">
        <h2 className="shoptitle">
          Select your product, choose your colors <br />
          and engrave your message.
        </h2>
        <ul style={{listStyle:"none"}}>
          <li>
            <a href="#">
              <img src={Image5} alt="" />
            </a>
            <h3 className="shoplist">dog collars</h3>
          </li>
          <li>
            <a href="#">
              <img src={Image6} alt="" />
            </a>
            <h3 className="shoplist">Martingale</h3>
          </li>
          <li>
            <a href="#">
              <img src={Image7} alt="" />
            </a>
            <h3 className="shoplist">Leashes</h3>
          </li>
          <li>
            <a href="#">
              <img src={Image8} alt="" />
            </a>
            <h3 className="shoplist">pet tags</h3>
          </li>
        </ul>
      </div>
      <div className="designer-collar">
        <img src={Image9} alt="Designer Collar" />
        <div>
          <h2>Designer Collars</h2>
          <p>
            Don't feel like customizing? Our Designer Dog Collars are perfect if
            you’re looking for a collar that will help your dog stand out and
            get noticed. Show off your pup.
          </p>
          <button>Shop Designer Collar</button>
        </div>
      </div>
      <div className="guidedogcollar">
        <div className="center">
          <h2>The ultimate guide to dog collars</h2>
          <p>
            Not sure which collar is the right one for your dog? We’ve got you
            covered! Get our Ultimate Guide to Dog Collars, learn what you
            should look for and how you can choose the perfect collar for your
            dog!
          </p>
          <button>Ultimate Dog Collar Guide</button>
        </div>
      </div>
      <div className="description">
        <div>
          <img src={Image10} alt="" />
          <h2>Always top quality.</h2>
          <p>
            If It Barks truly has the best collars on the market. The quality of
            the product, the customer service, and the rest is just top notch. I
            have recommended them and had many friends purchase them already.
          </p>
        </div>
        <div>
          <img src={Image10} alt="" />
          <h2>Absolutely love it!</h2>
          <p>
            The martingale collar and matching leash are wonderful! I love that
            they are paper thin yet super durable. I can leave the collar on my
            baby boy after a walk because there's no bulky weight to annoy him.
          </p>
        </div>
        <div>
          <img src={Image10} alt="" />
          <h2>Best collar we've ever owned!</h2>
          <p>
            Outstanding! No corners cut here - the nylon, ribbon, hardware and
            stitching are all high quality components. Both of my dogs love
            their Martingale collars and they look great and feel solid while
            not being bulky or heavy.
          </p>
        </div>
      </div>
      <div className="pups">
        <h2>if it barks • Pups in the wild!</h2>
        <p>
          Don't feel like customizing? Our Designer Dog Collars are perfect if
          you’re looking for a collar that will help your dog stand out and get
          noticed. Show off your pup.
        </p>
      </div>
      <div className="dogs" style={{listStyle:"none"}}>
        <li>
          <a href="#">
            <img src={Image11} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image12} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image13} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Image14} alt="" />
          </a>
        </li>
      </div>
      <div className="shopdogs">
        <button>Shop All Dog Collars</button>
      </div>
      <Footer/>
          </div>
  );
};

export default Home;
