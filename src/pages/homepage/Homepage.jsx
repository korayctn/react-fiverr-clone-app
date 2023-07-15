import React from "react";
import "./Homepage.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Featured } from "../../components/Featured/Featured";
import { TrustedBy } from "../../components/trustedBy/trustedBy";
import { Slider } from "../../components/Slider/Slider";
import { Videopart } from "../../components/Videopart/Videopart";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Featured />
      <TrustedBy />
      <Slider />
      <Videopart />
    </div>
  );
};
