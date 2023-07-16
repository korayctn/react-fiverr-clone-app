import React from "react";
import "./Homepage.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Featured } from "../../components/Featured/Featured";
import { TrustedBy } from "../../components/trustedBy/trustedBy";
import { Slider } from "../../components/Slider/Slider";
import { Videopart } from "../../components/Videopart/Videopart";
import { InspiringWork } from "../../components/InspiringWork/InspiringWork";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Featured />
      <TrustedBy />
      <Slider />
      <Videopart />
      <InspiringWork />
    </div>
  );
};
