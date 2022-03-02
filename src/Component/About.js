import React from "react";
import "./About.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f1fa",
      }}
    >
      <NavBar />
      <div className="about">
        <div className="aboutimg">
          <h2>About If It Barks</h2>
        </div>
      </div>
      <p className="para">
        Your dog deserves the best in style, function, and comfort. You, dog
        parents, deserve one place to find all three. The solution? If It Barks!
      </p>
      <div className="cont">
        <div className="container1">
          <h2>About us</h2>
          <p>
            We are committed to outfitting your dog in stylish, wearable,
            durable, and cute dog collars, leashes and pet tags. All items are
            handmade to order with colorful materials that you can select to
            reflect your dog's unique personality. You can custom design your
            own dog collar or select from a wide variety of cool dog collars and
            leashes.
          </p>
          <h2>Who we are</h2>
          <p>
            If It Barks is a North Carolina based small business offering
            handmade dog collars, leashes and tags that match your dog's
            specifications and style.
          </p>
          <br />
          <p>
            Our specialty is martingale dog collars for their fit and function,
            but each design is also offered as a side release buckle dog collar,
            with optional coordinating leash options.
          </p>
          <h2>Our history</h2>
          <p>
            If It Barks was founded by Nicole Robbins in 2002 thanks to her
            dogs, Nutmeg and Oswald. They were both retired racing greyhounds.
            She adopted them and soon realized their dog collar needs were
            unique. Because their heads are smaller than their necks, they
            required a martingale type collar.
          </p>
          <br />
          <p>
            But why should sighthounds be the only breeds to enjoy the benefits
            of martingales? Instead of making the collars for two dogs, If It
            Barks was started to provide martingale (and eventually
            side-release) dog collars for all types of dogs.
          </p>
          <br />
          <p>
            Brian and Polly Godwin took over the business in 2015. They are
            excited to continue the mission of If It Barks - providing quality
            products made in the USA that show off the style and fun of owners
            and their dogs.
          </p>
        </div>
        <div className="container2">
          <h2>Design your own</h2>
          <p>
            With the "Design your Own" shopping experience, each If It Barks dog
            collar item is created to meet your dog's individual style,
            personality, and functional needs.
          </p>
          <br />
          <p>
            When you design your own collar, the options are nearly limitless!
            Choose from over 1 million color combinations and styles. You’ll
            find exactly what you need to match your dog’s style and look!
          </p>
          <h2>Hand-sewn &amp; made in the USA</h2>
          <p>
            Our materials are sourced in the USA and each If It Barks product is
            hand-sewn in North Carolina by our seamstresses!
          </p>
          <button
            style={{
              color: "#fff",
              fontWeight: 400,
              backgroundColor: "#6481a4",
              cursor: "pointer",
              border: "none",
              whiteSpace: "normal",
              padding: "12px 30px 12px 30px",
              borderRadius: "4px",
              fontSize: "18px",
              margin: " 0 220px",
            }}
          >
            Start Designing Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
