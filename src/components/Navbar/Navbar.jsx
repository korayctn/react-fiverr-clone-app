import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  // SCROLL EVENT LISTENING
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  /// /// /// ////////

  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  return (
    <>
      <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
          <Link to="/">
            <div className="logo">
              <span className="text">fiverr</span>
              <span className="dot">.</span>
            </div>
          </Link>
          <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            {!currentUser && <span>Sign In</span>}
            {!currentUser && <span>Become a Seller</span>}
            {!currentUser && (
              <button className={active && "active"}>Join</button>
            )}
            {currentUser && (
              <div
                className="user"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <img
                  src="https://secure.gravatar.com/avatar/a2d9d5aa91247f8595e6d18b16bc8399?s=80&d=mm&r=g"
                  alt={currentUser?.username}
                />
                <span>{currentUser?.username}</span>
                {open && (
                  <div className="options">
                    {currentUser?.isSeller ? (
                      <>
                        <Link to="/gigs">Gigs</Link>
                        <Link to="/add">Add new gig</Link>

                        <Link to="/orders">Orders</Link>
                        <Link to="/messages">Messages</Link>
                        <Link to="/logout">Logout</Link>
                      </>
                    ) : (
                      "Not seller"
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {(active || pathname !== "/") && (
          <>
            <hr />
            <div className="menu">
              <Link to="/n">Graphics & Design</Link>
              <Link to="/">Video & Animation</Link>
              <Link to="/">Writing & Translation</Link>
              <Link to="/">AI Services</Link>
              <Link to="/">Digital Marketing</Link>
              <Link to="/">Music & Audio</Link>
              <Link to="/">Programming and Tech</Link>
              <Link to="/">Business</Link>
              <Link to="/">Lifestyle</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};
