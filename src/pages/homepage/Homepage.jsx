import React from "react";
import "./Homepage.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Featured } from "../../components/featured/Featured";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Featured />
    </div>
  );
};
