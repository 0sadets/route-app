import React from "react";
import "../App.css";
import lighthouse from "../photos/lighthouse.jpg";
export default function Lighthouse() {
  return (
    <div className="miracleCard">
      <p className="title">The Lighthouse of Alexandria or Pharos Lighthouse</p>
      <img src={lighthouse} alt="Lighthouse"></img>
      <p className="info">
        The Lighthouse of Alexandria or Pharos Lighthouse is one of the Seven
        Wonders of the Ancient World, which was located on the island of Pharos
        (now a cape within the city of Alexandria in Egypt). Thanks to its
        height and system of lights, the lighthouse guaranteed sailors safe
        passage into the Great Harbor of Alexandria. In 1994 archaeologist
        Jean-Yves Empereur, founder of the Centre for Alexandrian Studies
        (Centre d’Etudes Alexandrines), made an exciting find in the waters off
        Pharos Island. He had been called in by the Egyptian government to map
        anything of archaeological significance in this underwater area before a
        concrete breakwater was erected over the site. He mapped the location of
        hundreds of huge masonry blocks; at least some of these blocks are
        believed to have fallen into the sea when the lighthouse was destroyed
        by an earthquake in the 1300s. A large amount of statuary was also
        discovered, including a colossal statue of a king dating to the 3rd
        century BCE that was thought to represent Ptolemy II.
      </p>
    </div>
  );
}
