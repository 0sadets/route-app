import React from "react";
import "../App.css";
import zevs from "../photos/zevs.jpg";
export default function Zevs() {
  return (
    <div className="miracleCard">
      <p className="title">Statue of Zeus in Olympia</p>
      <img src={zevs} alt="zevs"></img>
      <p className="info">
        The statue of Olympian Zeus is one of the ancient Seven Wonders of the
        World - an ancient Greek statue of Zeus by Phidias, installed in the
        center of the Temple of Zeus in Olympia on the Peloponnese peninsula
        (Western Greece). 430s BC is. The statue was one of two masterpieces by
        the Greek sculptor Phidias (the other being the statue of Athena in the
        Parthenon) and was placed in the huge Temple of Zeus at Olympia in
        western Greece. The statue, almost 12 m (40 feet) high and plated with
        gold and ivory, represented the god sitting on an elaborate cedarwood
        throne ornamented with ebony, ivory, gold, and precious stones. On his
        outstretched right hand was a statue of Nike (Victory), and in the god’s
        left hand was a sceptre on which an eagle was perched. The statue, which
        took eight years to construct, was noted for the divine majesty and
        goodness it expressed. The discovery in the 1950s of the remains of
        Phidias’ workshop at Olympia confirmed the statue’s date of about 430
        BCE. The temple was destroyed in 426 CE, and the statue, of which no
        accurate copies survive, may have been destroyed then or in a fire at
        Constantinople (now Istanbul) about 50 years later.
      </p>
    </div>
  );
}
