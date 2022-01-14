import React from "react";
import Button from "../button";
import "./index.css";

const Navbar = ({ title, handleBookMarkClick, handleLikedClick }) => {
  return (
    <div className="navbar">
      <h1 className="headerTitle">{title}</h1>
      <div className="buttonContainer">
        <Button type={"navbutton"} onClick={handleBookMarkClick}>
          Bookmarked
        </Button>
        <Button type={"navbutton"} onClick={handleLikedClick}>
          Liked
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
