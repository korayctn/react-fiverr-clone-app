import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";
export const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> {">"} Mijal
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6663d6092d26f683f7c3ad21d6294689-642503021660152279.371222/0832C4D8-EEB5-49CC-B875-A2E90B4E6331"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis minus corporis nobis temporibus illum optio earum hic
              facere neque amet nulla expedita suscipit quasi modi autem
              inventore, impedit incidunt, totam id! Deserunt laboriosam
              temporibus, tenetur dolore obcaecati dignissimos cumque, placeat
              rem vel impedit qui? Aliquid adipisci sit doloremque nesciunt
              corrupti.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6663d6092d26f683f7c3ad21d6294689-642503021660152279.371222/0832C4D8-EEB5-49CC-B875-A2E90B4E6331"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis minus corporis nobis temporibus illum optio earum hic
              facere neque amet nulla expedita suscipit quasi modi autem
              inventore, impedit incidunt, totam id! Deserunt laboriosam
              temporibus, tenetur dolore obcaecati dignissimos cumque, placeat
              rem vel impedit qui? Aliquid adipisci sit doloremque nesciunt
              corrupti.
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6663d6092d26f683f7c3ad21d6294689-642503021660152279.371222/0832C4D8-EEB5-49CC-B875-A2E90B4E6331"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis minus corporis nobis temporibus illum optio earum hic
              facere neque amet nulla expedita suscipit quasi modi autem
              inventore, impedit incidunt, totam id! Deserunt laboriosam
              temporibus, tenetur dolore obcaecati dignissimos cumque, placeat
              rem vel impedit qui? Aliquid adipisci sit doloremque nesciunt
              corrupti.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6663d6092d26f683f7c3ad21d6294689-642503021660152279.371222/0832C4D8-EEB5-49CC-B875-A2E90B4E6331"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis minus corporis nobis temporibus illum optio earum hic
              facere neque amet nulla expedita suscipit quasi modi autem
              inventore, impedit incidunt, totam id! Deserunt laboriosam
              temporibus, tenetur dolore obcaecati dignissimos cumque, placeat
              rem vel impedit qui? Aliquid adipisci sit doloremque nesciunt
              corrupti.
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6663d6092d26f683f7c3ad21d6294689-642503021660152279.371222/0832C4D8-EEB5-49CC-B875-A2E90B4E6331"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis minus corporis nobis temporibus illum optio earum hic
              facere neque amet nulla expedita suscipit quasi modi autem
              inventore, impedit incidunt, totam id! Deserunt laboriosam
              temporibus, tenetur dolore obcaecati dignissimos cumque, placeat
              rem vel impedit qui? Aliquid adipisci sit doloremque nesciunt
              corrupti.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/6663d6092d26f683f7c3ad21d6294689-642503021660152279.371222/0832C4D8-EEB5-49CC-B875-A2E90B4E6331"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis minus corporis nobis temporibus illum optio earum hic
              facere neque amet nulla expedita suscipit quasi modi autem
              inventore, impedit incidunt, totam id! Deserunt laboriosam
              temporibus, tenetur dolore obcaecati dignissimos cumque, placeat
              rem vel impedit qui? Aliquid adipisci sit doloremque nesciunt
              corrupti.
            </p>
          </div>
        </div>
        <hr />

        <div className="write">
          <textarea
            name="text"
            placeholder="Your message"
            id="textArea"
            cols="80"
            rows="5"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
