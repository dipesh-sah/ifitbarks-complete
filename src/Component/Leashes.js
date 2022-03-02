import React from "react";
import Img1 from "./image/a1.jpg";
import Img2 from "./image/a2.jpg";
import Img3 from "./image/a3.jpg";
import Img4 from "./image/a4.jpg";
import Img5 from "./image/a5.jpg";
import Img6 from "./image/a6.jpg";
import Img7 from "./image/a7.jpg";
import NavBar from './NavBar'
import Footer from "./Footer";
import './Leashes.css'
const Leashes = () => {
  return (
    <div>
        <NavBar/>
      <div>
        <div style={{ width: "1234px", margin: "0 auto" }}>
          <div className="leashestitle">
            <h2>Dog Leashes</h2>
            <p>
              Dog Leashes need to be strong, durable, and comfortable to hold.
              But they should also be attractive, and that’s exactly what our
              leashes are. All of our Dog Leads are made in the USA by hand to
              the highest standards, and we have a huge variety to choose from,
              including reflective and glow in dark leads. So start browsing and
              find your new leash here today.
            </p>
          </div>
          <div className="leashesimg">
            <a href="#">
              <img src={Img1} alt="#" /> striped dog leashes
            </a>
            <a href="#">
              <img src={Img2} alt="#" />
              embroidered dog leashes
            </a>
            <a href="#">
              <img src={Img3} alt="#" />
              rope dog leashes
            </a>
            <a href="#">
              <img src={Img4} alt="#" />
              waterproof dog leashes
            </a>
            <a href="#">
              <img src={Img5} alt="#" />
              reflective dog leashes
            </a>
            <a href="#">
              <img src={Img6} alt="#" />
              designer dog leashes
            </a>
            <a href="#">
              <img src={Img7} alt="#" />
              hemp dog leashes
            </a>
          </div>
        </div>
        <div className="leashescontainer">
          <div className="leashescontent">
            <div>
              <h2>Beautiful leashes for every style</h2>
              <p>
                Choosing a new dog lead is a personal decision, and there are
                many factors to consider—not least your dog’s personality. We
                think you’ll find we’ve got you covered. We have a huge range of
                Dog Leads at If It Barks, all of which are strong, durable,
                stylish, and comfortable. So find your new leash today.
              </p>
              <h2>A wide variety of sizes, shapes and styles</h2>
              <p>
                We’ve got Reflective Dog Leashes, Waterproof Leashes, Hemp
                Leashes, and more. Whatever type of leash you are looking for,
                we are certain to stock it here. Want a designer leash? How
                about a striped leash? We are proud to provide such a huge range
                of leashes in a wide selection of colors and styles, and we’re
                certain you’ll find the perfect leash for your dog.
              </p>
              <p>
                You can choose from three different widths and four lengths,
                including a traffic lead length so you can keep your dog safely
                at your side beside traffic. You can also find the perfect
                matching lead to go with your new collar. We have ¾" Dog Leads
                for smaller dogs and 1.5" Dog Leads for bigger dogs, so there
                really is something for everyone.
              </p>
            </div>
            <div>
              <h2>Check out our other products</h2>
              <p>
                If you can’t see what you’re looking for here, feel free to keep
                on searching. We have many other categories to explore,
                including different color leashes like our Red Dog Leashes. We
                also have a huge range of Dog Walking Collars in different
                styles and materials.
              </p>
              <h2>Order your lead with us</h2>
              <p>
                We are proud that we only use materials sourced in the USA for
                all our leashes, and they are also handmade in North Carolina to
                ensure the highest quality standards. They are also easy to care
                for because you can put them through the wash whenever you need
                to. We hope you find the lead you’re looking for in our
                collection of Dog Leashes, and if you have any questions don’t
                hesitate to ask.
              </p>
              <button type="submit">Customize Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Leashes;
