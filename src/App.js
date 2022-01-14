import react, { useState } from "react";
import Card from "./components/card";
import Navbar from "./components/header";
import data from "./utils/index.json";

const App = () => {
  const [values, setValue]=useState(data);
  const handleLike = (id, liked) => {
    setValue((items)=>{
      const updatedItems=items.map(i=>{
        if(i.id===id){
          return {...i, liked:!liked, likes:liked===true?i.likes-1:i.likes+1}
        }
        else{
          return i;
        }
      })
      return updatedItems
    })
  };
  const handleBookmark = (id, bookmarked) => {
    console.log('handling the bookmark',id)
    setValue((items)=>{
      const updatedItems=items.map(i=>{
        if(i.id===id){
          return {...i, bookmarked:!bookmarked}
        }
        else{
          return i;
        }
      })
      return updatedItems
    })
  };
  return (
    <div>
      <Navbar
        title={"Short News App"}
        handleBookMarkClick={(e) =>
          console.log("Clicked on the bookmark button")
        }
        handleLikedClick={(e) => console.log("Clicked on the liked button")}
      />
      {values.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            onBookmarkButton={handleBookmark}
            onLikeButton={handleLike}
            title={item.title}
            bookmarked={item.bookmarked}
            likes={item.likes}
            liked={item.liked}
            tags={item.tags}
            image={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default App;
