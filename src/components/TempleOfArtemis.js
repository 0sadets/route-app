import React from "react";
import "../App.css";
import hram from "../photos/hram_artemidy.jpg";
export default function TempleOfArtemis() {
  return (
    <div className="miracleCard">
      <p className="title">Temple of Artemis of Ephesus</p>
      <img src={hram} alt="Temple"></img>
      <p className="info">
        The Temple of Artemis or Artemision is the first ancient Greek marble
        temple, which was located in Ionia on the Aegean coast of Asia Minor
        near the ancient city of Ephesus and was dedicated to the ancient local
        form of the goddess Artemis. During its history, the temple was
        completely rebuilt twice.Ephesus (or Ephesos) was a Greek colony on the
        eastern coast of Asia Minor founded in the 8th century BCE, although
        there had been Greek settlers in the area from c. 1200 BCE. The Greek
        goddess Artemis (Diana to the Romans) was particularly important to the
        Ephesians, indeed her birthplace was considered by them as nearby
        Ortygia (for other Greeks it was Delos). Artemis was the goddess of
        chastity, hunting, wild animals, forests, childbirth, and fertility. The
        goddess' cult at Ephesus included eastern elements (borrowed from
        goddesses such as Isis, Cybele, and the “Mistress of the Animals”), as
        did her representation in art, with surviving statues, unlike elsewhere
        in Greece, being covered in eggs as symbols of her role as a fertility
        goddess. Hence, the goddess worshipped at Ephesus is often referred to
        as Artemis Ephesia.
      </p>
    </div>
  );
}
