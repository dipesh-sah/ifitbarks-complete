import React from 'react'
import Im1 from "./image/1.png"
import Im2 from "./image/2.png"
import Im3 from "./image/3.png"
import Im4 from "./image/4.png"
import Im5 from "./image/5.png"
import Im6 from "./image/6.png"
import Im7 from "./image/7.png"
import Im8 from "./image/aa.png"
import Im9 from "./image/color.png"
import Im10 from "./image/scale.png"
import Im11 from "./image/8.png"
import Im12 from "./image/9.png"
import Im13 from "./image/10.png"
import Im14 from "./image/11.jpg"
import Im15 from "./image/12.jpg"
import Im16 from "./image/13.jpg"
import Im17 from "./image/14.png"
import Im18 from "./image/trainer.png"
import './Martingale.css'
import NavBar from './NavBar'
import Footer from './Footer'

const Martingale = () => {
  return (
    <div>
        <NavBar/><div>
    <p className="collartitle">Martingale Collars</p>
    <p className="content">
      A completely customizable collar that is escape-proof.
    </p>
    <div className="collars">
      <div className="collarimg">
        <img src={Im1} alt="#" />
        <p><a> striped martingale</a></p>
      </div>
      <div className="collarimg">
        <img src={Im2} alt="#" />
        <p><a> embroidered martingale collars</a></p>
      </div>
      <div className="collarimg">
        <img src={Im3} alt="#" />
        <p><a>webbing martingale collars</a></p>
      </div>
      <div className="collarimg">
        <img src={Im4} alt="#" />
        <p><a>waterproof martingale</a></p>
      </div>
      <div className="collarimg">
        <img src={Im5} alt="#" />
        <p><a>reflective martingale</a></p>
      </div>
      <div className="collarimg">
        <img src={Im6} alt="#" />
        <p><a>hemp martingale</a></p>
      </div>
      <div className="collarimg">
        <img src={Im7} alt="#" />
        <p><a>designer fabric martingale</a></p>
      </div>
    </div>
    <div className="look">
      <p className="looktitle">A custom look in three simple steps</p>
      <p className="lookcontent">
        Pick a style and start building. Choose your color, options &amp; laser
        engraved buckle.
      </p>
      <div className="customize">
        <div className="personalize">
          <img src={Im8} alt="" /><br />
          <span>Personalize your buckle.</span>
          <p>
            Keep your dog safe, without any annoying<br />
            jingling pet tags! Add your dog’s contact<br />
            information and name to the buckle for safety.
          </p>
        </div>
        <div className="color">
          <img src={Im9} alt="" /><br />
          <span>Choose your colors..</span>
          <p>
            You have your favorite colors, whether it’s a<br />
            sports team, a holiday, or just your own<br />
            personality. Now, your dog can wear that<br />
            same style too!
          </p>
        </div>
        <div className="fit">
          <img src={Im10} alt="" /><br />
          <span>Select the perfect fit.</span>
          <p>
            Your dog can have a perfectly fitting collar<br />
            with no extra charge. Just add your dog's<br />
            necks size to ensure the collar is cut to the<br />
            right fit.
          </p>
        </div>
      </div>
      <div className="backgroundimg" />
      <div className="guide">
        <h2>Ultimate guide to martingale collars</h2>
        <p>
          No matter what lifestyle you and your dog enjoy, a safe and secure way
          to take them for a walk is a necessity. With a skittish pup or a tough
          puller, walks can quickly become a stressful activity for you and your
          dog. Experienced trainers and rescues recommend our martingale collars
          because they are the perfect tool to help take back control of your
          walks. These collars are reliably safe and comfortable for dogs of all
          shapes and sizes. If you are instead looking for a flat collar, you
          can find our selection here.
        </p>
      </div>
      <div className="accordion" id="accordionExample" style={{width: '85%', margin: '0 auto'}}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Why use a martingale collar?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div>
                <h2>Escape-proof Functionality</h2>
                <p>
                  Martingale collars are composed of two sections: a fixed
                  portion (neck loop) and a control loop. The leash is attached
                  to a D-ring on the control loop, which adjusts. This loop can
                  only tighten to the length of the fixed portion -- allowing
                  enough tightening to keep your dog from slipping out no matter
                  how hard they pull, but ensuring the collar will not be able
                  to tighten so far as to injure your dog. Rescue organizations,
                  such as Lucky Dog Rescue, use and recommend martingale collars
                  “because shelter dogs can be more skittish at times,
                  [Martingale] collars are the safest way to prevent escapes".
                </p>
                <h2>Escape-proof Functionality</h2>
                <p>
                  Martingale collars are commonly used for dogs who need to be
                  reminded of their manners when walking on a leash. The
                  tightening of the control loop does not hurt the dog but does
                  cause discomfort that encourages them to stop pulling while on
                  leash. It is important that your dog does not lean into the
                  collar and consistently pull. Martingales are designed to
                  tighten when necessary and remain relaxed the majority of the
                  time. When your dog pulls, gently pull back. Stop walking if
                  necessary. As soon as your dog releases the pressure applied
                  to the collar, continue walking. Your dog will quickly learn
                  not to put pressure on the collar. If you find your dog pulls
                  constantly, we recommend seeking the assistance of a trained
                  professional to help you with some basic loose leash walking
                  skills and training.
                </p>
              </div>
              <div>
                <h2>Benefits of a Martingale Collar</h2>
                <ul style={{listStyle: 'disc !important'}}>
                  <li>
                    Reliable safety features provide peace of mind on every walk
                  </li>
                  <li>
                    Escape-proof even if your dog pulls very hard, suddenly, or
                    from an unexpected direction
                  </li>
                  <li>Comfortable to wear for dogs, easy to use for humans</li>
                  <li>
                    Hundreds of color combinations to choose from to keep your
                    dog looking stylish
                  </li>
                  <li>
                    Fabric neck loop does not snag or chafe fur like other
                    materials are known to do
                  </li>
                  <li>
                    Suitable for any size, shape, or breed of dog (although not
                    recommended for new puppies)
                  </li>
                  <li>
                    Pressure is evenly distributed around the neck so that the
                    collar doesn’t pinch or choke
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Benefit of adding a buckle
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div>
                <h2>Standard vs buckle</h2>
                <p>
                  Martingale collars are composed of two sections: a fixed
                  portion (neck loop) and a control loop. The leash is attached
                  to a D-ring on the control loop, which adjusts. This loop can
                  only tighten to the length of the fixed portion -- allowing
                  enough tightening to keep your dog from slipping out no matter
                  how hard they pull, but ensuring the collar will not be able
                  to tighten so far as to injure your dog. Rescue organizations,
                  such as Lucky Dog Rescue, use and recommend martingale collars
                  “because shelter dogs can be more skittish at times,
                  [Martingale] collars are the safest way to prevent escapes".
                </p>
                <h2>Escape-proof Functionality</h2>
                <p>
                  Martingale collars are commonly used for dogs who need to be
                  reminded of their manners when walking on a leash. The
                  tightening of the control loop does not hurt the dog but does
                  cause discomfort that encourages them to stop pulling while on
                  leash. It is important that your dog does not lean into the
                  collar and consistently pull. Martingales are designed to
                  tighten when necessary and remain relaxed the majority of the
                  time. When your dog pulls, gently pull back. Stop walking if
                  necessary. As soon as your dog releases the pressure applied
                  to the collar, continue walking. Your dog will quickly learn
                  not to put pressure on the collar. If you find your dog pulls
                  constantly, we recommend seeking the assistance of a trained
                  professional to help you with some basic loose leash walking
                  skills and training.
                </p>
                <img src={Im11} alt="" style={{width: '638px', height: '160px'}} />
                <h2>Buckle Material Choices</h2>
                <p>
                  Plastic - Plastic buckles are lightweight, durable,
                  waterproof, and are included in the base price for all of our
                  collars. They are strength rated for even the toughest of
                  pullers.
                </p>
                <p>
                  Metal &amp; Plastic (hybrid) - Hybrid buckles combine plastic and
                  aluminum to offer a light weight, good looking, and strong
                  option. The aluminum side of these buckles are engraved for
                  increased longevity.
                </p>
                <p>
                  ‍Aluminum - Aluminum buckles are the heaviest option,
                  providing both style and security in a compact package.
                </p>
                <img src={Im12} alt="" width="680px" height="160px" />
              </div>
              <div>
                <h2>Benefits of a Personalized Buckle</h2>
                <p>
                  You can eliminate the jingle of traditional tags by having the
                  buckle on your new collar personalized.
                </p>
                <img src={Im13} alt="" width="511px" height="172px" style={{margin: '0 auto'}} />
                <ul>
                  <li>
                    Safer than wearing traditional ID tags, that can get snagged
                    while your dog is exploring or playing
                  </li>
                  <li>Never have to re-order lost dog tags again</li>
                  <li>Less bulk compared to tags, perfect for small dogs</li>
                  <li>NO MORE TAG JINGLE!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Properly sizing a martingale
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div>
                <img src={Im14} alt="" width="638px" height="425px" />
                <h2>Measuring for a martingale collar</h2>
                <p>
                  Step 1 - Measure Dog's Neck: Using a (soft) sewing tape,
                  measure around your dog’s neck where their collar normally
                  sits. Pull the tape until it is snug but not tight. You should
                  be able to comfortably put two fingers between the measuring
                  tape and your dog's neck. Record this measurement, it will be
                  the primary factor to consider when selecting a size.
                </p>
                <p>
                  <i>If you do not have a soft tape, use a piece of string (or
                    similar) and measure around your dog’s neck using the above
                    instructions. Lay the string flat and use a ruler or tape
                    measure to obtain the measurement.</i>
                </p>
                <p>
                  Step 2 - Measure Dog's Head: If you are ordering a standard
                  martingale (without a buckle), the collar will need to
                  comfortably fit the dog's neck, but also adjust to be large
                  enough to fit over their head and ears. Using the same method
                  from Step 1, measure the head starting at the throat and going
                  over the ears. Record the measurements and use while
                  determining the correct size collar to order.
                </p>
              </div>
              <div>
                <h2>Custom Sizing is Important for Martingale Collars</h2>
                <p>
                  It is recommended that Martingale Collars be ordered as close
                  to the true size of your dog's neck as possible. This will
                  ensure not only the best possible fit but also the accurate
                  functionality of the collar. To help you find the perfect fit,
                  we offer custom sizing for all of our collars.
                </p>
                <ul>
                  <li>
                    Custom sized martingale collars are typically made with your
                    dog’s neck size at the center position, allowing the collar
                    to adjust both smaller and larger in size
                  </li>
                  <li>
                    The smaller the collar, the less material it will have to
                    adjust (when compared to large collars) -- ordering a custom
                    sized collar gives you the most possible room for smaller
                    dogs
                  </li>
                  <li>
                    For puppies, custom sizing allows you to purchase a collar
                    slightly larger than currently needed, giving your pup room
                    to grow into the collar
                  </li>
                  <img src={Im15} alt="" width="511px" height="340px" />
                  <li>
                    Safer than wearing traditional ID tags, that can get snagged
                    while your dog is exploring or playing
                  </li>
                  <li>Never have to re-order lost dog tags again</li>
                  <li>Less bulk compared to tags, perfect for small dogs</li>
                  <li>NO MORE TAG JINGLE!</li>
                </ul>
                <h2>Choosing a Width for Martingales</h2>
                <p>
                  In general, we suggest ordering a martingale in a 1" or 1.5"
                  width. A wider collar will distribute the pressure across a
                  larger area of your dog’s neck, making it more comfortable and
                  more effective. For strong dogs, heavy pullers, or puppies
                  expected to grow rapidly, a wider collar would be ideal.
                </p>
                <ul>
                  <li>3/4" may be appropriate for very small dogs</li>
                  <li>
                    1" is perfect for medium-sized and larger dogs -- this is
                    the most common size for Martingale Collars
                  </li>
                  <li>
                    1.5" is best suited for large dogs or those with long,
                    delicate necks such as sighthounds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              How to use a martingale collar
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div>
                <h2>Multiple Functions</h2>
                <p>
                  There are two different adjustments for martingale collars
                  that you should be aware of, detailed below. Please note that
                  none of our buckles are strength rated for continuous jerking
                  and as such should not be used with a tie-out -- martingale
                  collars especially should not be used without supervision, on
                  a tie-out, or with a retractable leash. Doing so may endanger
                  your dog's safety.
                </p>
                <h2>Walking and Training: On-Leash</h2>
                <ul>
                  <li>
                    To ensure the proper fit, pull the collar up to the top of
                    your dog's neck, so that it sits just behind the ears. You
                    want to adjust the collar to be snug in this location, as
                    this is the smallest part of the neck (before going over the
                    head). This will prevent your dog from being able to slip
                    out of the collar.
                  </li>
                  <li>
                    Once tension is relieved from the collar it should sit
                    comfortably mid-neck and be slightly looser fitting than a
                    flat collar. The measurements of a martingale collar are
                    that of the collar in use. When in use and pulled tight the
                    hardware on the control loop should never touch! There
                    should always be two fingers width (about 2") between the
                    hardware.
                  </li>
                </ul>
                <h2>Supervised Use: Off-Leash</h2>
                <p>
                  For safety, many professionals recommend only using a
                  martingale collar under direct supervision, (during walking or
                  training) and removing the collar when not in use. Should you
                  choose to leave the collar on your dog while off leash, the
                  collar should always be loose enough to slide off of your
                  dog's head -- this will prevent accidental strangulation
                  should the control loop get caught on anything. The two slides
                  on the control loop should easily touch when adjusted in this
                  way. The collar should sit comfortably, roughly mid neck once
                  adjusted. It will be looser than a flat collar, and looser
                  still than a martingale used for walking. You should easily be
                  able to slide your entire hand under the collar.
                </p>
              </div>
              <div>
                <img src={Im16} alt="" width="638px" height="191px" />
                <p>
                  ** The first image is CORRECT. The second and third are
                  INCORRECT.
                </p>
                <ul>
                  <li>
                    The control loop on the collar should have enough slack to
                    pull into a symmetrical triangular shape when a leash is
                    attached and pulled
                  </li>
                  <li>
                    If the control loop is flush against the collar and does not
                    provide slack when pulled, the collar is too tight
                  </li>
                  <li>
                    If the hardware at the base of the loop is touching, the
                    collar is too loose
                  </li>
                </ul>
                <img src={Im17} alt="" style={{margin: '10px 60px', width: '511px', height: '314px', borderRadius: '10px'}} />
                <p>
                  It is important that your dog does not lean into the collar
                  and consistently pull. Martingales are designed to tighten
                  when necessary and remain relaxed the majority of the time.
                  When your dog pulls, gently pull back. Stop walking if
                  necessary. As soon as your dog releases the pressure applied
                  to the collar, continue walking. Your dog will quickly learn
                  not to put pressure on the collar.
                </p>
                <p>
                  <i>If you find your dog pulls constantly, we recommend seeking
                    the assistance of a trained professional to help you with
                    some basic loose leash walking skills and training.</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Safety when using a martingale
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div>
                <h2>Safety Comes First</h2>
                <p>
                  <strong>Not for Unsupervised Use - </strong>Martingales should
                  not be left on your dog when they are unsupervised, they can
                  be snagged and pulled off or pulled tight on your dog.
                </p>
                <p>
                  <strong>
                    Not for Sole Restraint for Constant Pullers - </strong>Dogs that constantly pull against the leash should have a
                  harness to restrain them in addition to the martingale. Not
                  for Off leash Play - Because martingale collars sit looser on
                  a dog's neck than flat collars, they may be more easily
                  snagged when a dog is playing with other dogs or adventuring.
                  For this reason, it is best to switch to a flat collar with
                  your dog's ID after your walk to the dog park.
                </p>
                <p>
                  <strong> Not for Retractable Leashes - </strong>The constant
                  tension from retractable leashes can tighten the martingale
                  collar at inappropriate times and make it difficult for your
                  dog to understand whether she is pulling too hard or not.
                  Additionally, these leashes come with their own safety
                  concerns and should be used wit caution.
                </p>
              </div>
              <div>
                <p>
                  <strong> Not for Tethering or Use on a Tie Out - </strong>Martingale collars should never be used to tether your dog to
                  an object, even for an instant. Always be within reach of your
                  dog's leash when they are wearing a martingale collar.
                </p>
                <p>
                  <strong> Not for Use When Crating - </strong>Most experts
                  recommend removing your dog's collar before crating, no matter
                  the style. Crating your dog with a martingale collar could
                  result in potentially life threatening consequences.
                </p>
                <p>
                  <strong>
                    Not for Pet Tags (Unless an Extra D-ring is Added) -</strong>
                  Pet tags should never be hung from the d-ring on the control
                  loop of a martingale collar for safety reasons. Tags can be
                  hung from the slides or an optional extra d-ring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="trainers">
      <div>
        <img src={Im18} alt="" style={{width: '333px'}} height="333px" />
      </div>
      <div>
        <h3>What trainers are saying!</h3>
        <h2>For health and safety reasons, these collars are the best!</h2>
        <p>
          "The main reason I chose If It Barks is their martingale collars and
          the effectiveness in teaching leash training. The collars add control
          and do not allow dogs to back out. The way the collars fit on a dog,
          when done correctly, distributes pressure around the entire neck and
          avoids simply putting pressure on the trachea like a typical dog
          collar. So, for health and safety reasons, these collars are the best.
          I use If It Barks collars for all 5 of my dogs"
          <br />
          <br /> - Kate Jackson Trainer Jabula Dog Academy</p>
      </div>
    </div>
  </div>
  <Footer/>
</div>
  )
}

export default Martingale