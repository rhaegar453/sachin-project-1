import React from "react";
import Button from "../button";
import Chip from "../chip";
import "./index.css";

const Card = ({ image, title, liked, bookmarked, tags, likes }) => {
    console.log(likes)
  return (
    <div className="card">
      <div>
        <p className="title">{title}</p>
      </div>
      <div className="mt20 centered">
        <Button >Details</Button>
        <Button type={liked?'danger':'primary'}>Like</Button>
        <Button type={bookmarked?'danger':'primary'}>Bookmark</Button>
      </div>
      <div className="mt20">
        <p className="tagTitle">Tags</p>
        <div >
          {tags&&tags.map((item) => (
            <Chip>{item}</Chip>
          ))}
        </div>
      </div>
      <div className="mt20 centered">
        <Button type={'navy'}>Likes {likes}</Button>
      </div>
    </div>
  );
};

export default Card;
