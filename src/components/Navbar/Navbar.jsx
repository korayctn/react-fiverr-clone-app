import React, { useEffect, useState } from "react";
import "./Navbar.scss";
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
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  return (
    <>
      <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </div>
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
                        <span>Gigs</span>
                        <span>Add new gig</span>

                        <span>Orders</span>
                        <span>Messages</span>
                        <span>Logout</span>
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
        {active && (
          <>
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
          </>
        )}
      </div>
      <div className="dummy">DUMMY</div>
    </>
  );
};
