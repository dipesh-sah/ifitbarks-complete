import React from "react";
import Imgs1 from "./image/t1.png";
import Imgs2 from "./image/t2.png";
import Imgs3 from "./image/t3.jpg";
import Imgs4 from "./image/t4.jpg";
import Imgs5 from "./image/t5.jpg";
import "./Tags.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Tags = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="containersss">
          <div className="tags">
            <h2>Pet Tags</h2>
            <p>
              You’ve found your collar and leash, so complete the set with one
              of our Pet Tags. Our solid stainless steel pet ID tags include
              your dog’s name, additional text, and even a funny picture to go
              with it. Incredibly durable, they’ll last as long as you need
              them, and they are the perfect way to keep your dog safe if they
              ever go wondering.
            </p>
          </div>
          <div className="tagimg">
            <a href="#">
              <img src={Imgs1} alt="" />
              <p style={{ marginLeft: "100px" }}>stick dog pet tags</p>
            </a>
            <a href="#">
              <img src={Imgs2} alt="" />
              <p style={{ float: "left" }}>freezetag</p>
              <p style={{ float: "right" }}>$10</p>
            </a>
          </div>
        </div>
        <div className="tagcontent">
          <div>
            <h2>Find a tag for your new collar</h2>
            <p>
              If you’ve already got a collar and maybe a leash too, there’s one
              final item to consider: A Dog ID Tag. Fortunately, we’ve got a
              huge selection of stylish and durable tags to choose from right
              here in our store. Made from the strongest aluminum right here in
              North Carolina, our Pet Tags are the perfect way to ensure you get
              reunited with your dog if they ever wander too far.
            </p>
            <h2>A huge variety to choose from</h2>
            <p>
              What’s your dog’s style? You know that better than anyone, so find
              them a tag that matches their personality. We’ve got dozens of
              color combinations and styles you can choose from, so you can take
              your pick. Want pet ID tags with a bit of humor? We’ve got you
              covered. As you can see from the Pet Tags above, there’s something
              for every dog.
            </p>
            <p>
              All of our Pet ID Tags come with your dog’s name and an additional
              four lines of text, so you can add your phone number, address, or
              a message. Is your dog microchipped? Say so on the tag!
            </p>
          </div>
          <div>
            <h2>Find a new collar for your tag!</h2>
            <p>
              If you still need a new collar to go with your tag, you’ll easily
              find one at If It Barks. We’ve got collars in every shape, size,
              and style imaginable, from collars for certain breeds like our
              Greyhound Collars to our Martingale Training Collars. Explore our
              collections today and find yours.
            </p>
            <h2>Order your new ID tag here</h2>
            <p>
              Simply choose one of our Dog ID Tags above and then personalize it
              with your dog’s details. They are all made from the strongest
              stainless, and the image and text are permanently heated to the
              surface of the tag to make sure they last. They are also easy to
              attach with the included slip ring. So explore our Pet Tags here
              and find your new tag today.
            </p>
          </div>
        </div>
        <div className="identification">
          <h2>A Complete Guide to Pet Identification</h2>
          <p>
            The stats are shocking. According to the ASPCA, 1/3 pets will be
            lost or stolen in their lifetime. Of the roughly 2.5 million stray
            dogs that enter shelters, only 26% will be returned to their owners.
            Sadly, one-third of dogs in shelters never leave and are euthanized.
            What are you doing to protect your pet in the event they become
            lost? This complete guide to pet identification will introduce you
            to the best methods to ensure your pet’s safe return.
          </p>
          <p>
            When a pet goes missing, the golden window to successfully find your
            pet is the first 12 hours after their disappearance. Nearly 90% of
            lost pets are recovered within the first 12 hours if their owners
            are actively searching for them. After that, the chances of finding
            them reduces significantly with each second that passes.
          </p>
          <p>
            One of the most influential factors in having your lost pet returned
            to you is by them wearing some form of identification when they get
            lost, but there is controversy over what type is best. Truthfully,
            anything is better than nothing, but the best answer is a collar
            with some form of ID, in conjunction with a secondary form of ID.
          </p>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  style={{ fontWeight: "bolder !important", fontSize: "18px" }}
                  aria-controls="collapseOne"
                >
                  The collar and ID tag
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div>
                    <h2>Your dog's primary identification</h2>
                    <p>
                      A standard collar represents a worldwide, recognized
                      symbol for an “owned" dog. Coupled with the owner’s
                      information attached with a tag or an engraved plate on
                      the collar itself is a powerful reunion tool for lost pets
                      and their owners.
                    </p>
                    <h2>Benefits of ID Tags &amp; Plates:</h2>
                    <ul>
                      <li>Provides instant identification of your pet.</li>
                      <li>
                        ID tags are easily readable by anyone without the use of
                        technology.
                      </li>
                      <li>
                        They are readily available, inexpensive, and fully
                        customizable.
                      </li>
                      <li>
                        This single item is the most useful form of
                        identification to have your lost pet returned to you,
                        and quickly.
                      </li>
                    </ul>
                    <h2>Drawbacks of ID Tags:</h2>
                    <ul>
                      <li>
                        Potential safety risk as they can become hooked or
                        caught while your dog is running or playing.
                      </li>
                      <li>Can become detached and lost.</li>
                      <li>Several tags together can become bulky.</li>
                      <li>
                        Tags can be noisy from the jingle of metal on metal.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p>
                      The drawbacks of having your pet wear an ID tag is very
                      minor when you compare it to all the benefits. To prevent
                      tags from becoming a safety issue an excellent alternative
                      is to have your information engraved on a personalized
                      collar or a slide on ID plate which rests flat against the
                      collar. Unless the collar is removed from your pet, the
                      information will stay with them. And the best part? No
                      more jingly tags!
                    </p>
                    <p>
                      If you choose to use ID tags, when you order, order two.
                      That way you have a backup tag ready to use in the event
                      one is lost.
                    </p>
                    <p>
                      Ideally, your pet should wear a collar with ID all the
                      time. Too many pet owners make the mistake of only putting
                      them on for walks. Chances are when you are not prepared
                      that is when your pet will go missing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  style={{ fontWeight: "bolder !important", fontSize: "18px" }}
                  aria-controls="collapseTwo"
                >
                  Microchip vs collar ID
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div>
                    <h2>
                      My dog has a microchip, why do they need to wear ID on
                      their collar?
                    </h2>
                    <p>
                      Microchips and tattoos are forms of permanent
                      identification and provide proof of ownership. They are an
                      excellent form of secondary ID, should your dog become
                      lost without a collar or tags on. ID tags provide instant
                      access to your contact information. They do not require
                      any third-party database to reach you, so it is the
                      quickest and most effective method in reuniting pets with
                      owners.
                    </p>
                  </div>
                  <div>
                    <p>
                      Ideally, your pet should wear a collar with ID all the
                      time. Too many pet owners make the mistake of only putting
                      them on for walks. Chances are when you are not prepared
                      that is when your pet will go missing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{ fontWeight: "bolder !important", fontSize: "18px" }}
                >
                  Information to include on an ID tag
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
                    <h2>What information should I include?</h2>
                    <p>
                      You asked, and we answered. A common question sent to us
                      is what information should you include on your pet’s ID
                      tag.
                    </p>
                    <p>
                      ID tags and plates have a limited amount of space
                      available to include important information.
                    </p>
                    <p>
                      A standard tag typically has room for 2-4 lines of text,
                      popular choices for information to include:
                    </p>
                    <ul>
                      <li>Your Pet’s name</li>
                      <li>One or two phone numbers to contact you</li>
                      <li>
                        A personal message like “I am microchipped" or “Call my
                        mom" or “I’m friendly".
                      </li>
                      <li>Your city</li>
                    </ul>
                    <p>
                      You will have to prioritize what information to include
                      because space is limited, so you may want to stick to the
                      basics. If you have a pet with special needs like medical
                      or behavioral issues you may want to include more
                      information.
                    </p>
                    <h2>Do I include my pet’s name?</h2>
                    <p>
                      Including your pet’s name is a nice personalized touch. If
                      your pet is overly friendly and their name on the tag is
                      easily readable from a short distance, it allows an
                      opportunity for someone to call the dog to them.
                    </p>
                    <h2>What contact information should I include?</h2>
                    <p>
                      Include at least one phone number: home, work or mobile
                      number. Depending which phone number is more likely to be
                      answered and has an answering machine in case of a missed
                      call will determine which one is the best to include. If
                      you have a secondary number and space on the tag, include
                      it too. *Always include your area code, and in case you
                      are a traveler who may take their pet with them, you will
                      want to add the country code.
                    </p>
                    <h2>Should I include an alternate phone number?</h2>
                    <p>
                      Yes! By adding a secondary contact, you double the chance
                      of allowing the caller to reach you.
                    </p>
                    <p>
                      Examples of alternate contact numbers: Your vet, groomer,
                      boarding facility/pet sitter or trainer. These are all
                      trusted professionals, familiar with your dog, and would
                      be knowledgeable to assist the caller with making
                      arrangements for your dog until you can be contacted.
                    </p>
                    <img
                      src={Imgs3}
                      alt=""
                      style={{ width: "653px", height: "420px" }}
                    />
                  </div>
                  <div>
                    <h2>Should I include my name?</h2>
                    <p>
                      This is a personal option but isn't essential for someone
                      to reach you. It is likely to take up valuable real-estate
                      which could be used for more urgent information.
                    </p>
                    <h2>What about my address?</h2>
                    <p>
                      A full address is not necessary, but your city or area you
                      reside in is helpful. Not everyone is comfortable putting
                      their address on their dog’s tag. It could be useful for
                      someone who finds your dog locally to return them directly
                      to you.
                    </p>
                    <h2>
                      My dog has a microchip. Should I include a line like “I’m
                      microchipped" to my dog’s tag?
                    </h2>
                    <p>
                      Yes, adding a line like “I’m microchipped" to your pet’s
                      tag is advantageous for a few reasons:
                    </p>
                    <ul>
                      <li>
                        It provides a prompt for the finder to have your pet
                        scanned.
                      </li>
                      <li>
                        Microchips can migrate from their injection site. If the
                        animal’s tag insists the animal is indeed microchipped
                        but nothing is showing on the scanner, it gives the
                        message that it is there, so please keep looking.
                      </li>
                      <li>
                        When your pet is scanned at a vet office or animal
                        shelter, the owner information can be verified. When a
                        pet is found, the finder wants to ensure they are
                        returning the animal to the rightful owner and this
                        would allow them to check the credentials of whoever
                        comes forward to claim the pet.
                      </li>
                      <li>
                        Because microchips are irrefutable proof of ownership
                        and can not be removed, it will ward off anyone with ill
                        intentions of acquiring your pet as their own or
                        offering them for sale as the dog can be traced back to
                        an owner (yes, sadly these things happen).
                      </li>
                    </ul>
                    <p>
                      <strong>
                        Note: This is not a suitable substitute for not having a
                        microchip, and should not be used if your pet does not
                        have a microchip.
                      </strong>
                    </p>
                    <h2>
                      Why would I include Medical Information for my pet on
                      their ID tag?
                    </h2>
                    <p>
                      Your dog may genuinely have a medical condition that
                      requires ongoing treatment. It may be regular medication
                      to manage a condition or may even be imperative to
                      treating a life-threatening condition. Or your pet may not
                      have a medical condition at all, but you may consider
                      mentioning it anyway.
                    </p>
                    <p>
                      <strong>
                        Example: "Medical Needs" Or "Need Medication" Here’s
                        why:
                      </strong>
                    </p>
                    <ul>
                      <li>
                        This puts an urgency on the finder to reunite the pet
                        with the owner, sooner.
                      </li>
                      <li>
                        It can help deter someone who found your dog and
                        considering keeping them as their own.
                      </li>
                      <li>
                        Your dog may need treatment or medication when found.
                        The finder is more likely to seek veterinary assistance
                        in this case and get the required help for your dog.
                      </li>
                    </ul>
                    <h2>
                      Should I include information about a “Reward" for the safe
                      return of my pet?
                    </h2>
                    <p>
                      If you are able to pay a reward, then consider it. The
                      prospect of a reward may be enough incentive for the
                      finder to put extra emphasis on finding the pet's owner.
                    </p>
                    <h2>Should I include a personalized message?</h2>
                    <p>
                      If you have room, it is a nice touch. Something along the
                      lines of “If I am alone, I am lost" prompts the finder to
                      recognize your pet is fact lost and not just allowed out
                      for a wander around the neighborhood (not that we would
                      ever recommend that).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  style={{ fontWeight: "bolder !important", fontSize: "18px" }}
                  aria-controls="collapseFour"
                >
                  Microchips &amp; Tattoos
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div>
                    <h2>Microchips &amp; Tattoos: Secondary Identification</h2>
                    <p>
                      Secondary types of identification available to pet owners
                      are microchips or tattoos. While these can be used to
                      locate the owner of a lost pet, they require the use of a
                      database and third party to retrieve the owner’s
                      information. Their primary function is to serve as
                      permanent identification and concrete proof of ownership.
                      These are helpful as a backup method to identify an animal
                      in case they have lost their collar or tag.
                    </p>
                    <h2>Microchips</h2>
                    <p>
                      Microchips are a small implant, about the size of a grain
                      of rice, embedded under the skin of an animal by a vet,
                      using a large needle. The procedure is minimally painful
                      and can be performed during a routine vet visit. The chip
                      contains a unique series of numbers that act as a serial
                      number specific to that animal. A scanner is required to
                      display the unique identifying code which can be traced
                      back to the owner with the use of a database provided by
                      the chip company. Most vet clinics will scan found animals
                      for free.
                    </p>
                    <img
                      src={Imgs4}
                      alt=""
                      style={{
                        width: "653px",
                        height: "396px",
                        borderRadius: "15px",
                      }}
                    />
                    <p>image source: prnewsglobe.com</p>
                    <h2>Microchip Pros:</h2>
                    <ul>
                      <li>Long lasting, permanent ID</li>
                      <li>Can be inserted without sedation</li>
                    </ul>
                    <h2>Microchip Cons:</h2>
                    <ul>
                      <li>
                        Require a chip scanner and database to contact owner
                      </li>
                      <li>
                        More expensive initial cost and/or require a database
                        maintenance fee/subscription
                      </li>
                    </ul>
                    <h2>Tattoos</h2>
                    <p>
                      In the past, tattoos were commonly used by vet offices,
                      animal shelters, rescue groups, and breeders to track and
                      identify animals. Since tattoos need to be performed under
                      anesthetic, their popularity has declined as more people
                      choose to use microchips instead. They do still serve the
                      purpose of permanent identification.
                    </p>
                    <p>
                      If an animal with a tattoo is found, the tattoo can be
                      traced to the vet clinic who created it, who in turn can
                      contact the owner of the animal.
                    </p>
                  </div>
                  <div>
                    <img
                      src={Imgs5}
                      alt=""
                      style={{
                        width: "653px",
                        height: "396px",
                        borderRadius: "15px",
                      }}
                    />
                    <p>image source: petmd.com</p>
                    <h2>Tattoo Pros:</h2>
                    <ul>
                      <li>Generally inexpensive</li>
                      <li>One time application/permanent ID</li>
                      <li>
                        Readable by anyone (without the use of technology)
                      </li>
                    </ul>
                    <h2>Tattoo Cons:</h2>
                    <ul>
                      <li>
                        Hidden by hair or fade over time making them difficult
                        to read
                      </li>
                      <li>Requires the animal to be sedated to tattoo</li>
                      <li>Need use of database to track to the owner</li>
                    </ul>
                    <h2>Multiple forms of pet identification</h2>
                    <p>
                      One single method of identification, whether it be a tag,
                      plate, customized collar, tattoo, or microchip is good,
                      but a combination or two or more is better. Each has their
                      unique benefits, but their drawbacks are relatively minor
                      compared to not having your pet returned due to lack of
                      identification. Remember that identification is only as
                      good as the information contained within them. Keep your
                      information up to date, accounts current, and do not
                      forget to change your contact details with each move,
                      preferably right before or at the time of any changes.
                    </p>
                    <p>
                      Always be your pet's best advocate. Prevention and
                      preparedness are the best course of action to ensure that
                      your pet has the highest chance of coming home. If your
                      pet goes missing you need to actively be searching for
                      them all while hoping a good Samaritan will call if they
                      find your pet. Make their job easy by providing multiple
                      forms of identification to assist in reuniting you with
                      your pet.
                    </p>
                    <p>
                      <i>
                        By Katie @Pet_IQ. Katie is a Pet Industry Consultant,
                        Dog Trainer, Rescuer, PetCoach Advisor, and specializes
                        in “All things dog". She proudly shares her home with
                        four lovely rescue dogs and is on a mission to educate
                        pet owners.
                      </i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tags;
