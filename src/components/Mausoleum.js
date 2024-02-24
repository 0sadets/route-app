import React from "react";
import "../App.css";
import mausoleum from "../photos/Mausoleum.jpg";
export default function Mausoleum() {
  return (
    <div className="miracleCard">
      <p className="title">Mausoleum in Halicarnassus</p>
      <img src={mausoleum} alt="Mausoleum"></img>
      <p className="info">
        The mausoleum is a temple-tomb and funerary monument of King Mausolus
        (Greek: Μαύσωλος), built between 353 and 350 BC. e. by order of his wife
        Artemisia III in Halicarnassus (modern Bodrum, Turkey), one of the seven
        ancient wonders of the world. According to the description by the Roman
        author Pliny the Elder (23–79 CE), the monument was almost square, with
        a total periphery of 411 feet (125 metres). It was bounded by 36
        columns, and the top formed a 24-step pyramid surmounted by a four-horse
        marble chariot. Fragments of the Mausoleum’s sculpture that are
        preserved in the British Museum include a frieze of battling Greeks and
        Amazons and a statue 10 feet (3 metres) high, possibly of Mausolus. The
        Mausoleum was probably destroyed by an earthquake between the 11th and
        the 15th century CE, and the stones were reused in local buildings.
      </p>
    </div>
  );
}
