import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://t4.ftcdn.net/jpg/04/30/78/71/360_F_430787191_PUREgjGnYQY5G2myi3PTgyZ4rm1XfqEu.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          This is a description of the movie
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
