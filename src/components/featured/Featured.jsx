import React from "react";
import "./Featured.scss";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right{" "}
            <i>
              {" "}
              freelance <br /> service
            </i>
            ,right away
          </h1>
          <div className="search">
            <div className="searchInput">
              <input type="text" placeholder="Search for the services." />
            </div>
            <button className="submitButton">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          <div className="popular">
            Popular :<span>Website Design</span>
            <span>WordPress</span>
            <span>Logo Design</span>
            <span>AI Services</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
