import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
export const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="gigCard">
        <img src={item.img} alt={item.name} />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt={item.name} />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="https://www.svgrepo.com/show/13695/star.svg" alt="" />
            <span>{item.star}</span>
          </div>
          <hr />

          <div className="details">
            <img src="https://www.svgrepo.com/show/13653/like.svg" alt="" />
            <div className="price">
              <span>STARTING AT</span>
              <h2>{item.price} $</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
