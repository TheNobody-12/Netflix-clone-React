import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
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
          {truncate(
            `Movie Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. A nihil ullam maxime aut reprehenderit error ipsa magni
          obcaecati molestias modi ducimus nisi voluptates, eos deleniti
          possimus tenetur quibusdam dicta laudantium? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Odio porro, accusamus iste sint aut
          adipisci voluptate est tempora dolore ducimus beatae mollitia
          assumenda amet minus numquam obcaecati voluptatum vero explicabo?`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
