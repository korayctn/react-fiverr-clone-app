import React from "react";
import "./Add.scss";
export const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add new Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="I will do something for you." />
            <label htmlFor="">Category</label>
            <select name="" id="">
              <option value="webDevelopment">Web Development</option>
              <option value="design">Design</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description of your service"
            ></textarea>
            <button>Submit</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="Webpage development" />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description of your service"
            ></textarea>
            <label htmlFor="">Delivery Time</label>
            <input type="text" placeholder="2 days" />
            <label htmlFor="">Revision Number</label>
            <input type="text" placeholder="3 revision" />
            <label htmlFor="">Add features</label>
            <input type="text" placeholder="page design" />
            <input type="text" placeholder="file uploading" />
            <input type="text" placeholder="setting up domain" />
            <input type="text" placeholder="hosting" />
            <label htmlFor="">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
