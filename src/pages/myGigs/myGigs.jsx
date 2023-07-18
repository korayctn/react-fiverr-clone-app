import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";
export const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>My Gigs</h1>
          <Link to="/add">
            <button>Add new Gig</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295497865/original/53093613cf3bd4a296fa426810c5b36f54000d95.png"
                  alt=""
                />
              </td>
              <td>I will create amazing character digital ai art</td>
              <td>59$</td>
              <td>4</td>
              <td>
                <img
                  className="actionImg"
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295497865/original/53093613cf3bd4a296fa426810c5b36f54000d95.png"
                  alt=""
                />
              </td>
              <td>I will create amazing character digital ai art</td>
              <td>59$</td>
              <td>4</td>
              <td>
                <img
                  className="actionImg"
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295497865/original/53093613cf3bd4a296fa426810c5b36f54000d95.png"
                  alt=""
                />
              </td>
              <td>I will create amazing character digital ai art</td>
              <td>59$</td>
              <td>4</td>
              <td>
                <img
                  className="actionImg"
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295497865/original/53093613cf3bd4a296fa426810c5b36f54000d95.png"
                  alt=""
                />
              </td>
              <td>I will create amazing character digital ai art</td>
              <td>59$</td>
              <td>4</td>
              <td>
                <img
                  className="actionImg"
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                  alt=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/295497865/original/53093613cf3bd4a296fa426810c5b36f54000d95.png"
                  alt=""
                />
              </td>
              <td>I will create amazing character digital ai art</td>
              <td>59$</td>
              <td>4</td>
              <td>
                <img
                  className="actionImg"
                  src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                  alt=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
