import React from "react";
import "../App.css";
import sadu from "../photos/sadi-semiramidi.jpg";
export default function HangingGardens() {
  return (
    <div className="miracleCard">
      <p className="title">The Hanging Gardens of Babylon</p>
      <img src={sadu} alt="cheops"></img>
      <p className="info">
        The Hanging Gardens of Semiramis is one of the ancient Seven Wonders of
        the World, which was, according to ancient sources, located in Babylon
        (modern Hilla). The name is associated with the legendary queen
        Semiramis, for whom the gardens were built. This is the only wonder of
        the world whose exact location is unknown. The Hanging Gardens were
        described in detail by a number of classical authors. Though some
        sources disagreed on who built them, a number of descriptions concurred
        that the gardens were located near the royal palace and were set upon
        vaulted terraces. They were also described as having been watered by an
        exceptional system of irrigation and roofed with stone balconies on
        which were layered various materials, such as reeds, bitumen, and lead,
        so that the irrigation water would not seep through the terraces.
        Although no certain traces of the Hanging Gardens have been found, a
        German archaeologist, Robert Koldewey, did uncover an unusual series of
        foundation chambers and vaults in the northeastern corner of the palace
        at Babylon. A well in one of the vaults may have been used in
        conjunction with a chain pump and thus was thought perhaps to be part of
        the substructure of the once towering Hanging Gardens.
      </p>
    </div>
  );
}
