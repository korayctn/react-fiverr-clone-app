import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";
export const Orders = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="myGigs">
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser.isSeller === true ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
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
                    src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
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
                    src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
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
                    src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
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
                    src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
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
                    src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
                    alt=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
