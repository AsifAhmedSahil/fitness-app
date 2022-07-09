 import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import "../../App.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (

    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* --------------the best fit app */}
        <div className="the-best-fit">
          <div className="under-best"></div>
          <span>The best fitness app in Chittagong</span>
        </div>

        {/* -----------hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures*********** */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+968</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* bere the buttons */}
        <div className="hero-buttons">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images**************** */}

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}

        <div className="calories">
            <img src={calories} alt="" />
            <div>
                <span>Calories Burned</span><span>220 kcal</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
