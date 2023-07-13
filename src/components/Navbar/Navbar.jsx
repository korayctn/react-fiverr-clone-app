import React from "react";
import "./Navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Graphics & Design</span>
        <span>Video & Animation</span>
        <span>Writing & Translation</span>
        <span>AI Services</span>
        <span>Digital Marketing</span>
        <span>Music & Audio</span>
        <span>Programming and Tech</span>
        <span>Business</span>
        <span>Lifestyle</span>
      </div>
    </div>
  );
};
