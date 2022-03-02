import React from "react";
import "./Contact.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div>
     <NavBar/>
      <div className="contactbanner">
        <div className="content">
          <h2>Need Some Assistance?</h2>
          <p>We're here to help!</p>
        </div>
      </div>
      <div className="contact">
        <div>
          <h2>We want to hear from you!</h2>
          <p>
            We're happy to answer questions or help you with returns. Please
            fill out the form if you need assistance and we'll be in-touch as
            soon as we can.
          </p>
          <h2>Direct line</h2>
          <p>+9779824285568</p>
          <h2>Email</h2>
          <p>help@ifitbarks.com</p>
          <h2>Mail &amp; Returnss</h2>
          <p>
            229 Airport Road, Suite 7-147
            <br />
            Arden, NC 28704
          </p>
        </div>
        <form action>
          <label htmlFor="firstName">FirstName</label>
          <br />
          <input type="text" id="firstName" />
          <br />
          <label htmlFor="lastName">LastName</label>
          <br />
          <input type="text" id="lastName" />
          <br />
          <label htmlFor="Email">Email</label>
          <br />
          <input type="email" id="Email" />
          <br />
          <label htmlFor="message">What is Your Question?</label>
          <br />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={5}
            defaultValue={""}
          />
          <button>Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
