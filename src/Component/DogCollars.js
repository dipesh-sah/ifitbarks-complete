import React from "react";
import './DogCollar.css'
import I1 from "./image/92432933.png";
import I2 from "./image/56424170.png";
import I3 from "./image/27967715.png";
import I4 from "./image/48042721.png";
import I5 from "./image/47186769.png";
import I6 from "./image/56192588.png";
import I7 from "./image/50389209.png";
import I8 from "./image/color.png";
import I9 from "./image/aa.png";
import I10 from "./image/scale.png";
import I11 from "./image/acc1.png";
import I12 from "./image/dog.png";
import I13 from "./image/width.png";
import I14 from "./image/aaa.png";
import NavBar from './NavBar'
import Footer from "./Footer";

const DogCollars = () => {
  return (
    <div>
        <NavBar/>
      <div>
        <p className="collartitle">Dog Collars</p>
        <p className="content">
          Pick a style, choose your colors &amp; engrave your buckle. Start
          <br />
          designing now.
        </p>
        <div className="collars">
          <div className="collarimg">
            <img src={I1} alt="#" />
            <p>
              <a> dog collars</a>
            </p>
          </div>
          <div className="collarimg">
            <img src={I2} alt="#" />
            <p>
              <a> dog collars</a>
            </p>
          </div>
          <div className="collarimg">
            <img src={I3} alt="#" />
            <p>
              <a>reflective dog collars</a>
            </p>
          </div>
          <div className="collarimg">
            <img src={I4} alt="#" />
            <p>
              <a>webbing dog collars</a>
            </p>
          </div>
          <div className="collarimg">
            <img src={I5} alt="#" />
            <p>
              <a>waterproof dog collars</a>
            </p>
          </div>
          <div className="collarimg">
            <img src={I6} alt="#" />
            <p>
              <a>designer dog collars</a>
            </p>
          </div>
          <div className="collarimg">
            <img src={I7} alt="#" />
            <p>
              <a>hemp dog collars</a>
            </p>
          </div>
        </div>
        <div className="look">
          <p className="looktitle">A custom look in three simple steps</p>
          <p className="lookcontent">
            Pick a style and start building. Choose your color, options &amp;
            laser engraved buckle.
          </p>
          <div className="customize">
            <div className="personalize">
              <img src={I9} alt="" />
              <br />
              <span>Personalize your buckle.</span>
              <p>
                Keep your dog safe, without any annoying
                <br />
                jingling pet tags! Add your dog’s contact
                <br />
                information and name to the buckle for safety.
              </p>
            </div>
            <div className="color">
              <img src={I8} alt="" />
              <br />
              <span>Choose your colors..</span>
              <p>
                You have your favorite colors, whether it’s a<br />
                sports team, a holiday, or just your own
                <br />
                personality. Now, your dog can wear that
                <br />
                same style too!
              </p>
            </div>
            <div className="fit">
              <img src={I10} alt="" />
              <br />
              <span>Select the perfect fit.</span>
              <p>
                Your dog can have a perfectly fitting collar
                <br />
                with no extra charge. Just add your dog's
                <br />
                necks size to ensure the collar is cut to the
                <br />
                right fit.
              </p>
            </div>
          </div>
        </div>
        <div className="contents">
          <div>
            <h2>All the collars you need – all in one place</h2>
            <p>
              Sometimes it can be difficult to know where to start when you
              begin your search for a new collar. Fortunately, we have all the
              dog collars you could possibly want right here. We’ve got collars
              in all shapes, sizes, designs, materials, and styles, so start
              your search here and find your new collar in no time.
            </p>
            <h2>Reflective to waterproof, we've got them all</h2>
            <p>
              As you browse through the collections above, you’ll see that we
              have covered all our bases by making sure we have something for
              every dog. We have waterproof collars, reflective collars, hemp
              collars, designer collars, and more, so you won’t have any trouble
              finding the perfect collar for your pooch.
            </p>
            <p>
              As you can see, we also have a huge range of colors to choose
              from. So not only can you choose the material and style that best
              suits your dog, but you can also choose the perfect color to go
              with their personality. And in case you didn’t know, all of our
              collars are handmade to order to the highest standards, and they
              are all machine washable too.
            </p>
          </div>
          <div>
            <h2>Explore our plethora of products</h2>
            <p>
              You’ll find plenty of options on this page, but we have so many
              other amazing products in our store to explore. Take a look at our
              <a href="#">
                {" "}
                <strong>designer dog collars</strong>
              </a>{" "}
              and other categories of collars, or explore our leashes including
              our reflective dog leashes to find the perfect matching leash for
              your pooch.
            </p>
            <h2>Your new collar awaits...</h2>
            <p>
              We would love to help you find your new collar today, so browse
              through our collection of Dog Collars until something stands out,
              or contact us with any questions and we’ll be happy to help. Don’t
              forget you can also personalize your collar by adding your dog’s
              name and contact details to the buckle to add an extra layer of
              security.
            </p>
            <button>Customize Now</button>
          </div>
        </div>



        
        <div className="accord">
          <div
            className="accordion"
            id="accordionExample"
            style={{
              width: "80%",
              margin: "0 auto",
              backgroundColor: "#f4f8fc",
            }}
          >
            <div
              className="accordion-item"
              style={{ backgroundColor: "#f4f8fc" }}
            >
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What Collar Is Safe for Everyday Wear?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{ backgroundColor: "#f4f8fc" }}
                >
                  <div>
                    A flat dog collar is one that can safely be worn daily, to
                    keep your dog's identification on them at all times. It can
                    be hooked to a leash via the standard D-ring when it's time
                    for a walk, and quickly removed with a side-release buckle
                    when it's time for bed. If your dog is able to slip out of a
                    traditional collar or needs a little extra guidance while on
                    leash, check out our selection of Martingale Collars.
                    <h2>Benefits of a Personalized Buckle</h2>
                    <p>
                      You can eliminate the jingle of traditional tags by having
                      the buckle on your new collar personalized.
                    </p>
                    <li>
                      1. Safer than wearing traditional ID tags, that can get
                      snagged while your dog is exploring or playing
                    </li>
                    <li>2. Never have to re-order lost dog tags again</li>
                    <li>
                      3. Less bulk compared to tags, perfect for small dogs
                    </li>
                    <li>4. NO MORE TAG JINGLE!</li>
                    <p />
                  </div>
                  <div>
                    <img
                      src={I11}
                      alt=""
                      style={{ width: "550px", height: "366px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              style={{ backgroundColor: "#f4f8fc" }}
            >
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What Size Collar Does My Dog Need?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div
                  className="accordion-body"
                  style={{ backgroundColor: "#f4f8fc" }}
                >
                  <div>
                    <p>
                      Flat collars should be snug but never tight. When the
                      collar is fitted you should be easily able to fit two
                      fingers between the collar and your dog's neck.
                    </p>
                    <h2>Measuring for the Perfect Fit</h2>
                    <p>
                      Using a (soft) sewing tape, measure around your dog’s neck
                      where their collar normally sits. Pull the tape until it
                      is snug but not tight. You should be able to comfortably
                      put two fingers between the measuring tape and your dog's
                      neck. Record this measurement and use as a reference to
                      determine the correct collar size.
                    </p>
                    <h2>Custom Sizing That Will Work for Any Dog</h2>
                    <p>
                      A number of different factors should be considered when
                      choosing a new collar. Your dog's life stage, breed, and
                      personal development will determine what neck size will
                      suit them best. To help you find the perfect fit, we offer
                      custom sizing for all of our collars.
                    </p>
                    <li>
                      1. Custom sized collars are made with your dog’s neck size
                      at the center position, allowing the collar to adjust both
                      smaller and larger in size
                    </li>
                    <li>
                      2. The smaller the collar, the less material it will have
                      to adjust (when compared to large collars) -- ordering a
                      custom sized collar gives you the most possible room for
                      smaller dogs
                    </li>
                    <li>
                      3. For puppies, custom sizing allows you to purchase a
                      collar slightly larger than currently needed, giving your
                      pup room to grow into the collar
                    </li>
                    <p />
                  </div>
                  <div>
                    <img src={I12} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              style={{ backgroundColor: "#f4f8fc" }}
            >
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How Do I Select the Perfect Width and Buckle?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div>
                    <h2>Choosing a Width for Dog Collars</h2>
                    <p>
                      First, check to see what the width of your dog's current
                      collar is for comparison. For strong dogs, heavy pullers,
                      or puppies expected to grow rapidly, a wider collar would
                      be ideal.
                    </p>
                    <ol>
                      <li>3/4" may be appropriate for very small dogs</li>
                      <li>1" is perfect for medium-sized and larger dogs</li>
                      <li>
                        1.5" is best suited for large dogs or those with long,
                        delicate necks such as sighthounds
                      </li>
                    </ol>
                    <img src={I13} alt="" />
                  </div>
                  <div>
                    <h2>Buckle Material Choices</h2>
                    <p>
                      <strong>Plastic </strong> - Plastic buckles are
                      lightweight, durable, waterproof, and are included in the
                      base price for all of our collars. They are strength rated
                      for even the toughest of pullers.
                    </p>
                    <p>
                      ‍<strong>Plastic/Metal</strong> - Hybrid buckles combine
                      plastic and aluminum to offer a light weight, good
                      looking, and strong option. The aluminum side of these
                      buckles are engraved for increased longevity.
                    </p>
                    <p>
                      <strong>Aluminum </strong>- Aluminum buckles are the
                      heaviest option, providing both style and security in a
                      compact package.
                    </p>
                    <img src={I14} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DogCollars;
