import React from "react";
import "./Homepage.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Featured } from "../../components/featured/Featured";
import { TrustedBy } from "../../components/trustedBy/trustedBy";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Featured />
      <TrustedBy />
    </div>
  );
};
