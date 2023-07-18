import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

export const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            Liverr {">"} Graphics & Design {">"}
          </span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b12f814e0fa67d2701c28571c348ce81-1681398092934/91a83111-d3f6-4526-8799-3c0d6988b015.jpg"
              alt=""
            />
            <span>Vlad Mccanly</span>
            <div className="stars">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                alt=""
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                alt=""
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                alt=""
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                alt=""
              />
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                alt=""
              />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/295497865/original/53093613cf3bd4a296fa426810c5b36f54000d95/create-character-high-level-digital-concept-art.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/295497865/original/5226e4b1d744217bb8be8bdb1e56f7dd18a6da63/create-character-high-level-digital-concept-art.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/295497865/original/3847be7b9e526d8c654f5e9487b7ddc30e6e8a1f/create-character-high-level-digital-concept-art.png"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/9fb6088255b0704f82f476f78ba9bb81-1689078387/Free%20Bonus/create-character-high-level-digital-concept-art.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a63870bd15d5fb68cec15b3c91151ce3-1688506571/Image%2013/create-character-high-level-digital-concept-art.png"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I'm Vlad, a digital artist, and I create atmospheric concept arts,
            illustrations and photos of unique characters, landscapes and
            objects using best and most innovative AI Midjourney. I can create
            art for your project on any topic, so feel free to share your ideas
            with me and we will make ideas into reality!
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/b12f814e0fa67d2701c28571c348ce81-1681398092934/91a83111-d3f6-4526-8799-3c0d6988b015.jpg"
                alt=""
              />
              <div className="info">
                <span>Vlad Mccanly</span>
                <div className="stars">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                    alt=""
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                    alt=""
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                    alt=""
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                    alt=""
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                    alt=""
                  />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path>
                </svg>
                <span>Yes</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path>
                </svg>
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path>
                </svg>
                <span>Yes</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path>
                </svg>
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/342/559/original/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                  alt=""
                />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was amazing, each and every day he
                sent me images that I was free to request changes to. They
                listened, understood, and delivered above and beyond my
                expectations. I absolutely recommend this gig, and know already
                that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path>
                </svg>
                <span>Yes</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path>
                </svg>
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                <path d="M9 4H7v5h5V7H9V4z"></path>
              </svg>
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
              </svg>
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>{" "}
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>{" "}
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>{" "}
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <svg
                width="16"
                height="16"
                viewBox="0 0 11 9"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
              </svg>{" "}
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
