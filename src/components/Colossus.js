import React from "react";
import "../App.css";
import colossus from "../photos/colos.jpg";
export default function Colossus() {
  return (
    <div className="miracleCard">
      <p className="title">Colossus of Rhodes</p>
      <img src={colossus} alt="Colossus"></img>
      <p className="info">
        The Colossus of Rhodes is a huge statue that became one of the Seven
        Wonders of the World. Grateful residents of the island of Rhodes decided
        to build it in honor of the sun god Helios, who helped them endure in an
        unequal struggle against invaders. The siege of the beautiful island
        lasted almost a year and the probability of victory was quite small, but
        the patron helped the islanders win. For this, Helios was immortalized
        in the form of a huge statue. For the people of Rhodes, the statue
        represented independence and freedom, just as the Statue of Liberty in
        New York does for Americans. The statue, which took 12 years to build
        (c. 294–282 BCE), was toppled by an earthquake about 225/226 BCE. The
        fallen Colossus was left in place until 654 CE, when Arabian forces
        raided Rhodes and had the statue broken up and the bronze sold for
        scrap. Supposedly, the fragments totaled more than 900 camel loads.
      </p>
    </div>
  );
}
