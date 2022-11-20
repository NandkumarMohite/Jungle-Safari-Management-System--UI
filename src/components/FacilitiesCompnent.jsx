import React from "react";
import { useNavigate } from "react-router-dom";
import Birds from "./pics/birdswatching.jpg";
import Hotels from "./pics/Hotel.jpg";
import rhino from "./pics/Greater_One_Horned_Rhino.jpg";
import Bonfire from "./pics/bonfire.jpg";
import Camp from "./pics/camp.jpg";
import Training from "./pics/Training.jpg";
const Home = () => {
  const navigate = useNavigate();

  
  return (
    <>
      <div className="p1">
        <div id="facility">
          <section3 class="services">
            <h1>FACILITIES</h1>
            <p>
              Appart from the packages services we provide other facilities as
              follows...
            </p>
            <div class="row " style={{ color: "black" }}>
              <div class="services-col">
                <img src={Birds} alt="this is " />
                <h3>Birds Watching</h3>
                <p>
                  <strong>INDIA</strong> is a bird watcher's paradise,
                  particularly in bird sanctuaries where the critical habitat
                  has been preserved. Winter is generally the best time for
                  birding, as many places receive migratory birds that are
                  attracted by the warmer weather of India's subtropical
                  climate.
                </p>
              </div>
              <div class="services-col">
                <img src={Hotels} alt="this is " />
                <h3>Hotels</h3>
                <p>
                  This is the best place to get best deals on Jungle Safari
                  hotels booking. Our <strong>affordable</strong> and{" "}
                  <strong>enticing</strong> deals and packages lead you to a
                  congenial and enchanting stay within the fringes of Forest.
                </p>
              </div>
              <div class="services-col">
                <img src={rhino} alt="this is " />
                <h3>Greater One-Horned Rhinoceros</h3>
                <p>
                  The <strong>Indian rhino</strong> or greater one-horned
                  rhinoceros is a rhinoceros species native to the Indian
                  subcontinent. The extent and quality of the rhino's most
                  important habitat, the alluvial Terai-Duar savanna and
                  grasslands and riverine forest, is considered to be in decline
                  due to human and livestock encroachment.
                </p>
              </div>
            </div>
            <div class="row " style={{ color: "black" }}>
              <div class="services-col">
                <img src={Bonfire} alt="this is " />
                <h3>Campfire</h3>
                <p>
                  Stay warm and enjoy the serenity of nature sitting around the
                  campfire. Relish on barbecued food and your favourite
                  beverages. Have a fun filled dance night along with your
                  family and friends.Enjoy a sumptuous dinner by a bonfire under
                  a starry sky with your loved ones.
                </p>
              </div>
              <div class="services-col">
                <img src={Camp} alt="this is " />
                <h3>Camping</h3>
                <p>
                  Camping facilities shall include :<br></br>
                  1) Provisions for camping;<br></br>
                  2) including tent and trailer sites, tables and fireplaces.{" "}
                  <br></br>
                  3) Sanitary facilities and drinking water.
                </p>
              </div>
              <div class="services-col">
                <img src={Training} alt="this is " />
                <h3>Trainings</h3>
                <p>
                  we will also provide you training on{" "}
                  <strong>"training on how to survive in wild"</strong>
                  Completion of this training will give you the essential
                  information for wilderness survival. You will know the
                  survival basics, shelter, water, fire food.
                </p>
              </div>
            </div>
          </section3>
        </div>
      </div>
    </>
  );
};
export default Home;
