import React from "react";
import "../App.css";
import cheops from "../photos/cheops.jpg";
export default function Cheops() {
  return (
    <div className="miracleCard">
      <p className="title">Great Pyramid of Giza</p>
      <img src={cheops} alt="cheops"></img>
      <p className="info">
        The Pyramid of Cheops is the largest of the Egyptian pyramids, the only
        one of the 'Seven Wonders of the World' that has survived to this day.
        It is one of the three most famous pyramids on the Giza plateau -
        Cheops, Khafren and Mykerin. The entrance to the Great Pyramid is on the
        north side, about 59 feet (18 metres) above ground level. While immense,
        the pyramid has very little open space inside. A sloping corridor
        descends from the entrance through the pyramid’s interior masonry,
        penetrates the rocky soil on which the structure rests, and ends in an
        unfinished underground chamber. From the descending corridor branches an
        ascending passageway that leads to a room known as the Queen’s Chamber
        and to a great slanting passageway known as the Grand Gallery. That tall
        corbelled passageway is 151 feet (46 metres) long. At the upper end of
        the Grand Gallery, a long and narrow passage gives access to the burial
        room proper, usually termed the King’s Chamber.{" "}
      </p>
    </div>
  );
}
