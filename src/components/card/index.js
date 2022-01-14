import React, { useState } from "react";
import Button from "../button";
import Chip from "../chip";
import "./index.css";

const Card = ({
  id,
  image,
  title,
  liked,
  bookmarked,
  tags,
  likes,
  onLikeButton,
  onBookmarkButton,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleHoverIn = () => {
    setHovered(true);
  };
  const handleHoverOut = () => {
    setHovered(false);
  };
  const handleLikeButton = () => {
    onLikeButton(id, liked);
  };
  const handleBookmarkButton = () => {
    onBookmarkButton(id, bookmarked);
  };
  return (
    <div
      style={{ background: !hovered ? `url(${image})` : "" }}
      className="card"
      onMouseOver={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
        {bookmarked&&!hovered&&<div className="bookmarkButton">
            <Button type={'danger'}>Bookmarked</Button>
        </div>}
      {hovered && (
        <div>
          <div>
            <p className="title">{title}</p>
          </div>
          <div className="mt20 centered">
            <Button>Details</Button>
            <Button
              type={liked ? "danger" : "primary"}
              onClick={handleLikeButton}
            >
              Like
            </Button>
            <Button
              type={bookmarked ? "danger" : "primary"}
              onClick={handleBookmarkButton}
            >
              Bookmark
            </Button>
          </div>
          <div className="mt20">
            <p className="tagTitle">Tags</p>
            <div>{tags && tags.map((item, index) => <Chip key={index}>{item}</Chip>)}</div>
          </div>
          <div className="mt20 centered">
            <Button type={"navy"}>Likes {likes}</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
