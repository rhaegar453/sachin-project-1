import react from "react";
import Card from "./components/card";
import Navbar from "./components/header";
import data from "./utils/index.json";

const App = () => {
  const value = data[0];
  console.log(value);
  return (
    <div>
      <Navbar
        title={"Short News App"}
        handleBookMarkClick={(e) =>
          console.log("Clicked on the bookmark button")
        }
        handleLikedClick={(e) => console.log("Clicked on the liked button")}
      />
      <Card
        title={value.title}
        bookmarked={value.bookmarked}
        likes={value.likes}
        tags={value.tags}
      />
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
