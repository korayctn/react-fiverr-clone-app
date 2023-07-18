import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";

export const Messages = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta animi, et ipsa sunt totam natus odit molestiae explicabo nisi!";

  return (
    <div className="messages">
      <div className="myMessages">
        <div className="container">
          <div className="title">
            <h1>My Gigs</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Buyer</th>
                <th>Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="active">
                <td>Anna Bell</td>
                <td>{message.substring(0, 30)}...</td>
                <td>15.07.2023</td>
                <td>
                  <Link to="/message/123">
                    {" "}
                    <img
                      className="actionImg"
                      src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
                      alt=""
                    />
                  </Link>
                </td>
              </tr>
              <tr className="active">
                <td>Carol Steve</td>
                <td>{message.substring(0, 30)}...</td>
                <td>15.07.2023</td>
                <td>
                  <Link to="/message/123">
                    {" "}
                    <img
                      className="actionImg"
                      src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
                      alt=""
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Lannie Coleman</td>
                <td>{message.substring(0, 30)}...</td>
                <td>15.07.2023</td>
                <td>
                  <Link to="/message/123">
                    {" "}
                    <img
                      className="actionImg"
                      src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
                      alt=""
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Don Weber</td>
                <td>{message.substring(0, 30)}...</td>
                <td>15.07.2023</td>
                <td>
                  <Link to="/message/123">
                    {" "}
                    <img
                      className="actionImg"
                      src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
                      alt=""
                    />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Audrey Richards</td>
                <td>{message.substring(0, 30)}...</td>
                <td>15.07.2023</td>
                <td>
                  <Link to="/message/123">
                    {" "}
                    <img
                      className="actionImg"
                      src="https://w7.pngwing.com/pngs/224/111/png-transparent-message-logo-illustration-computer-icons-email-bounce-address-message-mail-icon-miscellaneous-angle-rectangle.png"
                      alt=""
                    />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
