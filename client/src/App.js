import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import {videos} from './videos';
import Video from './Video'
// import MainContent from "./MainContent";
// import Search from "./Search";
// import Add from "./Add";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading/>
      <div className="Cards">
      {videos.map((video, index) => {
        return(
          <Video className="card" {...video} key={video.id} index={index}/>
        )
      })}
      </div>
      {/* <Search/>
      <MainContent/> */}
      <Footer/>
    </div>
  );
}

export default App;
